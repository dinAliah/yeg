'use client'
import React from 'react'
import Image from 'next/image'
import SliderJelajahAcm from '@/components/kembarahaji/SliderJelajahAcm'
import Testimoni from '@/components/mqa/Testimoni'
import VideoMqa from '@/components/kembarahaji/VideoMqa'
import Moto from '@/components/kembarahaji/Moto'
import Footer from '@/components/Footer'
import FormMmp from '@/components/mqa/FormMmp'
import VerticalCountdownTimer from '@/components/VerticalCountdownTimer'
import Facility from '@/components/mqa/Facility'
import Reference from '@/components/mqa/Reference'


function page() {
  const targetDate = new Date('2024-06-09T23:59:59');
  return (
    <>
    <main>
      <section>
      <div className="hidden bg-black h-screen lg:flex justify-end" style={{backgroundImage:'url("/mqaposter1.png")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="lg:flex items-center"><FormMmp/></div>
      </div>
      <div className="lg:hidden bg-white h-full flex justify-center" >
      <div className=""><FormMmp/></div>
      </div>
      </section>
      <div className="hidden lg:block bg-slate-800 py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="hidden  w-full lg:flex justify-center items-center bg-slate-800">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-4xl rounded shadow-lg">
          <source src="/MHI.mp4" type="video/mp4" />
        </video>
      </div>
      </section>
      <div className="bg-slate-800 hidden lg:block py-4 lg:py-10 md:[height:80px]"></div>
      <section className="bg-gray-200">
      <div className="lg:text-5xl text-3xl font-bold py-3 text-center">Facility</div>
        <Facility/>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>  

        <section>
          <div className="lg:text-5xl text-3xl font-bold py-3 text-center">Roadmap Courses</div>
        <Image 
          className="w-full"
          src="/roadmapmqa.png"
          alt="roadmapmqa"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}/>
        </section>

      <div className="py-4 lg:py-10 md:[height:80px]"></div>  
      <section>
        
      </section>
      <section>
        <Testimoni/>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Image 
          className="hidden lg:blockw-full"
          src="/bersamatun.svg"
          alt="bersamatun"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
        <Reference/>
        
        </section>
    </main>
    </>  
  )
}

export default page



{/* <section>
<div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2 py-6">
  <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiyyid <span className="text-black">01115403660</span></h>
  </div>
</section> */}