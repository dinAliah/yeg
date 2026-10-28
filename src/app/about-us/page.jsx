import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  Users,
  Map,
  Plane,
} from 'lucide-react'

export const metadata = {
  title: 'About Us & Services | YEG Academy',
  description:
    'Discover YEG Academy, our education partners, career programmes and professional support services.',
}

const services = [
  { icon: GraduationCap, number: '01', title: 'Career Education', text: 'Industry-aligned professional programmes for learners preparing to enter or advance within the workforce.' },
  { icon: Plane, number: '02', title: 'Aviation Pathways', text: 'Structured training in aviation operations, aircraft maintenance and customer service through ACM.' },
  { icon: Map, number: '03', title: 'Hajj & Umrah Studies', text: 'Academic and professional development for future leaders in Hajj and Umrah management.' },
  { icon: Briefcase, number: '04', title: 'Career Development', text: 'Guidance, employability preparation and industry exposure that bridge education with real opportunities.' },
]

const principles = [
  ['Industry relevance', 'Curricula shaped around current workforce needs.'],
  ['Personal guidance', 'Clear support from first enquiry to career progression.'],
  ['Trusted partnerships', 'Learning supported by recognised institutions and professionals.'],
]

export default function AboutUsPage() {
  return (
    <div className="yeg-about-page">
      <section className="yeg-about-hero">
        <div className="yeg-about-heroImage">
          <Image src="/bangunan1.png" alt="YEG Academy" fill priority sizes="100vw" />
        </div>
        <div className="yeg-about-heroShade" />
        <div className="yeg-about-heroInner">
          <p className="yeg-about-eyebrow">About YEG Academy</p>
          <h1>Purpose-built education for a changing world.</h1>
          <p className="yeg-about-heroLead">We help learners move from ambition to opportunity with relevant programmes, personal guidance and a strong network of industry partners.</p>
          <a className="yeg-about-primaryButton" href="#services">Explore our services <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="yeg-about-intro">
        <div className="yeg-about-sectionLabel">Who we are</div>
        <div className="yeg-about-introGrid">
          <h2>Education that remains close to real careers.</h2>
          <div>
            <p className="yeg-about-introText">YEG Academy is a Malaysian education organisation committed to making professional learning practical, accessible and meaningful. We take time to understand each learner&apos;s strengths, ambitions and circumstances before shaping a suitable education pathway.</p>
            <p>Our programmes are supported by established institutions and professional partners, allowing students to learn with industry context—not just classroom theory.</p>
          </div>
        </div>
      </section>

      <section className="yeg-about-stats" aria-label="YEG Academy at a glance">
        <div className="yeg-about-stat"><Building2 aria-hidden="true" /><strong>Established</strong><span>Academy in Malaysia</span></div>
        <div className="yeg-about-stat"><Users aria-hidden="true" /><strong>5+</strong><span>Institutional partners</span></div>
        <div className="yeg-about-stat"><Users aria-hidden="true" /><strong>Student-first</strong><span>Guidance and support</span></div>
        <div className="yeg-about-stat"><Award aria-hidden="true" /><strong>Career-led</strong><span>Practical learning</span></div>
      </section>

      <section className="yeg-about-services" id="services">
        <div className="yeg-about-servicesHeading">
          <div><p className="yeg-about-eyebrowDark">What we provide</p><h2>Connected services for every stage of the journey.</h2></div>
          <p>We combine programme selection, career guidance and professional support in one focused learning experience.</p>
        </div>
        <div className="yeg-about-serviceGrid">{services.map(({ icon: Icon, number, title, text }) => (
          <article className="yeg-about-serviceCard" key={title}><div className="yeg-about-serviceTop"><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>
        ))}</div>
      </section>

      <section className="yeg-about-approach">
        <div className="yeg-about-approachImage"><Image src="/YEGacademy.jpeg" alt="YEG Academy community" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
        <div className="yeg-about-approachContent">
          <p className="yeg-about-eyebrowDark">Our approach</p><h2>Clarity before commitment.</h2>
          <p>Good decisions begin with useful information. Our advisors help learners compare options, understand entry requirements and plan the next step with confidence.</p>
          <div className="yeg-about-principles">{principles.map(([title, text]) => (
            <div className="yeg-about-principle" key={title}><span /><div><h3>{title}</h3><p>{text}</p></div></div>
          ))}</div>
          <Link className="yeg-about-journeyLink" href="/about-us/journey">View our journey <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="yeg-about-partners">
        <p>Our learning ecosystem</p>
        <div><span>Innovative International College</span><span>Akademi Mutawwif</span><span>MEATECH</span><span>MAHSA University</span><span>Pelita Akademi</span></div>
      </section>

      <section className="yeg-about-cta">
        <div><GraduationCap size={30} strokeWidth={1.5} aria-hidden="true" /><p className="yeg-about-eyebrow">Take the next step</p><h2>Let&apos;s build a direction that works for you.</h2></div>
        <Link className="yeg-about-lightButton" href="/borangyeg">Speak with our team <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}
