'use client'
import React from 'react'
import Image from 'next/image'
import Testimoni from '@/components/avmcareer/Testimoni'
import Formavmcareer from '@/components/avmcareer/Formavmcareer'
import Referencephone from '@/components/avmcareer/Referencephone'
import Benafit from '@/components/avmcareer/Benefit'
import Syarat from '@/components/avmcareer/Syarat'

function page() {
  
  return (
    <>
    <main>
      <section>
        {/* <div className="hidden bg-black h-screen lg:flex justify-end" style={{backgroundImage:'url("/bgavm.png")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="lg:flex items-center"><Formblastingaviation2/></div>
        </div> */}
        <div className="grid justify-center">
          <Image
              className=""
              src="/lpaviation.jpg"
              alt="lpaviation"
              width="1500"
              height="80"
              style={{
                objectFit:"contain",
              }}
            />
            
          </div>
          <div className="w-full lg:flex justify-center">
          <div className=" lg:w-1/2">
          <Formavmcareer/>
          </div>
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
      <Benafit/>
      <Syarat/>
     
   
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
        <Referencephone/>
        </section>
        <section>
            <div className="bg-white flex justify-center ">
                <Image
                    className=""
                    src="/dipaviation5.png"
                    alt="dipaviation5"
                    width="800"
                    height="80"
                    style={{
                    objectFit:"contain",
                    }}
                />
                </div>
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