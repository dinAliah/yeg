"use client"
import TurnstileField from "@/components/TurnstileField"
import { submitProtectedForm } from "@/lib/secure-form"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const programs = [
  "DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY)",
  "DIPLOMA PENGURUSAN KARGO UDARA (DACM)",
  "DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM)",
  "DIPLOMA AIRCRAFT MAINTAINANCE TECHNOLOGY (DAMT)",
  "DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY-WBL)",
  "SPHU - SIJIL PROFESIONAL PENGURUSAN HAJI & UMRAH",
  "AVIATION - CABIN CREW",
  "AVIATION - CUSTOMER SERVICE",
  "AVIATION - GROUND HANDLING",
  "AVIATION - TICKETING",
]

const states = [
  "Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka",
  "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang",
  "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu",
]

const sources = [
  "Website YEG Academy", "Tiktok", "Instagram", "Facebook",
  "Event", "Youtube", "News",
]

export default function ContactPage() {
  const [status, setStatus] = useState("")
  const [submitting, setSubmitting] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setStatus("")
    setSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get("Email") || "")

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Email must be in a valid format.")
      setSubmitting(false)
      return
    }

    try {
      const response = await submitProtectedForm(
        "form-01",
        { method: "POST", body: formData }
      )
      const data = await response.json()

      if (data.success) {
        form.reset()
        setStatus("Penghantaran berjaya! Pegawai kami akan menghubungi anda.")
      } else {
        setStatus("Penghantaran tidak berjaya. Sila cuba lagi.")
      }
    } catch {
      setStatus("Ralat sambungan. Sila cuba lagi.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="yeg-contact">
      <section className="yeg-contact-hero">
        <div className="yeg-contact-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Contact Us</span>
        </div>
        <h1>Contact Us</h1>
        <p>Find the right career program and get one-to-one guidance from our education advisors.</p>
      </section>

      <section className="yeg-contact-shell">
        <div className="yeg-contact-map">
          <iframe
            title="YEG Academy location"
            src="https://www.google.com/maps?q=The+Strand+Garden+Office+Kota+Damansara+Selangor&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="yeg-contact-details">
          <article>
            <h2>Official Address</h2>
            <address>
              YEG Academy (M) Sdn Bhd<br />
              BLOK E-2-2, The Strand Garden Office,<br />
              Kota Damansara, Jalan PJU 5/1,<br />
              47810 Petaling Jaya, Selangor
            </address>
          </article>
          <article>
            <h2>Call or Email Us</h2>
            <p><Phone size={15} /> <a href="tel:+60361435073">+603-6143 5073</a></p>
            <p><Mail size={15} /> <a href="mailto:info@yegmy.com">info@yegmy.com</a></p>
            <p><Clock size={15} /> Monday to Friday, 8:30am-5:30pm</p>
          </article>
        </div>

        <form className="yeg-contact-form" onSubmit={submit}>
          <h2>Send an Enquiry</h2>
          <p className="yeg-contact-formIntro">Submit your details and our team will contact you.</p>

          <div className="yeg-contact-fieldGrid">
            <label>
              <span>Full Name *</span>
              <input name="Name" type="text" required placeholder="Full name" />
            </label>
            <label>
              <span>Phone Number *</span>
              <input name="NumberPhone" type="tel" required placeholder="+60..." />
            </label>
            <label>
              <span>Email *</span>
              <input name="Email" type="email" required placeholder="you@example.com" />
            </label>
            <label>
              <span>Age</span>
              <input name="Age" type="number" min="15" max="99" placeholder="Age" />
            </label>
            <label>
              <span>Parents Name</span>
              <input name="ParentName" type="text" placeholder="Parent or guardian name" />
            </label>
            <label>
              <span>Parents Phone Number</span>
              <input name="ParentNumber" type="tel" placeholder="+60..." />
            </label>
          </div>

          <div className="yeg-contact-fieldGrid yeg-contact-selectGrid">
            <label>
              <span>Interested Program *</span>
              <select name="Program" required defaultValue="">
                <option value="" disabled>Select a program</option>
                {programs.map((program) => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </label>
            <label>
              <span>State *</span>
              <select name="State" required defaultValue="">
                <option value="" disabled>Select state</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </label>
            <label>
              <span>How did you hear about us?</span>
              <select name="Media" defaultValue="">
                <option value="" disabled>Select source</option>
                {sources.map((source) => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </label>
          </div>

          {status && <div className="yeg-contact-status" role="status">{status}</div>}
          <TurnstileField />
          <button type="submit" disabled={submitting}>
            <Send size={16} />
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </section>
    </main>
  )
}
