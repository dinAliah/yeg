"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"

function page() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { label: "Semua", value: "all" },
    { label: "Sijil", value: "sijil" },
    { label: "Diploma", value: "diploma" },
    { label: "Ijazah", value: "degree" },
    { label: "Sarjana", value: "master" },
    { label: "Doktor Falsafah (PhD)", value: "phd" },
  ]

  // Simple scroll reveal that works on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <>
      <Head>
        <title>Testimoni Pelajar 2027 · ACM · FPHU · YPKM</title>
        <meta
          name="description"
          content="Kisah dan pengalaman sebenar pelajar Aviation Career Malaysia, FPHU dan YPKM."
        />
      </Head>
          <section aria-labelledby="events-title" className="px-4 pb-8 pt-20 sm:px-6 lg:px-8">
                    <div className="relative mx-auto flex min-h-56 max-w-7xl items-end overflow-hidden rounded-3xl bg-slate-1200 sm:min-h-72">
                      <Image
                        src="/YEGacademy.jpeg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-slate-900/10" />
                      <div className="relative max-w-2xl px-6 py-8 text-white sm:px-10 sm:py-12">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
                          YEG Academy · Testimoni Pelajar
                        </p>
                        <h1 id="events-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                          Testimoni
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                          Kisah dan pengalaman pelajar Aviation Career Malaysia, FPHU dan YPKM — daripada peringkat Sijil hingga Doktor Falsafah (PhD).
                        </p>
                      </div>
                    </div>
                  </section>
      

      <div className="testimonials-2027">
        <style>{`
          .testimonials-2027 {
            --navy: #0f172a;
            --gold: #c9a227;
            --soft: #f8fafc;
            min-height: 100vh;
            background:
              radial-gradient(ellipse 80% 50% at 20% -10%, rgba(201, 162, 39, 0.08), transparent),
              radial-gradient(ellipse 60% 40% at 90% 10%, rgba(15, 23, 42, 0.04), transparent),
              linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
            color: var(--navy);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          /* ===== SCROLL REVEAL ===== */
          .reveal {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* ===== FILTER BAR ===== */
          .filter-bar {
            position: sticky;
            top: 0;
            z-index: 40;
            backdrop-filter: blur(16px);
            background: rgba(248, 250, 252, 0.85);
            border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          }

          /* ===== CARDS ===== */
          .t-card {
            background: rgba(255, 255, 255, 0.78);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 1.25rem;
            box-shadow: 0 4px 24px -4px rgba(15, 23, 42, 0.06);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }
          .t-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.12);
          }

          /* Hide based on filter */
          .testimonials-2027[data-filter="sijil"] [data-level]:not([data-level="sijil"]),
          .testimonials-2027[data-filter="diploma"] [data-level]:not([data-level="diploma"]),
          .testimonials-2027[data-filter="degree"] [data-level]:not([data-level="degree"]),
          .testimonials-2027[data-filter="master"] [data-level]:not([data-level="master"]),
          .testimonials-2027[data-filter="phd"] [data-level]:not([data-level="phd"]) {
            display: none !important;
          }

          /* Group section titles */
          .group-title {
            font-size: clamp(1.6rem, 4vw, 2.4rem);
            font-weight: 700;
            letter-spacing: -0.03em;
            color: var(--navy);
          }
          .group-sub {
            color: #64748b;
            font-size: 0.95rem;
          }

          /* TikTok section */
          .tiktok-card {
            background: #000;
            border-radius: 1.25rem;
            overflow: hidden;
            aspect-ratio: 9/16;
            position: relative;
          }
        `}</style>

        <div data-filter={activeFilter}>

          {/* ========== STICKY FILTER ========== */}
          <div className="filter-bar">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Kisah Pelajar 2027
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Tapis mengikut kelayakan
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setActiveFilter(f.value)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                        activeFilter === f.value
                          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========== HERO ========== */}
          <section className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 reveal">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Suara Pelajar Kami
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Pengalaman sebenar pelajar ACM, FPHU dan YPKM — daripada peringkat Sijil hingga Doktor Falsafah (PhD).
            </p>
          </section>

          {/* ========== ACM SECTION ========== */}
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="mb-8 reveal">
              <h2 className="group-title">Aviation Career Malaysia</h2>
              <p className="group-sub mt-1">ACM · Laluan pantas kerjaya dalam bidang penerbangan</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Example cards – replace with real content */}
              <article className="t-card p-6 reveal" data-level="diploma">
                <p className="text-slate-700 leading-relaxed">
                  “Program ACM ini membuka mata saya tentang industri penerbangan. Kini saya sudah mendapat pekerjaan tetap.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Aiman</p>
                    <p className="text-xs text-slate-500">Diploma · ACM</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="degree">
                <p className="text-slate-700 leading-relaxed">
                  “Program laluan pantas ijazah selama 3½ tahun. Selepas menamatkan diploma dan ijazah, saya terus menerima tawaran kerja.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Nurul</p>
                    <p className="text-xs text-slate-500">Ijazah · ACM</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="diploma">
                <p className="text-slate-700 leading-relaxed">
                  “Suasana pembelajaran di ACM sangat menyokong. Semua pensyarah mempunyai pengalaman dalam industri.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Farishah</p>
                    <p className="text-xs text-slate-500">Diploma · ACM</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* ========== FPHU SECTION ========== */}
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="mb-8 reveal">
              <h2 className="group-title">Fakulti Pengurusan Haji & Umrah</h2>
              <p className="group-sub mt-1">FPHU · Program daripada Sijil hingga Doktor Falsafah (PhD)</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="t-card p-6 reveal" data-level="diploma">
                <p className="text-slate-700 leading-relaxed">
                  “Program dari YEG Akademi ini sangat bagus. Sekarang saya telah menamatkan diploma saya.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Hanis Afiqah</p>
                    <p className="text-xs text-slate-500">Diploma · FPHU</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="sijil">
                <p className="text-slate-700 leading-relaxed">
                  “Suka sangat dengan suasana pembelajaran. Terima kasih YEG Academy.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">NUR</p>
                    <p className="text-xs text-slate-500">Sijil · FPHU</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="degree">
                <p className="text-slate-700 leading-relaxed">
                  “Dengan sikap terbuka di YEG Akademi, saya boleh hidup dengan budaya yang berbeza.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Fatiha</p>
                    <p className="text-xs text-slate-500">Ijazah · FPHU</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="master">
                <p className="text-slate-700 leading-relaxed">
                  “Program Sarjana ini membuka peluang untuk saya menjadi pakar rujuk dalam industri Haji dan Umrah.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Syakir</p>
                    <p className="text-xs text-slate-500">Sarjana · FPHU</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* ========== YPKM SECTION ========== */}
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="mb-8 reveal">
              <h2 className="group-title">Yayasan Pendidikan Kasih Malaysia</h2>
              <p className="group-sub mt-1">YPKM · Biasiswa & sokongan pelajar</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="t-card p-6 reveal" data-level="diploma">
                <p className="text-slate-700 leading-relaxed">
                  “Tanpa biasiswa YPKM, saya tak mampu sambung belajar. Terima kasih banyak.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Danisha</p>
                    <p className="text-xs text-slate-500">Diploma · Penerima Biasiswa YPKM</p>
                  </div>
                </div>
              </article>

              <article className="t-card p-6 reveal" data-level="degree">
                <p className="text-slate-700 leading-relaxed">
                  “YPKM bantu saya fokus belajar tanpa risau pasal yuran. Alhamdulillah.”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900">Fakhrullah</p>
                    <p className="text-xs text-slate-500">Ijazah · Penerima Biasiswa YPKM</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* ========== TIKTOK SECTION ========== */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center reveal">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Ikuti kami di TikTok
              </h2>
              <p className="mt-2 text-slate-600">
                Kehidupan kampus, kisah pelajar dan tip harian
              </p>
              <a
                href="https://www.tiktok.com/@aviationcareermalaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.8 6.34 6.34 0 0 0 9.5 22.14a6.34 6.34 0 0 0 6.34-6.34V8.75a8.23 8.23 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1.01-.15z"/>
                </svg>
                @aviationcareermalaysia
              </a>
            </div>

            {/* TikTok style grid – replace src with real embeds or screenshots later */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 reveal">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="tiktok-card flex items-center justify-center bg-slate-900">
                  <div className="text-center text-white/60">
                    <svg className="mx-auto h-10 w-10 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.8 6.34 6.34 0 0 0 9.5 22.14a6.34 6.34 0 0 0 6.34-6.34V8.75a8.23 8.23 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1.01-.15z"/>
                    </svg>
                    <p className="mt-2 text-xs">Klip TikTok {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-16" />
        </div>
      </div>
    </>
  )
}

export default page