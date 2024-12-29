import React from 'react'
import Image from "next/image"

function Slider() {
  return (
    <section>
      <div className="mt-6">
        <p className="text-sm-copy mb-3 text-center text-gray-500 text-2xl font-bold">Our Award</p>
        <div className="w-full flex justify-center bg-red-300 ">
        <div className="flex flex-col overflow-hidden w-full bg-red-300">
        <div className="relative">
          <span className="absolute left-0 top-0 w-[70px] h-full bg-gradient-to-l to-transparent rotate-180 z-10 from-white"></span>
          <div className="flex items-center animate-slow-infinite-scroll gap-4 mix-blend-darken">
        {Array(14).fill(0).map((_, index) => (
          <Image
            key={index}
            className="object-contain h-[90px] w-full mix-blend-darken p-2"
            src="/graduatecap.svg"
            alt="Makro logo"
            loading="lazy"
            height="50"
            width="50"/>))}
      </div>
    <span className="absolute right-0 top-0 w-[70px] h-full bg-gradient-to-l to-transparent z-10 from-white "></span>
      </div>
      </div>
        </div>
      </div>
    </section>
  )
}

export default Slider