import React from 'react'
import Image from "next/image"



function Intro() {
  return (
    <>
    <section5>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className=" px-4 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"> 
      <card className="w-full h-full p-3">
      <div className="w-full flex justify-center">
        <span className="font-sans font-semibold text-yellow-800 ">EKSPLORASI KEPAKARAN YEG ACADEMY:</span>
        </div>
        <div h-full className="">
        <h3 className=" text-6xl font-bold text-slate-800 text-center ">BENTUK <span className=" grid text-4xl">MASA DEPAN</span> ANDA</h3>
        </div>
        <div className=" flex items-end justify-center">
        <div className="group  " href="./kursuskerjaya/sphu">
        <span className="text-slate-700 font-bold bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          Klik pada Navbar di atas.</span>
        <div className=" group-hover:translate-x-full duration-500">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </div>
        </card>

        {/* tukar gambar ade PU Riz event */}
        <card className=" w-full h-full flex justify-center items-center rounded-md group " style={{ backgroundImage: 'url("/mutawif.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}> 
          <div className="flex justify-center">
            <span className="group-hover:bg-black group-hover:rounded-md p-3 duration-1000 items-center lg:group-hover:text-2xl group-hover:text-lg group-hover:font-bold group-hover:text-white text-transparent">PENGURUSAN HAJI & UMRAH</span> 
          </div>
          <div className="py-52"></div>
        </card>

        {/* tukar gambar ade event aviation */}
        <card className=" w-full h-full flex justify-center items-center rounded-md  group" style={{ backgroundImage: 'url("/oilandgas.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex justify-center">
            <span className="group-hover:bg-black group-hover:rounded-md p-3 duration-1000 items-center lg:group-hover:text-2xl group-hover:text-lg group-hover:font-bold group-hover:text-white text-transparent">BIDANG MARITIM, MINYAK & GAS</span>
          </div>
          <div className="py-52"></div>
        </card>

        {/* tukar gambar ade event dengan puan siti */}
        <card className=" w-full h-full flex justify-center items-center rounded-md  group" style={{ backgroundImage: 'url("/aviation.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex justify-center">
            <span className="group-hover:bg-black group-hover:rounded-md p-3 duration-1000 items-center lg:group-hover:text-2xl group-hover:text-lg group-hover:font-bold group-hover:text-white text-transparent">BIDANG PENERBANGAN</span>
          </div>
          <div className="py-52"></div>
        </card>
      </div>
    </div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    </section5>
    </>
    
  )
}

export default Intro