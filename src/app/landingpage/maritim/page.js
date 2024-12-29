'use client'
import React from 'react'
import Image from 'next/image'
import Formblastingmaritim from '@/components/Formblastingmaritim'


function page() {
  return (
    <div>
      <div className="bg-slate-700">
      <div className="py-2 md:py-3 lg:py-6"></div>
      <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/maritim1.jpg"
          alt="maritim1"
          width="1500"
          height="80"
          style={{objectFit:"contain"}}/>
      </div>
        <div className="bg-white py-2 md:py-3 lg:py-6"></div>
        <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/maritim2.jpg"
          alt="maritim2"
          width="1100"
          height="80"
          style={{
            objectFit:"contain"}}/> 
      </div>
      {/* <section1 className="">
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
    </section1> */}
      
      <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      <div>
        <Formblastingmaritim/>
      </div>
      <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      </div>
    </div>
  )
}

export default page