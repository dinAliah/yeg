'use client'
import React from 'react'
import Image from 'next/image'
import Formblastingscalffoldingselangor from '@/components/scafollding/Formblastingscalffoldingselangor'


function page() {
  return (
    <div>
      <div className="bg-slate-700">
      <div className="py-2 md:py-3 lg:py-6"></div>
      <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/scalffolding1.jpg"
          alt="scalffolding1"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}/>
      </div>
        <div className="bg-white py-2 md:py-3 lg:py-6"></div>
        <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/scalffolding2.jpg"
          alt="scalffolding1"
          width="1100"
          height="80"
          style={{
            objectFit:"contain",}}/>
      </div>
      <section1 className="">
      <div className="m lg:px-10 p-6 flex justify-center bg-black">
        <div className="">
        <video
        controls
        autoPlay  // Add this attribute for autoplay
        className=""
      >
        <source src="/scalffoldingvideo.mp4" type="video/mp4" />
      </video>
        </div>
      </div>
    </section1>
      
      <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      <div>
        <Formblastingscalffoldingselangor/>
      </div>
      <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      </div>
    </div>
  )
}

export default page