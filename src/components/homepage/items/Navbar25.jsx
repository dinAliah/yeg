'use client'
import React, { useState } from 'react';
import Image from 'next/image'


export default function Navbar25 () {
  const [isOpen, setIsOpen] = useState(false);

  
 
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
          style={{objectFit:"contain"}}/></a>
          </div>
          <ul className="grid gap-6">
            <ul className="flex items-center gap-7 right-0 justify-end">
              <a className="text-white text-lg" href="/">About Us</a>
              <a className="text-white text-lg" href="/">Corperate Integrity</a>
              <a className="text-white text-lg" href="/">Community</a>
              <a className="text-white text-lg" href="/">Vacancies</a>
              <a className="text-white text-lg" href="/">Collabration Corperate</a>
          </ul>
          <ul className="flex items-center justify-end gap-7">
            <a className="text-white text-lg" href="/">Career Program</a>
            <a className="text-white text-lg" onClick={() => setIsOpen(!isOpen)}>Diploma Courses</a>
            {isOpen && (
              <div className="absolute left-0">
                <a>test1</a>
              </div>
            )}
            <a className="text-white text-lg" href="/careyeg">News</a>
            <a className="text-white text-lg" href="/borangyeg">Contact Us</a>
          </ul>
          </ul>
          
          </nav>
        </div>
        </div>  
   
  );
};