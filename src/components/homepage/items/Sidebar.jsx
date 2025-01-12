"use client"

// src/components/Navbar.js
import React, { useState } from 'react';
import Image from "next/image"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavbar1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleNavbar3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleNavbar4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleNavbar6 = () => {
    setIsOpen6(!isOpen6);
  };


  return (
    <nav className="bg-gray-800 lg:hidden p-3">
      <div className="flex items-center justify-between">
        <a href="/"
        className="text-white font-bold text-xl">
        <Image
        className=""
        src="/logoyeg.svg"
        alt="logoyeg"
        height="120"
        width="120"
        style={{
          objectFit: "contain",
        }}
      />
        </a>
        <button
          className="lg:hidden text-white focus:outline-none duration-500"
          onClick={toggleNavbar}
        >
        <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
       
        <rect width="20" height="2" x="2" y="6" rx="1"
          className={`origin-center transition-all duration-500 ${
            isOpen ? "translate-y-3 rotate-45" : ""
          }`}
        />
        {/* Middle Line */}
        <rect width="20" height="2" x="2" y="12" rx="1"
          className={`origin-center transition-all duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom Line */}
        <rect width="20" height="2" x="2" y="18" rx="1"
          className={`origin-center transition-all duration-500 ${
            isOpen ? "-translate-y-3 -rotate-45" : ""
          }`}
        />
      </svg>
        </button>
      </div>


      <div
      className={`lg:hidden transform transition-transform duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0"
        } origin-top overflow-hidden`}
        >
      
        

      {/* Responsive Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-4 ">
          {/* Add your navigation links here */}
          <button 
          onClick={toggleNavbar1}
          className="block text-white py-2 px-4 hover:bg-gray-700 ">
            Career Program
          </button>

          {isOpen1 && (
            <div
            className={`lg:hidden mt-4 bg-yellow-700 overflow-hidden transform transition-transform duration-700 ease-in-out ${
              isOpen1
                ? "opacity-100 scale-y-100 max-h-[300px]"
                : "opacity-0 scale-y-0 max-h-0"
            } origin-top`}
          >
                <a 
                onClick={toggleNavbar2}
                className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursuskerjaya/sphu">
                Sijil Profesional Haji & Umrah (SPHU)
                </a>
                <a 
                onClick={toggleNavbar3}
                className="block text-white py-2 px-4 hover:bg-gray-700"href="../kursuskerjaya/acm">
                Aviation Career Malaysia (ACM)
                </a>
                
            <a 
                onClick={toggleNavbar4}
                className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursuskerjaya/misa">
                Malaysia Industry Skill Academy (MISA)
            </a>
  
        </div>
          )}
          
          <button 
            onClick={toggleNavbar6}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
             Diploma Courses 
            </button>
            {isOpen6 && (
        <div className="lg:hidden mt-4 bg-yellow-700">
          {/* Add your navigation links here */}
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dhumy">
            Diploma Pengurusan Haji & Umrah (DHUMY)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dle">
            Diploma Penguatkuasa Undang-Undang (DLE)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dnur">
            Diploma Kejururawatan (DNUR)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dacm">
              Diploma Pengurusan Kargo Udara (DACM)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/daom">
              Diploma Pengurusan Operasi Penerbangan (DAOM)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/damt">
              Diploma Penyelenggaraan teknologi Pesawat (DAMT)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/amt">
              Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiploma/dtmmea">
              Diploma Pengurusan Pelancongan (DTM-MEA)</a>
        </div>
          )}
<button 
            onClick={toggleNavbar2}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              WBL Diploma Courses  
            </button>
            {isOpen2 && (
        <div className="lg:hidden mt-4 bg-yellow-700">
          {/* Add your navigation links here */}
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dhumywbl">
            Diploma Pengurusan Haji & Umrah (DHUMY)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dhmwbl">
            Diploma Pengurusan Perhotelan (DHM-WBL)</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="./kursusdiplomawbl/dcawbl">
            Diploma Seni Kulinari (DCA-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/decwbl">
              Diploma Pendidikan Awal Kanak-Kanakl (DEC-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dacmwbl">
              Diploma Pengurusan Kargo Udara (DACM-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/daomwbl">
              Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../kursusdiplomawbl/dasmwbl">
              Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a>
        </div>
          )}

          <a className="block text-white py-2 px-4 hover:bg-gray-700" href="./careyeg">
          Article</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../testimoni">
              Testimony</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../career">
              Job Vacancy</a>
              {/* <a className="block text-white py-2 px-4 hover:bg-gray-700" href="../borangyeg">
              Enrole</a> */}
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              PDPT-YEG</a>
              <a className="rounded-sm bg-yellow-600 hover:bg-yellow-500 duration-300 block text-white py-2 px-4 " href="../borangyeg">
              Contact Us</a>
        </div>
        
      )} 
      </div>        
    </nav>





    
  );
};

export default Navbar;

