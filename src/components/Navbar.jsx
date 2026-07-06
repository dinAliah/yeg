{/*"use client"
import React from 'react'
import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarSubTrigger,
    MenubarSubContent,
    MenubarShortcut,
    MenubarSeparator,
    MenubarSub,
  } from "@/components/ui/menubar"
  

function Navbar() {
  return (
    <nav className="">
        <div className=" hidden lg:block md:block"> 
        <Menubar className="">
        <div className="bg-slate-800 pl-4">
            <a href="/" className="">
            <Image
                className=""
                src="/logoyeg.svg"
                alt="logoyeg"
                height="160"
                width="140"
                style={{
                objectFit: "contain",
                }}/></a></div>
            <div className="bg-slate-800 flex w-full justify-end">
            <MenubarMenu>
              <MenubarTrigger>Program</MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>
                  <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                  <a className="text-md font-light ml-2">Program Profesional Haji & Umrah (SPHU)</a></div>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem><a className="text-md font-light ml-2" href="/kursuskerjaya/sphu/bhum">Bachelor’s Degree Hajj & Umrah Management</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="/kursuskerjaya/sphu/mhum">Master Hajj & Umrah Management</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="/kursuskerjaya/sphu/shum">Profesional Hajj & Umrah Certificate</a></MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                <a className="text-md font-light ml-2" href="/kursuskerjaya/acm">Aviation Career Malaysia (ACM)</a></div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
  
            {/* <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Online Distance Learning</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/odl/diploma1">Diploma in Business & Administration</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}
            {/* <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/kursusdiploma/dnur">Diploma Kejururawatan (DNUR)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/damt">Diploma Penyelenggaraan Teknologi Pesawat (DAMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu> */}
            {/* <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">WBL Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhumywbl">Diploma Pengurusan Haji & Umrah (DHUMY-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu> */}

            {/*<MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                    <a className="" href="/careyeg">Article</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="/testimoni">Testimony</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="/career">Career</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-yellow-500 hover:bg-yellow-400">
                <a href="/borangyeg">Contact Us</a> </MenubarTrigger>
            </MenubarMenu>
            </div>
            </Menubar>
        </div>
    </nav>
  )
}

export default Navbar */}

"use client";
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

/**
 * YEG Academy — Navbar
 * -----------------------------------------------------------------------
 * Design tokens
 *   Ink      #0B1220   base bar / mobile sheet
 *   Ink-80   rgba(11,18,32,.82)  scrolled glass state
 *   Gold     #C9A24B   primary accent — signature crescent underline
 *   Gold-lt  #E9D9A8   hover text / active state
 *   Paper    #F4F1E9   logo plate, light contrast surfaces
 *   Mist     #8B93A6   secondary / muted text
 *
 * Type
 *   Display  'Fraunces'  — wordmark + panel headers (academic weight)
 *   Body     'Manrope'   — nav labels, links, buttons
 *
 * Signature
 *   A thin gold arc (crescent) that slides beneath whichever nav item
 *   is active/hovered — a quiet nod to the Hajj & Umrah subject matter
 *   without leaning on literal iconography.
 * -----------------------------------------------------------------------
 */

const FONT_IMPORT_ID = 'yeg-navbar-fonts';

