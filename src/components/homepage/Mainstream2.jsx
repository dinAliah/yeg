import React from 'react'
import Image from "next/image"



function Intro() {
  return (
    <>
    <section className="">
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="w-full flex justify-center bg-slate-100">
        <span className="lg:text-4xl font text-4xl text-blue-950 font-bold text-center"><span className="text-yellow-600">YEG ACADEMY</span> IN MAINSTREAM MEDIA</span>
      </div>
      <div className="w-full h-full grid  lg:grid-cols-12 gap-8 md:col-span-2 py-10 p-2 bg-slate-100">
      <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
            <video controls className=""><source src="MHI.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
            <video controls className=""><source src="NLKO.mp4" type="video/mp4" />
          </video>
        </div>  
      </div>
      <div className="py-8 lg:py-10 md:[heig`ht:80px]"></div>
    </section>
    </>
    
  )
}

export default Intro