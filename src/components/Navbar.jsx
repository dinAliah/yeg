"use client"
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const PROGRAM_ITEMS = [
  { label: 'Fakulti Pengurusan Haji Umrah', href: '/kursuskerjaya/sphu/bhum' },
  { label: 'Aviation Career Malaysia', href: 'https://acm-my.com/aviation-career-malaysia-site-page/' },
];

const NAV_LINKS = [
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
      <path d="M2 2 C 10 9, 24 9, 32 2" fill="none" stroke="#C9A24B" strokeWidth="1.6" strokeLinecap="round" />
    </motion.svg>
  );
}

function Navbar() {
  useFonts();

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const closeTimer = React.useRef(null);

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
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered((h) => (h === 'Program' ? null : h)), 140);
  };

  const linkStyle = (active) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    color: active ? '#E9D9A8' : '#F4F1E9',
    textDecoration: 'none',
    fontSize: 14.5,
    fontWeight: 600,
    padding: '10px 14px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'color 0.2s ease',
  });

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          fontFamily: "'Manrope', sans-serif",
          height: scrolled ? 64 : 78,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 4vw, 56px)',
          background: scrolled ? 'rgba(11,18,32,0.82)' : '#0B1220',
          backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,162,75,0.16)' : '1px solid rgba(255,255,255,0.03)',
          boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.28)' : 'none',
          transition: 'height 0.35s cubic-bezier(.4,0,.2,1), background 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Logo */}
        <a href="https://www.yegmy.com/" style={{ display: 'block' }}>
          <Image
            src="/YEG white logo.png"
            alt="YEG logo"
            height={160}
            width={140}
            style={{ objectFit: 'contain', height: scrolled ? 48 : 60, width: 'auto', transition: 'height 0.35s ease' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="yeg-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {/* Program dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openProgram}
            onMouseLeave={scheduleClose}
            onFocus={openProgram}
            onBlur={scheduleClose}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={hovered === 'Program'}
              style={linkStyle(hovered === 'Program')}
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
                  transition={{ duration: 0.16 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: 10,
                    minWidth: 290,
                    padding: 8,
                    background: '#0B1220',
                    border: '1px solid rgba(201,162,75,0.22)',
                    borderRadius: 12,
                    boxShadow: '0 18px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {PROGRAM_ITEMS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      style={{
                        display: 'block',
                        padding: '12px 14px',
                        borderRadius: 8,
                        color: '#F4F1E9',
                        textDecoration: 'none',
                        fontSize: 14,
                        fontWeight: 500,
                        transition: 'background 0.15s ease, color 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(201,162,75,0.12)';
                        e.currentTarget.style.color = '#E9D9A8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#F4F1E9';
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered((h) => (h === label ? null : h))}
              style={linkStyle(hovered === label)}
            >
              {label}
              {hovered === label && <Crescent />}
            </a>
          ))}

          <a
            href="/borangyeg"
            style={{
              marginLeft: 10,
              background: '#C9A24B',
              color: '#0B1220',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: 999,
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#E9D9A8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A24B'; }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="yeg-mobile-toggle"
          style={{ display: 'none', background: 'transparent', border: 'none', color: '#F4F1E9', cursor: 'pointer' }}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
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
              <Image src="/YEG white logo.png" alt="YEG logo" height={40} width={90} style={{ objectFit: 'contain', height: 40, width: 'auto' }} />
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
                    {PROGRAM_ITEMS.map(({ label, href }) => (
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