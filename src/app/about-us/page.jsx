import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Eye,
  GraduationCap,
  Map,
  Plane,
  Target,
  Users,
} from 'lucide-react'

export const metadata = {
  title: 'Tentang Kami & Perkhidmatan | YEG Academy',
  description:
    'Kenali YEG Academy, rakan pendidikan, program kerjaya dan sokongan profesional kami.',
}

const services = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Pendidikan Kerjaya',
    text: 'Program profesional berteraskan industri untuk membantu pelajar memulakan atau mengembangkan kerjaya.',
  },
  {
    icon: Plane,
    number: '02',
    title: 'Laluan Penerbangan',
    text: 'Latihan berstruktur dalam operasi penerbangan, penyelenggaraan pesawat dan khidmat pelanggan melalui ACM.',
  },
  {
    icon: Map,
    number: '03',
    title: 'Pengajian Haji & Umrah',
    text: 'Pembangunan akademik dan profesional untuk bakal pemimpin dalam pengurusan Haji dan Umrah.',
  },
  {
    icon: Briefcase,
    number: '04',
    title: 'Pembangunan Kerjaya',
    text: 'Bimbingan, persediaan kebolehpasaran dan pendedahan industri yang menghubungkan pendidikan dengan peluang sebenar.',
  },
]

const principles = [
  ['Relevan dengan industri', 'Kurikulum dibentuk berdasarkan keperluan tenaga kerja semasa.'],
  ['Bimbingan peribadi', 'Sokongan yang jelas daripada pertanyaan pertama hingga kemajuan kerjaya.'],
  ['Jaringan dipercayai', 'Pembelajaran diperkukuh oleh institusi dan profesional yang diiktiraf.'],
]

const partners = [
  'Innovative International College',
  'Akademi Mutawwif',
  'MEATECH',
  'MAHSA University',
  'Pelita Akademi',
]

