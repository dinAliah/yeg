import React from 'react'
import Image from "next/image"


function Intro() {
  return (
    <>
    <section9 >
      <div className="flex justify-center">
      <div className="w-full max-w-7xl ">
      <div className="hidden lg:block w-full h-full lg:grid-cols-3 gap-4 space-y-10">
        <div className="flex col-span-3 justify-end ">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">INOVASI</h>
        </div>
        <div className="px-10">
        <Image
          id="image1"
            className=""
            src="/section9(1).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div>
        <div className="flex col-span-3">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">DINAMIK</h>
        </div>
        <div className="flex items-center px-10">
        <Image
          id="image1"
            className=""
            src="/section9(2).svg"
            alt="section9"
            width="250"
            height="250"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div> 
        <div className="flex col-span-3 justify-center pt-3">
        <div className="flex items-center px-5">
        <Image
          id="image1"
            className=""
            src="/section9(3).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        <div className="grid items-center px-10 ">
          <h className="text-8xl grid font-bold font-sans text-slate-700">PROGRESIF</h>
        </div>       
        </div> 
      </div>
      </div>
      </div>
      <div className="px-4 lg:px-28 lg:pt-8">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="text-transparent">11111111111111111111111111111</div>
        <div className="group w-full flex justify-center">
        <div className="grid w-full max-w-sm">
          <div className=" grid space-y-3">
          <h className="text-lg font-semibold text-yellow-700">KEUPAYAAN TANPA BATASAN</h>
          <h className="text-sm text-slate-700 leading-relaxed">Luaskan pengalaman pengajian ke tahap lebih unggul dengan penglibatan pakar industri, merasai persekitaran akademik yang unik dan mengembangkan kemahiran kerjaya ke peringkat global.</h>
          </div>
          <div className=" py-4">
          <a href="./article"
          className="rounded-md group-hover:text-white text-slate-700 p-1 px-1 pr-5 bg-gradient-to-r from-slate-700 to-slate-500 bg-no-repeat [background-position:1%_88%] [background-size:100%_0.2em] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
            Ketahui lebih lanjut</a>
          </div>
        </div>
        </div>
          </div>
          </div>
    </section9>
    </>
    
  )
}

export default Intro