// Simple nested menu: Program > group > item. Update hrefs as needed.
const PROGRAM_GROUPS = [
  {
    title: 'Fakulti Pengurusan Haji & Umrah',
    items: [
      { label: 'Diploma + Degree', href: '/kursuskerjaya/sphu/bhum' },
      { label: 'Degree', href: '/kursuskerjaya/sphu/degree' },
      { label: 'Master in Haji Umrah', href: '/kursuskerjaya/sphu/mhum' },
      { label: 'PhD Haji Umrah', href: 'https://e-dhumy.com/phdhajjumrah', external: true },
      { label: 'SPHU', href: '/kursuskerjaya/sphu/shum' },
    ],
  },
  {
    title: 'Aviation Career Malaysia',
    items: [
      { label: 'Academic', href: '/kursuskerjaya/acm/academic' },
      { label: 'Career', href: '/kursuskerjaya/acm/career' },
    ],
  },
  {
    title: 'WBL',
    items: [
      { label: 'Diploma Pengurusan Haji & Umrah (DHUMY-WBL)', href: '/kursusdiplomawbl/dhumywbl' },
      { label: 'Diploma Pengurusan Perhotelan (DHM-WBL)', href: '/kursusdiplomawbl/dhmwbl' },
      { label: 'Diploma Seni Kulinari (DCA-WBL)', href: '/kursusdiplomawbl/dcawbl' },
      { label: 'Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)', href: '/kursusdiplomawbl/decwbl' },
      { label: 'Diploma Pengurusan Kargo Udara (DACM-WBL)', href: '/kursusdiplomawbl/dacmwbl' },
      { label: 'Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)', href: '/kursusdiplomawbl/daomwbl' },
    ],
  },
];

const NAV_LINKS = [
  { label: 'Article', href: '/careyeg' },
  { label: 'Testimony', href: '/testimoni' },
  { label: 'Career', href: '/career' },
];

