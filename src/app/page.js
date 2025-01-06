'use client'
import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus.jsx"
import SliderRamadan from '@/components/SliderRamadan';
import Head from 'next/head';


export default function home() {
  return (
    <>
    <html lang="en">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6199758154363864"
        data-ad-slot="1234567890" // Replace with your ad slot ID
        data-ad-format="auto"
      ></ins>
  <main>
    <div className="fixed bottom-0 w-full flex justify-end p-4">
      <div className=" hover:slide-in-from-left-1 flex items-center right-2  rounded-full bg-yellow-500">
        <h className=" p-3 flex items-center rounded-full font-extrabold">Get in Touch</h>
        <a href="/borangyeg"
      className="">
      <Image 
          className=""
          src="/fixedcontactus.svg"
          alt="fixedcontactus"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </a>
        </div>
    </div>
    <section1 className="w-full">
      <div className="max-w-full lg:px-3 flex justify-center bg-black">
        <video
          controls
          autoPlay  // Add this attribute for autoplay
          className=""
        >
          <source src="yegintro.mp4" type="video/mp4" />
      </video>
      </div>
    </section1>
    
    <div className="sticky">
    <section2 className="w-full absolute -bottom-12 px-24 hidden lg:block">
      <div className="w-full h-full bg-white rounded-md flex justify-center shadow-md space-x-16">
      <div className="flex items-center">
        <Image
            src="/iuclogo.png"
            alt="iuclogo"
            width="160"
            height="200"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        <div className=" flex items-center">
        <Image
            src="/meatech2logo.svg"
            alt="meatech2logo"
            width="230"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" flex items-center">
        <Image
            src="/mahsalogo.svg"
            alt="mahsalogo"
            width="180"
            height="0"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" flex items-center">
        <Image
            src="/logoamtc.svg"
            alt="logoamtc"
            width="180"
            height="0"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" flex items-center">
        <Image
            src="/meatechlogo.svg"
            alt="meatechlogo"
            width="120"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className=" flex items-center">
        <Image
            src="/logopelita.svg"
            alt="logopelita"
            width="90"
            height="200"
            style={{objectFit: "contain"}}/>
        </div>
        </div>
    </section2>
    </div>
    <div className="bg-black py-4 lg:py-10 md:[height:80px]"></div>
    <div className="bg-black">
      <SliderRamadan /></div>
    <div className="bg-black py-4 lg:py-10 md:[height:80px]"></div>
    {/* <section>
      <div className="bg-black px-14">
      <div className="bg-green-300 grid grid-cols-3 gap-4">
        <div className=" w-full">
          <div className="hover:bg-yellow-400 duration-300 w-full border-2 border-yellow-400 rounded-lg p-2">
            <div className="">
            <h className="text-white">Pengurusan Haji & Umrah</h>
            </div>
            </div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-500 rounded-lg p-2">Pengurusan Operasi Penerbangan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Penyelenggaraan Teknologi Pesawat</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Perhotelan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Seni Kulinari</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pendidikan Awal Kanak-Kanak</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Kargo Udara</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Operasi Penerbangan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">View more courses...</div>
        </div>
      </div>
      </div>
    </section> */}

    <section3 className="">
    <div className="px-8 w-full flex justify-center bg-slate-100">
        <span className="lg:text-4xl font text-4xl text-blue-950 font-bold text-center">THE <span className="text-yellow-600">YEG ACADEMY</span> DIFFERENCE</span>
      </div>
      <div className="w-full h-full grid  lg:grid-cols-12 gap-2 md:col-span-2 py-10 p-2 bg-slate-100">
      
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
          src={require('../../public/awardyeg2.png')}
            className=""
            alt="awardyeg2"
            width="90"
            height="80"
            style={{   
                objectFit:'contain',           
            }}
          />
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


      <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus/>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>

      <section3 className="">
    <div className="px-8 w-full flex justify-center bg-slate-100">
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
    </section3> 

      <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section4>
    <div className="w-full h-full px-4 lg:px-16 grid text-blue-950 ">
        <span className="lg:text-5xl text-4xl font-bold py-3 text-center">OUR UNIQUE QUALITIES</span>
      </div>
      <div className="hidden lg:block w-full h-full justify-center ">
        <div className="group h-full flex justify-center  ">
        <p className="text-md text-slate-700  grid font-semibold font-sans text-center p-10 leading-snug tracking-wide">
        YEG Academy telah berjaya memberi peluang kepada lebih 5000 orang golongan muda untuk meneruskan pelajaran dan latihan kerjaya di dalam bidang yang relevan dengan kerjaya pada masa kini. Jangan biarkan impian anda terkubur begitu sahaja
          <span className="text-slate-700 font-bold bg-gradient-to-r mt-3 from-yellow-500 to-yellow-400 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          Ambil peluang ini dan mulakan langkah pertama anda bersama YEG Academy.</span>
        </p>
      </div>
      </div>
      <div className="w-full h-full "></div>  
    <div className="px-4 lg:px-16 py-8 ">
      <div className="w-full h-full bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform  group-hover:-translate-y-3">
          <Image
            src="/awardicon.svg"
            alt="malaysia"
            width="40"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Selari Dengan Dasar Ekonomi Digital Negara</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">YEG menyediakan program yang selaras Dasar Ekonomi Digital Negara</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/handshake.svg"
            alt="handshake"
            width="55"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span className=" text-md font-bold">Ekosistem Pembelajaran Terbaik</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">YEG memilih untuk berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/glob.svg"
            alt="glob"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Pilihan Bidang Dengan Pasaran Kerja Terkini</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">YEG menyediakan pilihan program pendidikan dan kerjaya yang hanya mengikut permintaan industri.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/person.svg"
            alt="person"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Mengambil Kira Potensi Pelajar dan Pelatih</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">YEG menyesuaikan personaliti pelajar dengan bidang kerjaya yang dipilih.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/support.svg"
            alt="support"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Penglibatan Pakar Industri</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Tenaga pengajar adalah terdiri mereka yang berpengalaman dalam industri masing-masing.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        </div>  
      </div>
    </section4>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section5>
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
    </section5>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>

    <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus/>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>

    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section6>
      <div className="hidden lg:block bg-slate-200 py-6">
      <div className=" w-full h-full flex justify-center p-7">
        <div className="group w-3/4 h-full grid justify-center ">
        <p className="text-center font-sans text-3xl font-bold text-yellow-800">TRANSFORMASI MELALUI KEPAKARAN</p>
        <p className="text-5xl text-slate-700  font-semibold font-sans text-center leading-snug tracking-wide">
        <span className="text-slate-700 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
        YEG ACADEMY</span>MENGUBAH PENDIDIKAN MENJADI PENGALAMAN 
          <span className="text-slate-700 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          KEPAKARAN YANG MENYELURUH</span>
        </p>
      </div>
      </div>
      </div>
    </section6>
    <div className="hidden lg:block py-8 lg:py-10 md:[height:80px]"></div>

    

    <div className="hidden lg:block py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
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
    </section8>
    <div className="hidden lg:block py-8 lg:py-10 md:[height:80px]"></div>
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
    </section9>  
    <section10>
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
    </section10>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus/>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section11>
      <div className=" bg-slate-800 w-full h-full px-4 lg:px-28"> 
        <div className="bg-yellow-600 w-1/2 text-transparent rounded-r-md">a</div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 lg:py-6">
        <div className="grid py-3 ">
      <h className="text-base font-semibold text-yellow-800 ">OUR ENTERTAINMENT:</h>
      <h className="text-4xl font-extrabold text-white ">EXPLORE OUR PROGRAMME ON MEDIA SOCIAL</h>
      </div>
      
      </div>
      <div className="h-full lg:py-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          
        <a href="https://www.tiktok.com/@yegacademy/video/7319391659773545730?lang=en"
        className="flex hover:scale-150 duration-300">
        <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md  top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="./tiktok01.mp4" type="video/mp4"/>
          </video>
        </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7314661907741428993"
          className=" flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md  top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok02.mp4" type="video/mp4"/>
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7302099228346600705?lang=en"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok03.mp4" type="video/mp4"/>
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7327569127793593602?is_from_webapp=1&sender_device=pc&web_id=7329685069341328898"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok04.mp4" type="video/mp4"/> 
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7318007453159935233?lang=en"
          className="flex hover:scale-150 duration-500">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok05.mp4" type="video/mp4"/>
          </video>
          </a>
          <a href="https://www.tiktok.com/@yegacademy/video/7326925324359306498?lang=en"
          className="flex hover:scale-150 duration-300">
          <video autoplay="autoplay" 
                  loop="loop" 
                  muted="muted"
                  className="rounded-md top-0 left-0 w-full h-full object-cover" 
                  width="390" 
                  height="890">
              <source src="tiktok06.mp4" type="video/mp4"/>
          </video>
          </a>
        </div>
        <div className=" text-transparent flex justify-end ">
          <div className="bg-yellow-600 w-1/2 rounded-l-md">d</div>
          </div>
      </div>
    </section11>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section12>
      <div className="w-full h-full px-4 lg:px-28 ">
        <div className="w-full h-full grid justify-center space-y-2 py-4">
        <h className="font-semibold text-lg text-center text-yellow-600">WHAT'S ON</h>
          <h className="font-bold font-sans text-6xl text-slate-700">YEG NEWS & EVENTS</h>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-yellow-600 rounded-md">
        <card1 className="w-full h-full flex justify-center items-center rounded-md hover:shadow-xl  group " style={{ backgroundImage: 'url("/newss2.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.kosmo.com.my/2022/03/25/yeg-academy-anjur-kempen-memilih-kursus-pengajian/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">MARCH 25,2022</h>
            <h className="text-slate-800 font-semibold ">YEG ACADEMY ANJUR KAMPEN MEMILIH KURSUS - KOSMO DIGITAL</h>
            </a>
            </div>
        </card1>
        <card2 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss3.jpeg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end">
            <a href="https://bebasnews.my/2023/02/03/diploma-pengurusan-haji-dan-umrah-yeg-academy-banyak-manfaat/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">FEBRUARY 3,2023</h>
            <h className="text-slate-800 font-semibold ">DIPLOMA PENGURUSAN HAJI & UMRAH YEG ACADEMY BANYAK MANFAAT - BEBASNEWS</h>
            </a>
            </div>
        </card2>
        <card3 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss10.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.utusan.com.my/nasional/2023/03/misa-renaco-marine-jalin-kerjasama-lahir-tenaga-mahir/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">MARCH 13,2023</h>
            <h className="text-slate-800 font-semibold ">MISA, RANACO MARINE JALIN KERJASAMA LAHIR TENAGA MAHIR MISA - UTUSAN MALAYSIA</h>
            </a>
            </div>
        </card3>
        <card4 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss5.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.goodnews.com.my/story/yeg-academy-a-career-building-platform-in-the-field-of-aviation/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">MARCH 2,2023</h>
            <h className="text-slate-800 font-semibold ">YEG ACADEMY: A CAREER BUILDING PLATFOR IN THE FIELD - GOOD NEWS</h>
            </a>
            </div>
        </card4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 py-3 bg-slate-700 rounded-md">
        <card5 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss9.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.kosmo.com.my/2023/12/25/peluang-kerjaya-cerah-bidang-tvet-maritim/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">JANUARY 8,2024</h>
            <h className="text-slate-800 font-semibold ">PELUANG KERJAYA CERAH BIDANG TVET MARITIM - KOSMO</h>
            </a>
            </div>
        </card5>
        <card6 className=" transition w-full h-full flex justify-center items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss11.jpg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.kosmo.com.my/2024/01/19/yeg-academy-sasar-3000-lepasan-spm-sertai-wbl/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">JANUARI 18,2024</h>
            <h className="text-slate-800 font-semibold ">YEG ACADEMY SASAR 3,000 LEPASAN SPM SERTAI WBL - KOSMO</h>
            </a>
            </div>
        </card6>
        <card7 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss7.jpeg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44 ">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://malaysiagazette.com/2023/12/05/yeg-academy-mahsa-university-jalin-kerjasama-perkasa-kerjaya-jururawat/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">AUGUST 18,2022</h>
            <h className="text-slate-800 font-semibold ">YEG ACADEMY, MAHSA UNIVERSITY JALIN KERJASAMA PERKASA KERJAYA JURURAWAT - MALAYSIAGAZETTE</h>
            </a>
            </div>
        </card7>
        <card8 className=" transition w-full h-full flex justify-center  items-center rounded-md hover:shadow-xl group" style={{ backgroundImage: 'url("/newss8.jpeg")', backgroundSize: 'cover', backgroundPosition: 'fit' }}>
          <div className="py-44">
          </div>
          <div className="h-full grid items-end ">
            <a href="https://www.utusan.com.my/gaya/2022/04/pu-amin-pu-riz-dilantik-sebagai-pensyarah-yeg-academy/"
            className="text-left group-hover:bg-white p-2 group-hover:-translate-y-3 transition duration-500">
            <h className="text-yellow-500 font-semibold grid ">APRIL 21,2022</h>
            <h className="text-slate-800 font-semibold ">PU AMIN, PU RIZ DILANTIK SEBAGAI PENSYARAH YEG ACADEMY - UTUSAN MALAYSIA</h>
            </a>
            </div>
        </card8>
        </div>
      </div>
      
    </section12>
    <div className="hidden lg:py-10 md:[height:80px]"></div>    
    <div>
      <Footer/>
    </div>
    
    
    
    </main>
    
    </html>
    </>
    
  )
}

