"use client"
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, ChevronDown, GraduationCap, Menu, Phone, X, Home, Building2, HeartHandshake } from 'lucide-react';
import { usePathname } from 'next/navigation';

const PROGRAM_GROUPS = [
  {
    title: 'Diploma Programmes',
    Icon: BookOpen,
    items: [
      { label: 'Aviation Management', href: '/kursusdiploma/dacm' },
      { label: 'Hajj & Umrah Management', href: '/kursusdiploma/dhumy' },

    ],
  },
  {
    title: 'Work-Based Learning',
    Icon: GraduationCap,
    items: [
      { label: 'Hajj & Umrah Management', href: '/kursusdiplomawbl/dhumywbl' },
      { label: 'Hospitality Management', href: '/kursusdiplomawbl/dhmwbl' },
      { label: 'Culinary Arts', href: '/kursusdiplomawbl/dcawbl' },
      { label: 'Early Childhood Education', href: '/kursusdiplomawbl/decwbl' },
    ],
  },
  {
    title: 'Career Pathways',
    Icon: Briefcase,
    items: [
      { label: 'Fakulti Pengurusan Haji Umrah', href: '/kursuskerjaya/sphu/bhum' },
      { label: 'Aviation Career Malaysia', href: 'https://acm-my.com/' },
      { label: 'MISA Career Programmes', href: '/kursuskerjaya/misa' },
    ],
  },
];

const ABOUT_ITEMS = [
  { label: 'Company Overview', href: '/about-us' },
  { label: 'Our Journey', href: '/about-us/journey' },
];

const NAV_LINKS = [
  { label: 'Events', href: '/events' },
  { label: 'Article', href: '/careyeg' },
  { label: 'Testimoni', href: '/testimoni' },
  { label: 'Career', href: '/career' },
];

const FONT_ID = 'yeg-navbar-fonts';

