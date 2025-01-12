'use client'
import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer"

function Slide2() {
  return (
    <>
    <section className="lg:hidden">
    </section>
    <div className="w-full h-full px-4 lg:px-16 grid text-blue-950 lg:py-6">
        <span className="lg:text-5xl text-4xl font-bold py-3 text-center">OUR UNIQUE QUALITIES</span>
      </div>
    <section className="w-full lg:py-20 bg-slate-200 space-y-6 py-6 lg:px-40">
      <div className="bg-white grid w-full rounded-md border-2 drop-shadow-md hover:shadow-2xl duration-300">
        <h1 className="font-bold text-3xl p-2 text-center">VISI YEG</h1>
        <h1 className="font-semibold text-xl p-2 text-center">Visi kami adalah untuk membina komuniti yang prihatin dan bertanggungjawab sosial. YEG Care bercita-cita untuk menjadi penggerak utama dalam meningkatkan kesedaran tentang keperluan masyarakat gelandangan, dan secara berterusan menjalankan usaha-usaha yang dapat membawa perubahan positif kepada mereka</h1>
      </div>
      <div className="bg-white grid w-full rounded-md border-2 drop-shadow-md hover:shadow-2xl duration-300">
        <h1 className="font-bold text-3xl p-2 text-center">MISI YEG</h1>
        <h1 className="font-semibold text-xl p-2 text-center">Kami percaya bahawa tindakan kecil mampu membawa perubahan besar. Misi kami adalah untuk menyediakan bantuan segera kepada mereka yang memerlukan, khususnya dalam bentuk makanan dan minuman. Melalui usaha ini, kami ingin menjadi sebahagian daripada penyelesaian kepada masalah kemiskinan bandar</h1>
      </div>
    </section>
    <div className=" lg:block py-8 lg:py-10 md:[height:80px]"></div>

    <section>
      <div>
      <div className=" bg-slate-800 w-full h-full px-4 lg:px-28"> 
        <div className="bg-yellow-600 w-1/2 text-transparent rounded-r-md">a</div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 lg:py-6">
        <div className="grid py-3 ">
      <h className="text-base font-semibold text-yellow-800 ">OUR ENTERTAINMENT:</h>
      <h className="text-4xl font-extrabold text-white ">YEG HEALTH CARE ORGANIZATION</h>
      </div>
      </div>

      <div className="h-full lg:py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <a href="/careyeg/sept2024"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 space-y-3">
        <Image 
            className="w-full"
            src="/suap.jpg"
            alt="suaphomeless"
            width="10"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        </a>
        <a href="/"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 flex items-center">
        <Image 
            className="w-full"
            src="/comingsoon.svg"
            alt="comingsoon"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          {/* <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>
        </a>
        <a href="/"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 flex items-center">
        <Image 
            className="w-full"
            src="/comingsoon.svg"
            alt="comingsoon"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          {/* <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>
        </a>
        <a href="/"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 flex items-center">
        <Image 
            className="w-full"
            src="/comingsoon.svg"
            alt="comingsoon"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          {/* <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>
        </a>
        <a href="/careyeg/sept2024"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 flex items-center">
        <Image 
            className="w-full"
            src="/comingsoon.svg"
            alt="comingsoon"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          {/* <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>
        </a>
        <a href="/careyeg/sept2024"
        className="rounded-md flex bg-white hover:scale-150 duration-300 top-0 left-0 w-full h-full object-cover">
        <div className="p-2 flex items-center">
        <Image 
            className="w-full"
            src="/comingsoon.svg"
            alt="comingsoon"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
          {/* <p className="text-xs font-bold text-slate-800 opacity-40">Sept31,2024 | by Azim Amin</p>
          <p className="text-sm font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
          <p className="text-xs  text-slate-700 opacity-50"></p>
          <a href="/" className="font-medium text-blue-600 flex items-center p-1 text-sm">Read Now
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>
        </a>
        </div>
        <div className=" text-transparent flex justify-end ">
          <div className="bg-yellow-600 w-1/2 rounded-l-md">d</div>
          </div>
      </div>
    </div>
    </section>
    <section>
      <div className="">
        <h1>Menyediakan Bantuan Kecemasan:</h1>
        <h1>Makanan dan minuman yang disalurkan secara langsung kepada golongan gelandangan, memastikan mereka mendapat keperluan asas</h1>
      </div>
    </section>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default Slide2