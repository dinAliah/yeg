function resetTurnstile(formData) {
  if (!window.turnstile) return

  const token = formData.get("cf-turnstile-response")
  const widgets = document.querySelectorAll("[data-turnstile-widget]")

  for (const widget of widgets) {
    const responseField = widget.querySelector('input[name="cf-turnstile-response"]')
    if (responseField && responseField.value === token && widget.dataset.widgetId) {
      window.turnstile.reset(widget.dataset.widgetId)
      return
    }
  }
}

export async function submitProtectedForm(endpointId, options) {
  const formData = options && options.body

  if (!(formData instanceof FormData)) {
    throw new TypeError("Protected forms must submit FormData.")
  }

  const token = formData.get("cf-turnstile-response")
  if (typeof token !== "string" || token.trim() === "") {
    throw new Error("Cloudflare Turnstile verification is required.")
  }

  let response
  try {
    response = await fetch("/api/secure-form", {
      method: "POST",
      headers: { "x-form-id": endpointId },
      body: formData,
    })
  } finally {
    resetTurnstile(formData)
  }

  if (!response.ok) {
    throw new Error(`Protected form submission failed with status ${response.status}.`)
  }

  return response
}
