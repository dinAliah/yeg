'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const milestones = [
  { phase: '01', period: 'Permulaan', title: 'Tujuan yang Jelas', text: 'YEG Academy ditubuhkan di Malaysia untuk membantu pelajar membuat keputusan yang tepat serta menghubungkan pendidikan dengan laluan kerjaya sebenar.', image: '/bangunan1.png' },
  { phase: '02', period: 'Pertumbuhan Program', title: 'Pendidikan untuk Aspirasi', text: 'Program kerjaya berkembang dalam bidang yang terus membentuk tenaga kerja Malaysia, termasuk pengurusan Haji dan Umrah serta penerbangan.', image: '/YEGacademy.jpeg' },
  { phase: '03', period: 'Penjajaran Industri', title: 'Pembelajaran dengan Konteks', text: 'Kepakaran profesional dan kurikulum berasaskan industri menjadi teras penyampaian program, membimbing pelajar untuk menghadapi dunia pekerjaan.', image: '/ypkm.jpeg' },
  { phase: '04', period: 'Kerjasama Strategik', title: 'Ekosistem yang Lebih Kukuh', text: 'Rangkaian YEG berkembang melalui kerjasama dengan institusi pendidikan dan organisasi pakar untuk membentuk peluang pembelajaran yang lebih bersepadu.', image: '/bangunan2.png' },
  { phase: '05', period: 'Pengalaman Pelajar', title: 'Bimbingan di Setiap Langkah', text: 'Pendekatan berfokus kepada pelajar membawa khidmat perundingan praktikal, laluan program yang jelas dan sokongan peribadi sepanjang pengalaman YEG Academy.', image: '/bangunan3.png' },
  { phase: '06', period: 'Hari Ini & Masa Hadapan', title: 'Bersedia untuk Cabaran Akan Datang', text: 'Kami terus memperkukuh pendidikan bermakna, membina kerjasama dipercayai dan mencipta laluan yang bermatlamat menuju kerjaya masa hadapan.', image: '/bangunan4.png' },
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
        <div className="yeg-journey-kicker">Perjalanan Kami</div>
        <div className="yeg-journey-title-row">
          <h1>Membina Pencapaian dengan tujuan yang jelas.</h1>
          <p>Terokai detik-detik penting yang membentuk YEG Academy — daripada prinsip penubuhan hingga ekosistem pendidikan yang terus berkembang.</p>
        </div>
      </section>

      <section className="yeg-journey-stage" aria-label="Pencapaian penting YEG Academy">
        <nav className="yeg-journey-index" aria-label="Pilih pencapaian">
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
          <button type="button" onClick={() => move(-1)} aria-label="Pencapaian sebelumnya"><ArrowLeft size={20} /></button>
          <div className="yeg-journey-progress" aria-label={`Milestone ${active + 1} of ${milestones.length}`}>
            {milestones.map((item, index) => (
              <button type="button" key={item.phase} className={index === active ? 'is-active' : ''} onClick={() => goTo(index)}               aria-label={`Lihat pencapaian ${index + 1}: ${item.period}`} />            ))}
          </div>
          <span className="yeg-journey-count">0{active + 1} / 0{milestones.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Pencapaian seterusnya"><ArrowRight size={20} /></button>
        </div>
      </section>

      <section className="yeg-journey-metric">
        <p>Destinasi Kami</p>
        <h2>Bab seterusnya kami akan terus berpegang pada prinsip yang sama:</h2>
        <strong>pendidikan harus membuka laluan peluang yang jelas dan berdaya maju.</strong>
        <Link href="/borangyeg">Mulakan perjalanan anda <ArrowRight size={17} /></Link>
      </section>
    </main>
  )
}