function useFonts() {
  React.useEffect(() => {
    if (document.getElementById(FONT_IMPORT_ID)) return;
    const link = document.createElement('link');
    link.id = FONT_IMPORT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

function CrescentUnderline({ layoutId = 'crescent' }) {
  return (
    <motion.svg
      layoutId={layoutId}
      width="34"
      height="10"
      viewBox="0 0 34 10"
      style={{ position: 'absolute', left: '50%', bottom: -6, x: '-50%', pointerEvents: 'none' }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
    >
      <path
        d="M2 2 C 10 9, 24 9, 32 2"
        fill="none"
        stroke="#C9A24B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function Navbar() {
  useFonts();

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null); // 'program' | 'article' | 'testimony' | 'career' | null
  const [activeGroup, setActiveGroup] = React.useState(0); // which Program group's flyout is showing
  const [mobileGroupOpen, setMobileGroupOpen] = React.useState(null); // index of open group in mobile accordion
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
    setHovered('program');
    setActiveGroup(0);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered((h) => (h === 'program' ? null : h)), 140);
  };

  const barHeight = scrolled ? 64 : 78;

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
        }}
      >
        <div
          style={{
            height: barHeight,
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
          {/* Wordmark */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                background: '#F4F1E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img src="/logoyeg.svg" alt="YEG Academy" style={{ width: 26, height: 26, objectFit: 'contain' }} />
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: '0.01em',
                color: '#F4F1E9',
              }}
            >
              YEG <span style={{ color: '#C9A24B', fontStyle: 'italic' }}>Academy</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            className="yeg-desktop-nav"
          >
            {/* Program — mega menu trigger */}
            <div
              onMouseEnter={openProgram}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                onClick={() => setHovered((h) => (h === 'program' ? null : 'program'))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: hovered === 'program' ? '#E9D9A8' : '#F4F1E9',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14.5,
                  fontWeight: 600,
                  padding: '10px 14px',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
              >
                Program
                <ChevronDown
                  size={15}
                  style={{
                    transform: hovered === 'program' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                />
                {hovered === 'program' && <CrescentUnderline />}
              </button>

              <AnimatePresence>
                {hovered === 'program' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    onMouseEnter={openProgram}
                    onMouseLeave={scheduleClose}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 14px)',
                      left: -16,
                      width: 260,
                      background: '#0F1830',
                      border: '1px solid rgba(201,162,75,0.18)',
                      borderTop: '2px solid #C9A24B',
                      borderRadius: 10,
                      boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                      padding: 6,
                    }}
                  >
                    {PROGRAM_GROUPS.map((group, i) => (
                      <div
                        key={group.title}
                        onMouseEnter={() => setActiveGroup(i)}
                        style={{ position: 'relative' }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '11px 12px',
                            borderRadius: 6,
                            cursor: 'default',
                            background: activeGroup === i ? 'rgba(201,162,75,0.08)' : 'transparent',
                            color: '#F4F1E9',
                            fontSize: 14,
                            fontWeight: 600,
                            transition: 'background 0.15s ease',
                          }}
                        >
                          {group.title}
                          <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', color: '#8B93A6', flexShrink: 0, marginLeft: 8 }} />
                        </div>

                        {/* Flyout submenu */}
                        <AnimatePresence>
                          {activeGroup === i && (
                            <motion.div
                              initial={{ opacity: 0, x: 6 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 4 }}
                              transition={{ duration: 0.15 }}
                              style={{
                                position: 'absolute',
                                top: -6,
                                left: 'calc(100% + 8px)',
                                width: 280,
                                background: '#0F1830',
                                border: '1px solid rgba(201,162,75,0.18)',
                                borderRadius: 10,
                                boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                                padding: 6,
                              }}
                            >
                              {group.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target={item.external ? '_blank' : undefined}
                                  rel={item.external ? 'noreferrer' : undefined}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 8,
                                    padding: '10px 12px',
                                    borderRadius: 6,
                                    color: '#D8DCE6',
                                    textDecoration: 'none',
                                    fontSize: 13.5,
                                    fontWeight: 500,
                                    transition: 'background 0.15s ease, color 0.15s ease',
                                  }}
                                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,162,75,0.08)'; e.currentTarget.style.color = '#E9D9A8'; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D8DCE6'; }}
                                >
                                  {item.label}
                                  {item.external && <ArrowUpRight size={13} style={{ flexShrink: 0, opacity: 0.6 }} />}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple links */}
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered((h) => (h === label ? null : h))}
                style={{
                  position: 'relative',
                  color: hovered === label ? '#E9D9A8' : '#F4F1E9',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: 600,
                  padding: '10px 14px',
                  transition: 'color 0.2s ease',
                }}
              >
                {label}
                {hovered === label && <CrescentUnderline />}
              </a>
            ))}

            <a
              href="/borangyeg"
              style={{
                marginLeft: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#C9A24B',
                color: '#0B1220',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 700,
                padding: '10px 20px',
                borderRadius: 999,
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#E9D9A8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A24B'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="yeg-mobile-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#F4F1E9',
              cursor: 'pointer',
            }}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
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
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 19, color: '#F4F1E9' }}>
                YEG <span style={{ color: '#C9A24B', fontStyle: 'italic' }}>Academy</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#F4F1E9', cursor: 'pointer' }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ padding: '8px 24px 40px', display: 'flex', flexDirection: 'column' }}>
              {/* Program — top-level toggle */}
              <button
                onClick={() => setMobileProgramOpen((v) => !v)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  padding: '18px 0',
                  color: '#F4F1E9',
                  fontSize: 17,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Program
                <ChevronDown
                  size={18}
                  style={{ transform: mobileProgramOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                />
              </button>
              <AnimatePresence>
                {mobileProgramOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {PROGRAM_GROUPS.map((group, i) => (
                      <div key={group.title} style={{ padding: '4px 0' }}>
                        <button
                          onClick={() => setMobileGroupOpen((v) => (v === i ? null : i))}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            padding: '12px 4px',
                            color: '#E9D9A8',
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          {group.title}
                          <ChevronDown
                            size={15}
                            style={{ transform: mobileGroupOpen === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0, marginLeft: 8 }}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileGroupOpen === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              style={{ overflow: 'hidden', paddingLeft: 12 }}
                            >
                              {group.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target={item.external ? '_blank' : undefined}
                                  rel={item.external ? 'noreferrer' : undefined}
                                  style={{ display: 'block', padding: '9px 4px', color: '#D8DCE6', textDecoration: 'none', fontSize: 14 }}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
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
                  padding: '15px',
                  borderRadius: 999,
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive breakpoint (no Tailwind dependency) */}
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