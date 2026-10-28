'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const milestones = [
  { phase: '01', period: 'The beginning', title: 'A clear purpose', text: 'YEG Academy was established in Malaysia to help learners make informed decisions and connect education with real career pathways.', image: '/bangunan1.png' },
  { phase: '02', period: 'Programme growth', title: 'Education for ambition', text: 'Career programmes expanded around the disciplines that continue to shape Malaysia’s workforce, including Hajj and Umrah management and aviation.', image: '/YEGacademy.jpeg' },
  { phase: '03', period: 'Industry alignment', title: 'Learning with context', text: 'Professional expertise and industry-informed curriculum became central to programme delivery, preparing learners for the world beyond the classroom.', image: '/ypkm.jpeg' },
  { phase: '04', period: 'Strategic partnerships', title: 'A stronger ecosystem', text: 'Our network grew through collaborations with education institutions and specialist organisations, creating more connected learning opportunities.', image: '/bangunan2.png' },
  { phase: '05', period: 'Student experience', title: 'Guidance at every step', text: 'A student-first approach brought practical consultation, clearer programme pathways and personal support into the YEG Academy experience.', image: '/bangunan3.png' },
  { phase: '06', period: 'Today & beyond', title: 'Ready for what comes next', text: 'We continue to strengthen meaningful education, build trusted partnerships and create purposeful routes toward careers of the future.', image: '/bangunan4.png' },
]

export default function JourneyPage() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const syncHash = () => {
      const index = milestones.findIndex(({ phase }) => `#milestone-${phase}` === window.location.hash)
      if (index >= 0) setActive(index)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const move = (nextDirection) => {
    const nextIndex = (active + nextDirection + milestones.length) % milestones.length
    goTo(nextIndex)
  }

  const goTo = (index) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
    window.history.replaceState(null, '', `#milestone-${milestones[index].phase}`)
  }

  return (
    <main className="yeg-journey">
      <section className="yeg-journey-hero">
        <div className="yeg-journey-kicker">Our journey</div>
        <div className="yeg-journey-title-row">
          <h1>Membina Pencapaian dengan tujuan yang jelas.</h1>
          <p>Explore the moments that shaped YEG Academy—from its founding principle to the growing education ecosystem we continue to build.</p>
        </div>
      </section>

      <section className="yeg-journey-stage" aria-label="YEG Academy journey milestones">
        <nav className="yeg-journey-index" aria-label="Choose a milestone">
          {milestones.map((item, index) => (
            <a
              id={`milestone-link-${item.phase}`}
              href={`#milestone-${item.phase}`}
              key={item.phase}
              className={index === active ? 'is-active' : ''}
              onClick={(event) => { event.preventDefault(); goTo(index) }}
            >
              <span>{item.phase}</span>
              <strong>{item.period}</strong>
            </a>
          ))}
        </nav>
        <div className="yeg-journey-track" data-direction={direction} style={{ '--active': active }}>
          {milestones.map((item, index) => (
            <article id={`milestone-${item.phase}`} className={`yeg-journey-card ${index === active ? 'is-active' : ''}`} key={item.phase} aria-hidden={index !== active}>
              <div className="yeg-journey-image">
                <Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 58vw" priority={index === active} />
              </div>
              <div className="yeg-journey-copy">
                <span className="yeg-journey-phase">{item.phase}</span>
                <p>{item.period}</p>
                <h2>{item.title}</h2>
                <div className="yeg-journey-rule" />
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="yeg-journey-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous milestone"><ArrowLeft size={20} /></button>
          <div className="yeg-journey-progress" aria-label={`Milestone ${active + 1} of ${milestones.length}`}>
            {milestones.map((item, index) => (
              <button type="button" key={item.phase} className={index === active ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`View milestone ${index + 1}: ${item.period}`} />
            ))}
          </div>
          <span className="yeg-journey-count">0{active + 1} / 0{milestones.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next milestone"><ArrowRight size={20} /></button>
        </div>
      </section>

      <section className="yeg-journey-metric">
        <p>Where we are going</p>
        <h2>Our next chapter will stay rooted in the same principle:</h2>
        <strong>education should open a clear, credible route to opportunity.</strong>
        <Link href="/borangyeg">Start your journey <ArrowRight size={17} /></Link>
      </section>
    </main>
  )
}
