'use client'
import Image from 'next/image'
import React from 'react'
import SliderJelajahAcm from '@/components/jelajahacm/SliderJelajahAcm'
import Testimoni from '@/components/jelajahacm/Testimoni'
import VideoMqa from '@/components/jelajahacm/VideoMqa'
import Moto from '@/components/jelajahacm/Moto'
import Footer from '@/components/Footer'
import Formjelajahacm from '@/components/Formjelajahacm'

function page() {
  return (
    <>
    <main>
      <section>
        <div className="">
          <SliderJelajahAcm/>
        </div>
      </section>
      <div className="bg-red-600 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="bg-red-600">
          <VideoMqa/>
        </div>
      </section>
      <div className="bg-red-600 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="flex items-center">
        <Image
            className="w-full"
            src="/jelajahacm2.jpg"
            alt="logopelita"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <section>
        <div className="bg-red-600 py-4 flex justify-center">
          <span className="p-4 font-semibold text-4xl font-sans text-white">Alumni Program</span>
        </div>
        <div className="w-full flex justify-center">
          <Testimoni/>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="animate-pulse duration-800  bg-red-600 flex justify-center p-2 py-6">
        <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiful <span className="text-black">0107894564</span></h>
        </div>
      </section>   
      <section>
        <Formjelajahacm/>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Moto/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
    </>  
  )
}

export default page



 