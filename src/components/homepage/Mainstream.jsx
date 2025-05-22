import React from 'react'
import Image from "next/image"


function Intro() {
  return (
    <>
    <section3 className="">
    <div className="py-2 lg:py-10 md:[height:80px]"></div>
    <div className="px-8 w-full flex justify-center bg-slate-100">
        <span className="lg:text-4xl font text-lg text-blue-950 font-bold text-center">THE <span className="text-yellow-600">YEG ACADEMY</span> DIFFERENCE</span>
      </div>
      <div className="w-full h-full grid  lg:grid-cols-12 gap-2 md:col-span-2 py-2 p-2 bg-slate-100">
      
        <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
            <video
            controls
            autoPlay  // Add this attribute for autoplay
            className=""
          >
            <source src="carousel14.mp4" type="video/mp4" />
          </video>   
        </div>
        <div className="w-auto h-full grid mx-9 lg:mx-auto md:mx-16 col-span-12 md:col-span-6 gap-6 lg:col-span-5 md:order-3  pl-4">   
          <div className="flex space-x-8 h-full justify-start">
          </div>
          <div className="w-full h-full space-y-3  grid justify-center">
            <p className=" font-normal text-md text-slate-700 "><a className="border-b-2 border-yellow-600 font-bold" href="/">YEG Academy</a> adalah organisasi pendidikan di Malaysia yang menawarkan bidang pembelajaran dan kerjaya selari dengan permintaaan pasaran kerjaya pada masa kini. Sehubungan dengan itu, YEG Academy bertanggungjawab untuk memahami kekuatan, nilai dan keperluan khas setiap pelajar, sambil berusaha untuk memasukkan semua ahli keluarga dalam proses perancangan pendidikan. </p>
            <p className="text-slate-700">Demi memastikan kualiti pendidikan yang terbaik dapat diberikan kepada para pelajar dan calon, YEG Academy telah meningkatkan tahap kerjasama dengan pelbagai institusi professional seperti Innovative International College (IIC), Akademi Mutawwif Training & Consultation, MEATECH Technical Training Centre, MAHSA Universiti dan Pelita Akademi Sdn Bhd </p>
          </div>
          <div className=" flex justify-between ">
          <Image
            src="/malayfounding.svg"
            alt="malayfounding"
            width="180"
            height="00"
            style={{
              objectFit:"contain",
            }}
          />
          <Image
          className="hidden lg:block"
            src="/malaysia.svg"
            alt="malaysia"
            width="180"
            height="200"
            style={{
              objectFit:"contain",
            }}
          /> 
          </div>  
        </div>  
      </div>
    </section3>
    </>
    
  )
}

export default Intro