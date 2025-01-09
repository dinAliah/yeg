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
    <nav className="absolute w-full p-2 flex justify-between items-start h-[300px] bg-gradient-to-b from-[rgba(15,23,42,1)] to-[rgba(15,23,42,0)]">
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
          <a href="#about">Corperate Integrity</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Community</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Vacancies</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Collabration Corperate</a>
        </li>
      </ul>
      <ul className="flex items-center gap-7">
        <li className="text-white text-lg">
          <a href="/">Career Program</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Online Distance Learning</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Diploma Courses</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">WBL Diploma Courses</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">News</a>
        </li>
        <li className="text-white text-lg">
          <a href="#about">Contact Us</a>
        </li>
      </ul>
        </ul>
  </nav>
   
  );
};

export default Navbar25 ;


{/* <li className="relative">
          <button
            className="text-white text-lg p-2 md:p-0 hover:text-teal-400"
            onClick={toggleDropdown}
          >
            More
          </button>
          <ul
            className={`absolute top-full bg-gray-700 w-40 mt-2 rounded-md overflow-hidden shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}
          >
            <li className="text-white text-sm p-2 hover:bg-gray-600">
              <a href="#faq">FAQ</a>
            </li>
            <li className="text-white text-sm p-2 hover:bg-gray-600">
              <a href="#support">Support</a>
            </li>
            <li className="text-white text-sm p-2 hover:bg-gray-600">
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </li> */}