function useFonts() {
  React.useEffect(() => {
    if (document.getElementById(FONT_ID)) return;
    const link = document.createElement('link');
    link.id = FONT_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

function Crescent() {
  return (
    <motion.svg
      layoutId="crescent"
      width="34"
      height="10"
      viewBox="0 0 34 10"
      style={{ position: 'absolute', left: '50%', bottom: -6, x: '-50%', pointerEvents: 'none' }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
    >
      <path d="M2 2 C 10 9, 24 9, 32 2" fill="none" stroke="#795ee9" strokeWidth="1.6" strokeLinecap="round" />
    </motion.svg>
  );
}

function Navbar() {
  useFonts();

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const pathname = usePathname();
  const closeTimer = React.useRef(null);
  const isPathActive = (href) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  const programActive = ['/kursusdiploma', '/kursusdiplomawbl', '/kursuskerjaya']
    .some(isPathActive);
  const aboutActive = ABOUT_ITEMS.some(({ href }) => isPathActive(href));

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openProgram = () => {
    clearTimeout(closeTimer.current);
    setHovered('Program');
  };
  const openAbout = () => {
    clearTimeout(closeTimer.current);
    setHovered('About');
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered(null), 140);
  };

  React.useEffect(() => () => clearTimeout(closeTimer.current), []);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setHovered(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const linkStyle = (active) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    color: active ? '#684fe0' : '#52607e',
    textDecoration: 'none',
    fontSize: 14.5,
    fontWeight: 600,
    padding: '10px 14px',
    background: active ? 'rgba(113, 90, 225, 0.12)' : 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'color 0.2s ease',
  });

  return (
    <>
      <nav className={`yeg-navbar${scrolled ? ' is-scrolled' : ''}`}>
        {/* Logo */}
        <a href="https://www.yegmy.com/" className="yeg-navbar-brand">
         <Image src="/yeglogo.png" alt="YEG logo" height={100} width={90} style={{ objectFit: 'contain', height: 100, width: 'auto' }} />
            
        </a>
         
          {/* want to add About dropdown */} 
        {/* Desktop nav */}
        <div className="yeg-desktop-nav">
          {/* Program dropdown */}
          <div
            className="yeg-nav-group"
            onMouseEnter={openProgram}
            onMouseLeave={scheduleClose}
            onFocus={openProgram}
            onBlur={scheduleClose}
          >
            
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={hovered === 'Program'}
              aria-controls="yeg-program-menu"
              onClick={() => setHovered('Program')}
              style={linkStyle(hovered === 'Program' || programActive)}
            >
              Program
              <ChevronDown
                size={15}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: hovered === 'Program' ? 'rotate(180deg)' : 'rotate(0)',
                }}
              />
              {hovered === 'Program' && <Crescent />}
            </button>

            <AnimatePresence>
              {hovered === 'Program' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="yeg-program-mega"
                  id="yeg-program-menu"
                >
                  <div className="yeg-program-columns">
                    {PROGRAM_GROUPS.map(({ title, Icon, items }) => (
                      <section className="yeg-program-column" key={title}>
                        <h2>
                          <span className="yeg-program-icon"><Icon size={17} aria-hidden="true" /></span>
                          {title}
                        </h2>
                        <ul>
                          {items.map(({ label, href }) => (
                            <li key={href}>
                              <a href={href}>{label}</a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                  <aside className="yeg-program-promo">
                    <span className="yeg-program-promo-icon"><GraduationCap size={21} aria-hidden="true" /></span>
                    <h2>Find Your Programme</h2>
                    <p>Explore YEG Academy diploma, work-based learning and career pathways.</p>
                    <a className="yeg-program-promo-primary" href="/#programs">
                      View Programmes <ArrowRight size={15} aria-hidden="true" />
                    </a>
                    <a className="yeg-program-promo-secondary" href="/borangyeg">
                      Speak to an Advisor <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </aside>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About dropdown */}
          <div
            className="yeg-nav-group"
            onMouseEnter={openAbout}
            onMouseLeave={scheduleClose}
            onFocus={openAbout}
            onBlur={scheduleClose}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={hovered === 'About'}
              aria-controls="yeg-about-menu"
              onClick={() => setHovered('About')}
              style={linkStyle(hovered === 'About' || aboutActive)}
            >
              About Us
              <ChevronDown
                size={15}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: hovered === 'About' ? 'rotate(180deg)' : 'rotate(0)',
                }}
              />
              {hovered === 'About' && <Crescent />}
            </button>

            <AnimatePresence>
              {hovered === 'About' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="yeg-about-menu"
                  id="yeg-about-menu"
                >
                  {ABOUT_ITEMS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map(({ label, href }) => {
            const active = isPathActive(href);
            return (
              <a
                key={label}
                href={href}
                aria-current={active ? 'page' : undefined}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered((h) => (h === label ? null : h))}
                style={linkStyle(active || hovered === label)}
              >
                {label}
                {hovered === label && <Crescent />}
              </a>
            );
          })}

          <a
            href="/borangyeg"
            className="yeg-navbar-contact"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="yeg-mobile-toggle"
          style={{ display: 'none' }}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <nav className="yeg-mobile-dock" aria-label="Mobile navigation">
        {[
          { label: 'Home', href: '/', Icon: Home, active: pathname === '/' },
          { label: 'About', href: '/about-us', Icon: Building2, active: pathname.startsWith('/about-us') },
          { label: 'Programmes', href: '/kursusdiploma/dhumy', Icon: GraduationCap, active: pathname.startsWith('/kursus') },
          { label: 'Partners', href: '/events', Icon: HeartHandshake, active: pathname.startsWith('/events') },
          { label: 'Contact', href: '/borangyeg', Icon: Phone, active: pathname.startsWith('/borangyeg') },
        ].map(({ label, href, Icon, active }) => (
          <a key={label} href={href} aria-current={active ? 'page' : undefined} className={active ? 'is-active' : ''}>
            <Icon size={19} strokeWidth={active ? 2.3 : 1.8} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1100,
              background: '#0B1220',
              fontFamily: "'Manrope', sans-serif",
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px' }}>
              <Image src="/YEGlogo.jpeg" alt="YEG logo" height={40} width={90} style={{ objectFit: 'contain', height: 40, width: 'auto' }} />
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#F4F1E9', cursor: 'pointer' }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '8px 24px 40px', display: 'flex', flexDirection: 'column' }}>
              {/* Program accordion */}
              <button
                onClick={() => setMobileProgramOpen((o) => !o)}
                aria-expanded={mobileProgramOpen}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#F4F1E9',
                  fontSize: 17,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                Program
                <ChevronDown
                  size={18}
                  style={{ transition: 'transform 0.2s ease', transform: mobileProgramOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>

              <AnimatePresence initial={false}>
                {mobileProgramOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {PROGRAM_GROUPS.flatMap(({ items }) => items).map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        style={{
                          display: 'block',
                          padding: '14px 0 14px 16px',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          borderLeft: '2px solid #C9A24B',
                          color: '#E9D9A8',
                          textDecoration: 'none',
                          fontSize: 15,
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setMobileAboutOpen((o) => !o)}
                aria-expanded={mobileAboutOpen}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#F4F1E9',
                  fontSize: 17,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                About Us
                <ChevronDown
                  size={18}
                  style={{ transition: 'transform 0.2s ease', transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>

              <AnimatePresence initial={false}>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {ABOUT_ITEMS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        style={{
                          display: 'block',
                          padding: '14px 0 14px 16px',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          borderLeft: '2px solid #C9A24B',
                          color: '#E9D9A8',
                          textDecoration: 'none',
                          fontSize: 15,
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}

              </AnimatePresence>

              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    padding: '18px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    color: '#F4F1E9',
                    textDecoration: 'none',
                    fontSize: 17,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </a>
              ))}

              <a
                href="/borangyeg"
                style={{
                  marginTop: 24,
                  textAlign: 'center',
                  background: '#C9A24B',
                  color: '#0B1220',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 700,
                  padding: 15,
                  borderRadius: 999,
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .yeg-desktop-nav { display: none !important; }
          .yeg-mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
