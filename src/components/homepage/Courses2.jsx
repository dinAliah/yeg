import React from 'react'
import Image from "next/image"



function Intro() {
  return (
    <>
    <section7>
    <div className=" px-4 lg:px-28 ">
      <div className=" "> 
      <card className="w-full h-full p-3">
      <div className="grid justify-start ">
        <span className="font-sans text-yellow-800 text-base font-semibold">ACADEMICS:</span>
        <h3 className=" text-4xl font-extrabold text-slate-800">CHOOSE YOUR PROGRAM</h3>
        </div>
        </card>  
        <card className="hidden lg:block w-full h-full lg:col-span-3 justify-center " >
          {/* <div className=" w-4/5 h-full flex items-center px-20 rounded-md hover:shadow-xl duration-300 border-l ">
            <span className="text-slate-700 text-md leading-relaxed ">
            YEG Academy percaya bahawa melalui pendidikan yang mantap, setiap individu memiliki keupayaan untuk mencapai potensi penuh mereka. Teruslah mengikuti cita-cita anda dan jangan ragu untuk menghubungi kami untuk pengetahuan dan panduan yang lebih lanjut. Bersama-sama, mari kita membina masyarakat yang terdidik, terinspirasi, dan berjaya. Terima kasih kerana memilih YEG Academy sebagai rakan pendidikan anda.
            </span>
          </div> */}
        </card>
      </div>
    </div>
    </section7>
   
    <section8>
    <div className="lg:px-28 px-4">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
      <card1 className=" w-full h-full p-8 space-y-8 hover:bg-slate-800 duration-200 border-r-2 hover:shadow-xl group">
        <div className="" >
        <Image
          id="image1"
            className=""
            src="/section8(2).svg"
            alt="glob"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
      <div className="">
        <span className="font-sans text-yellow-800 font-bold text-xl"> PROGRAM KERJAYA</span>
        </div>
        <div h-full className="">
        <h3 className=" text-base font-bold text-slate-500 group-hover:text-white">Terokai pelbagai bidang kerjaya dengan <span className="italic">'upskill' </span>dan <span className="italic">'reskill'</span> potensi diri sehingga ke tahap profesional.</h3>
        <h className="text-transparent">dssdf</h>
        </div>
        <div className="flex items-end underline underline-offset-8 decoration-2">
        <a href="/"
        className=" ">
          <div className="flex items-center ">
          <span className=" font-sans  font-semibold group-hover:text-white ">Click pada Navbar di atas</span>
        <div className=" group-hover:translate-x-full duration-500 group-hover:text-white"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </a>
        </div>
        </card1>
        
        <card2 className="w-full h-full p-8 space-y-8 hover:bg-slate-800 duration-200 border-r-2 hover:shadow-xl group">
        <div className=""> 
        <Image
          id="image1"
            className=""
            src="/section8(2).svg"
            alt="glob"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
      <div className="">
        <span className="font-sans text-yellow-800 font-bold text-xl">PROGRAM WORK-BASED LEARNING</span>
        </div>
        <div h-full className="">
        <h3 className=" text-base font-bold text-slate-500 group-hover:text-white">Sertai program diploma dengan inovasi 12 bulan pembelajaran secara teori dan 18 bulan latihan industri bergaji penuh.</h3>
        </div>
        <div className="flex items-end underline underline-offset-8 decoration-2">
        <a href="/"
        className=" ">
          <div className="flex items-center ">
          <span className=" font-sans  font-semibold group-hover:text-white ">Click pada Navbar di atas</span>
        <div className=" group-hover:translate-x-full duration-500 group-hover:text-white"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </a> 
        </div>
        <div className=" "></div>     
        </card2>
        <card3 className="w-full h-full p-8 space-y-8 hover:bg-slate-800 duration-200 hover:shadow-xl group">
        <div>
        <Image
          id="image1"
            className=""
            src="/section8(2).svg"
            alt="glob"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
      <div className="">
        <span className="font-sans text-yellow-800 font-bold text-xl">PROGRAM DIPLOMA</span>
        </div>
        <div h-full className="">
        <h3 className=" text-base font-bold text-slate-500 group-hover:text-white">Selaraskan minat anda dengan peluang pendidikan yang memberi permintaan kerjaya yang tinggi di Malaysia</h3>
        <h className="text-transparent">dssdf</h>
        </div>
        <div className="flex items-end underline underline-offset-8 decoration-2">
        <a href="/"
        className="">
          <div className="flex items-center ">
          <span className=" font-sans  font-semibold group-hover:text-white ">Click pada Navbar di atas</span>
        <div className=" group-hover:translate-x-full duration-500 group-hover:text-white"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </a>
        
        </div>
        <div className=" "></div>
        </card3>    
      </div>
    </div>
    <div className="hidden lg:block py-8 lg:py-10 md:[height:80px]"></div>
    </section8>
    
    </>
    
  )
}

export default Intro