export default function AboutUsPage() {
  return (
    <div className="yeg-about-page" lang="ms">
      <section className="yeg-about-hero" aria-labelledby="about-title">
        <div className="yeg-about-heroCopy">
          <p className="yeg-about-kicker">Tentang YEG Academy</p>
          <h1 id="about-title">Pendidikan yang mendekatkan anda kepada kerjaya sebenar.</h1>
          <p className="yeg-about-lead">
            Kami membantu pelajar melangkah daripada cita-cita kepada peluang
            melalui program yang relevan, bimbingan peribadi dan jaringan rakan
            industri yang kukuh.
          </p>
          <div className="yeg-about-intro">
            <p>
              YEG Academy ialah organisasi pendidikan Malaysia yang komited
              menjadikan pembelajaran profesional praktikal, mudah diakses dan
              bermakna. Kami memahami kekuatan, cita-cita dan keadaan setiap
              pelajar sebelum membentuk laluan pendidikan yang sesuai.
            </p>
            <p>
              Program kami disokong oleh institusi dan rakan profesional yang
              berpengalaman agar pelajar memahami konteks industri, bukan
              sekadar teori di dalam kelas.
            </p>
          </div>
          <a className="yeg-about-primaryButton" href="#services">
            Terokai perkhidmatan kami
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="yeg-about-heroVisual">
          <div className="yeg-about-photo yeg-about-photoMain">
            <Image
              src="/YEGacademy.jpeg"
              alt="Pelajar dan tenaga pengajar berbincang di YEG Academy"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
          <div className="yeg-about-photo yeg-about-photoAccent">
            <Image
              src="/konvoo1.jpg"
              alt="Graduan meraikan pencapaian akademik mereka"
              fill
              sizes="(max-width: 760px) 44vw, 20vw"
            />
          </div>
          <div className="yeg-about-visualBadge">
            <strong>5+</strong>
            <span>Rakan institusi</span>
          </div>
          <span className="yeg-about-visualNote">Ilmu hari ini, peluang esok</span>
        </div>
      </section>

      <section className="yeg-about-stats" aria-label="YEG Academy sepintas lalu">
        <div className="yeg-about-stat">
          <Building2 aria-hidden="true" />
          <div><strong>Ditubuhkan</strong><span>Akademi di Malaysia</span></div>
        </div>
        <div className="yeg-about-stat">
          <Users aria-hidden="true" />
          <div><strong>5+</strong><span>Rakan institusi</span></div>
        </div>
        <div className="yeg-about-stat">
          <Users aria-hidden="true" />
          <div><strong>Pelajar diutamakan</strong><span>Bimbingan dan sokongan</span></div>
        </div>
        <div className="yeg-about-stat">
          <Award aria-hidden="true" />
          <div><strong>Berteraskan kerjaya</strong><span>Pembelajaran praktikal</span></div>
        </div>
      </section>

      <section className="yeg-about-services" id="services" aria-labelledby="services-title">
        <div className="yeg-about-servicesHeading">
          <div>
            <p className="yeg-about-kicker">Pendidikan untuk dunia pekerjaan</p>
            <h2 id="services-title">Perkhidmatan bersepadu untuk setiap langkah perjalanan anda.</h2>
          </div>
          <p>
            Kami menggabungkan pemilihan program, bimbingan kerjaya dan sokongan
            profesional dalam satu pengalaman pembelajaran yang terarah.
          </p>
        </div>
        <div className="yeg-about-serviceGrid">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article className="yeg-about-serviceCard" key={title}>
              <div className="yeg-about-serviceTop">
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="yeg-about-cardRule" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="yeg-about-approach" aria-labelledby="approach-title">
        <div className="yeg-about-approachIntro">
          <p className="yeg-about-kicker">Cara kami membimbing</p>
          <h2 id="approach-title">Kejelasan sebelum membuat keputusan.</h2>
          <p>
            Keputusan yang baik bermula dengan maklumat yang tepat. Penasihat
            kami membantu pelajar membandingkan pilihan, memahami syarat
            kemasukan dan merancang langkah seterusnya dengan yakin.
          </p>
          <Link className="yeg-about-journeyLink" href="/about-us/journey">
            Lihat perjalanan kami <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="yeg-about-approachDetails">
          {principles.map(([title, text], index) => (
            <article className="yeg-about-principle" key={title}>
              <span className="yeg-about-principleNumber">0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
          <div className="yeg-about-partners">
            <p>Ekosistem pembelajaran kami</p>
            <div>
              {partners.map((partner) => <span key={partner}>{partner}</span>)}
            </div>
          </div>
        </div>

        <div className="yeg-about-purpose" role="group" aria-label="Visi dan misi YEG Academy">
          <article className="yeg-about-purposeCard">
            <span className="yeg-about-purposeIcon"><Eye size={24} aria-hidden="true" /></span>
            <div>
              <p className="yeg-about-kicker">Visi kami</p>
              <p>Menjadi institusi pendidikan pilihan yang membentuk graduan berdaya saing, yakin dan bersedia melangkah ke alam pekerjaan.</p>
            </div>
          </article>
          <article className="yeg-about-purposeCard">
            <span className="yeg-about-purposeIcon"><Target size={24} aria-hidden="true" /></span>
            <div>
              <p className="yeg-about-kicker">Misi kami</p>
              <p>Menyediakan program profesional yang praktikal dan mudah diakses, disokong bimbingan peribadi serta jaringan industri yang membuka laluan kerjaya.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="yeg-about-cta" aria-labelledby="about-cta-title">
        <div className="yeg-about-ctaCopy">
          <GraduationCap size={32} strokeWidth={1.5} aria-hidden="true" />
          <p className="yeg-about-kicker">Langkah seterusnya bermula di sini</p>
          <h2 id="about-cta-title">Mari bina hala tuju yang sesuai untuk anda.</h2>
        </div>
        <Link className="yeg-about-lightButton" href="/borangyeg">
          Berbincang dengan pasukan kami <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
