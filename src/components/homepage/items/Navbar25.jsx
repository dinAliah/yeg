'use client'
import React, { useState } from 'react';
import Image from 'next/image'


function Navbar25 () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <div className="hidden lg:block">
    <div className="relative">
      <nav className="absolute z-50 w-full p-2 flex justify-between items-start h-[250px] bg-gradient-to-b from-[#151c41] to-[rgba(11,24,54,0)]">
        <div className="pl-4">
        <a href="/" className="">
          <Image
          className=""
          src="/logoyeg.svg"
          alt="logoyeg"
          height="2"
          width="250"
          style={{objectFit:"contain"}}/></a></div>
          <ul className="grid gap-6">
          <ul className="flex items-center gap-7 right-0 justify-end">
          <li className="text-white text-lg">
            <a href="/">About Us</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Corperate Integrity</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Community</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Vacancies</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Collabration Corperate</a>
          </li>
        </ul>
        <ul className="flex items-center gap-7">
          <li className="text-white text-lg">
            <a href="/">Career Program</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Online Distance Learning</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Diploma Courses</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">WBL Diploma Courses</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">News</a>
          </li>
          <li className="text-white text-lg">
            <a href="/">Contact Us</a>
          </li>
        </ul>
          </ul>
          </nav>
        </div>
        </div>
   
  );
};

export default Navbar25 ;