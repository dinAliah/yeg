"use client"

import { useEffect, useRef, useState } from "react"

const SCRIPT_ID = "cloudflare-turnstile-script"

export default function TurnstileField() {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [error, setError] = useState("")
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey) {
      setError("Security verification is not configured. Please contact the site administrator.")
      return
    }

    let active = true
    const renderWidget = () => {
      if (!active || !window.turnstile || !containerRef.current || widgetIdRef.current !== null) return

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: () => setError(""),
        "expired-callback": () => setError("Verification expired. Please complete it again."),
        "error-callback": () => setError("Verification failed. Please reload the page and try again."),
      })
      containerRef.current.dataset.widgetId = widgetIdRef.current
    }
    const handleScriptError = () => {
      if (active) setError("Could not load security verification. Please check your connection and try again.")
    }

    let script = document.getElementById(SCRIPT_ID)
    if (window.turnstile) {
      renderWidget()
    } else {
      if (!script) {
        script = document.createElement("script")
        script.id = SCRIPT_ID
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        script.async = true
        script.defer = true
      }
      script.addEventListener("load", renderWidget)
      script.addEventListener("error", handleScriptError)
      if (!script.isConnected) document.head.appendChild(script)
    }

    return () => {
      active = false
      if (script) {
        script.removeEventListener("load", renderWidget)
        script.removeEventListener("error", handleScriptError)
      }
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey])

  return (
    <div className="space-y-2" aria-label="Security verification">
      <div ref={containerRef} data-turnstile-widget />
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
    </div>
  )
}
