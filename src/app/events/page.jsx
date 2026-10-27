"use client"

import Image from "next/image"
import { useRef } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Mail } from "lucide-react"

// Set each date to YYYY-MM-DD to classify it by the current date in Malaysia.
const eventMoments = [
  {
    title: "Siri Jelajah Borneo",
    category: "Aviation Career Malaysia & Program Pengurusan Haji dan Umrah",
    date: "2026-10-31",
    image: "/sportt1.jpg",
    alt: "Pelajar YEG bermain bola keranjang di acara sukan",
  },
  {
    title: "Pelancaran Program Work-Based Learning (WBL)",
    category: "Aktiviti pelajar",
    date: "2026-05-23",
    image: "/sportt3.jpg",
    alt: "Pelajar menyertai perlawanan bola tampar",
  },
  {
    title: "Kenangan bersama komuniti YEG",
    category: "Komuniti YEG",
    date: "2026-12-01",
    image: "/sportt5.jpg",
    alt: "Kumpulan pelajar dan komuniti YEG bergambar bersama",
  },
  {
    title: "Detik istimewa graduasi",
    category: "Majlis graduasi",
    date: null,
    image: "/konvoo1.jpg",
    alt: "Graduan YEG bergambar di majlis graduasi",
  },
  {
    title: "Meraikan pencapaian graduan",
    category: "Majlis graduasi",
    date: null,
    image: "/konvoo3.jpg",
    alt: "Graduan menerima sijil di atas pentas",
  },
  {
    title: "Momen sukan YEG",
    category: "Aktiviti pelajar",
    date: null,
    image: "/sportt4.jpg",
    alt: "Pelajar bermain bola sepak di gelanggang",
  },
]

const invalidDatedEvent = eventMoments.find((item) => {
  if (!item.date) return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) return true

  const parsedDate = new Date(`${item.date}T00:00:00.000Z`)
  return Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== item.date
})

if (invalidDatedEvent) {
  throw new Error(`Invalid event date for "${invalidDatedEvent.title}". Use YYYY-MM-DD.`)
}

function getMalaysiaDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kuala_Lumpur",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())
  const part = (type) => parts.find((value) => value.type === type)?.value

  return `${part("year")}-${part("month")}-${part("day")}`
}

function formatEventDate(date) {
  if (!date) return "Date not set"

  return new Intl.DateTimeFormat("en-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`))
}

function EventImageCard({ item, index, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-emerald-800">
            {item.category}
          </p>
          {item.date ? (
            <time dateTime={item.date} className="text-xs font-medium text-slate-500">
              {formatEventDate(item.date)}
            </time>
          ) : (
            <span className="text-xs text-slate-400">{formatEventDate(item.date)}</span>
          )}
        </div>
        <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
          {item.title}
        </h3>
      </div>
    </article>
  )
}

export default function EventsPage() {
  const latestTrack = useRef(null)
  const today = getMalaysiaDate()
  const upcomingEvents = eventMoments
    .filter((item) => item.date && item.date >= today)
    .sort((first, second) => first.date.localeCompare(second.date))
  const pastEvents = eventMoments
    .filter((item) => item.date && item.date < today)
    .sort((first, second) => second.date.localeCompare(first.date))
  const allEvents = [...eventMoments].sort((first, second) => {
    if (!first.date) return 1
    if (!second.date) return -1
    return second.date.localeCompare(first.date)
  })

  const scrollLatest = (direction) => {
    if (!latestTrack.current) return
    latestTrack.current.scrollBy({
      left: direction * latestTrack.current.clientWidth * 0.82,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-white pt-16 sm:pt-[4.5rem]">
      <section aria-labelledby="events-title" className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex min-h-56 max-w-7xl items-end overflow-hidden rounded-3xl bg-slate-900 sm:min-h-72">
          <Image
            src="/sportt5.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-slate-900/10" />
          <div className="relative max-w-2xl px-6 py-8 text-white sm:px-10 sm:py-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
              YEG Academy · Activities & Events
            </p>
            <h1 id="events-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Events
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
              Discover what&apos;s happening and revisit the moments that bring our community together.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="upcoming-title" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[minmax(12rem,0.65fr)_minmax(0,2fr)] md:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Mark your calendar
            </p>
            <h2 id="upcoming-title" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Upcoming events<span className="text-emerald-700">.</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Be the first to know about what&apos;s next at YEG.
            </p>
          </div>
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {upcomingEvents.map((item, index) => (
                <EventImageCard key={item.image} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-36 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-emerald-800 shadow-sm">
                <CalendarDays aria-hidden="true" size={22} />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">No upcoming events scheduled</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Add a future date (YYYY-MM-DD) to an event in the events list and it will appear here automatically.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="latest-title" className="bg-[#eef5ee] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                From our community
              </p>
              <h2 id="latest-title" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Past events<span className="text-emerald-700">.</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Scroll to previous events"
                onClick={() => scrollLatest(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <ArrowLeft aria-hidden="true" size={18} />
              </button>
              <button
                type="button"
                aria-label="Scroll to next events"
                onClick={() => scrollLatest(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
          <div
            ref={latestTrack}
            className="grid auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto scroll-smooth pb-3 sm:auto-cols-[48%] lg:auto-cols-[32%]"
          >
            {pastEvents.length > 0 ? (
              pastEvents.slice(0, 4).map((item, index) => (
                <EventImageCard key={item.image} item={item} index={index} />
              ))
            ) : (
              <p className="col-span-full rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm leading-6 text-slate-600">
                Events with dates before today will appear here. Add a date to an event in the event list below.
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="all-events" aria-labelledby="all-events-title" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              A look back
            </p>
            <h2 id="all-events-title" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              All events<span className="text-emerald-700">.</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allEvents.map((item, index) => (
              <EventImageCard
                key={`${item.image}-all`}
                item={item}
                index={index}
                featured={index === 0 || index === 4}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="events-updates-title" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#dcecf2] px-6 py-10 text-center sm:px-10 sm:py-14">
          <Image
            src="/sportt2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-sky-100/60" />
          <div className="relative mx-auto max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900">
              Stay connected
            </p>
            <h2 id="events-updates-title" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Never miss a YEG moment.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Get in touch with our team for event updates and enquiries.
            </p>
            <a
              href="mailto:info@yegmy.com?subject=YEG%20event%20updates"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <Mail aria-hidden="true" size={17} />
              Contact YEG
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
