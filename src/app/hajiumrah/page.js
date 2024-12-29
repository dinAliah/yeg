'use client'
import Image from "next/image"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import React, { useEffect, useState } from 'react'
import News from '@/components/fis/News.jsx'
import CountAnimate1 from '@/components/fis/CountAnimate1.jsx'
import CountAnimate2 from '@/components/fis/CountAnimate2.jsx'
import CountAnimate3 from '@/components/fis/CountAnimate3.jsx'
import CountAnimate4 from '@/components/fis/CountAnimate4.jsx'
import PercentFis from '@/components/fis/PercentFis'
import Table from '@/components/fis/Table'
import Slider from '@/components/fis/Slider'            

export default function App() {

    return (
        <main>
          {/* <section>
          <div className="sticky hidden lg:block top-0 z-10">
            <Navbar/>   
          </div>
          <div className="lg:hidden">
            <Sidebar/>
          </div>
          </section> */}
            <section>
            <div className="w-full h-full grid relative lg:py-28" style={{backgroundImage: 'url("/hajiumrahcover.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',   backgroundRepeat: 'no-repeat', opacity:'1'}}>
              <div className="grid  pl-40">
                <h className="text-4xl font-extrabold text-white">TANPA UPU, ANDA MASIH BERPELUANG</h>
                <h className="text-4xl font-extrabold text-white">UNTUK SAMBUNG BELAJAR DIPLOMA</h>
                <h className="text-4xl font-extrabold text-white">MUTAWWIF & MUSLIM TOUR</h>
                <h className="text-4xl font-extrabold text-white">DI UNIVERSITI AWAM</h>
              </div>
              <div className="grid py-8 pl-40">
                <h className="text-2xl text-white">Mari sertai diploma mutawwif yang diiktiraf oleh</h>
                <h className="text-2xl text-white">kerajaan Malaysia bersama kaim</h>
                <div className="py-8">
                  <button className=" z-0 bg-orange-600 rounded-full transition duration-150 ease-out hover:bg-orange-400">
                    <a href="/" className="flex pl-5 p-3">
                      <span className="text-black text-xl">Dapatkan maklumat lebih lanjut</span>
                      <svg
                        width="20"
                        height="28"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                          d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div> 
              </div>
            </section>
            <section>
                <div className="bg-black w-full">
                    <div className="p-8 flex justify-center">
                        <h className="text-white text-xl text-center leading-loose">PMD menawarkan Pengajian Diploma Mutawwif buat para graduan dan belia yang ingin menceburi bidang ini
                        walaupun anda masih belum mempunyai pengalaman di dalam dunia kerjaya.</h>
                    </div>
                </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
                <div className="container">
                    <div className="grid justify-center py-10 space-y-4">
                        <h className="text-slate-500 font-semibold text-2xl text-center">DIPLOMA KEMAHIRAN PENGURUSAN MUTAWWIF UMRAH DAN ZIARAH</h> 
                        <h className="text-slate-500 font-medium text-lg text-center">Siapakah yang sesuai mengambil jurusan ini?</h>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-auto p-4">                    
                        <card className="space-y-4 flex border p-2">
                          <div className="p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"><path fill="gray" d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path></svg>
                          </div>
                          <div className="space-y-3">
                          <h className="font-semibold text-slate-600">Siswazah Menganggur</h>
                          <h1 className="text-slate-700">Jika anda adalah siswazah tetapi masih belum lagi mempunyai kerjaya, anda seharusnya mencuba kerana dalam bidang ini pasarannya sangat luas dan khidmat mutawwif diperlukan sepanjang masa di seluruh dunia.</h1>
                          </div>
                        </card>                                         
                      <card className="space-y-4 flex border p-2">
                          <div className="p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"><path fill="gray" d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path></svg>
                          </div>
                          <div className="space-y-3">
                          <h className="font-semibold text-slate-600">Berjiwa Islamik</h>
                          <h1 className="text-slate-700">Setiap kali anda membaca kisah para rasul dan anbiya, anda terasa ingin melihat secara dekat lokasi peristiwa tersebut. Itulah petanda anda berjiwa Islamik. Memilih jurusan ini bertepatan dengan minat semulajadi anda.</h1>
                          </div>
                        </card>
                      <card className="space-y-4 flex border p-2">
                          <div className="p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"><path fill="gray" d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path></svg>
                          </div>
                          <div className="space-y-3">
                          <h className="font-semibold text-slate-600">Meminati Pelancongan</h>
                          <h1 className="text-slate-700">Jika anda meminati rancangan pelancongan di kaca televisyen, anda memang mempunyai bakat yang tepat dengan jurusan ini. Kini anda boleh menjadikan minat anda sebagai karier sekaligus peluang beribadah kepadaNya.</h1>
                          </div>
                        </card>
                    </div>
                </div>
            </section>
            <div className="py-2 md:py-3 lg:py-6 bg-white"></div>
            <section>
              <div className="container">
              <div className="justify-center w-full h-full grid lg:grid-cols-12 gap-2 md:col-span-2 p-4">
                <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
                    <video
                    controls
                    autoPlay  // Add this attribute for autoplay
                    className=""
                  ><source src="carousel14.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className=" w-auto grid lg:mx-auto md:mx-16 col-span-12 md:col-span-6 gap-6 lg:col-span-5 md:order-3 space-y-2">   
                  <div className="w-full h-full space-y-3 grid justify-center">
                    <p className="text-slate-600 text-xl font-light">Daftar sekarang sebagai Mutawwif Professional</p>
                    {/* <p className=" font-normal text-md text-slate-700 "><a className="border-b-2 border-yellow-600 font-bold" href="/">YEG Academy</a> adalah organisasi pendidikan di Malaysia yang menawarkan bidang pembelajaran dan kerjaya selari dengan permintaaan pasaran kerjaya pada masa kini. Sehubungan dengan itu, YEG Academy bertanggungjawab untuk memahami kekuatan, nilai dan keperluan khas setiap pelajar, sambil berusaha untuk memasukkan semua ahli keluarga dalam proses perancangan pendidikan. </p> */}
                    <p className="text-slate-700">Mari membina karier sebagai Mutawwif Professional & Muslim Tour Leader bersama kami. Kami menyediakan jurusan Diploma yang diiktiraf di peringkat antarabangsa dan yang pertama di dunia.</p>
                  </div>
                  <div className="">
                  <button className="bg-orange-600 rounded-full transition duration-150 ease-out hover:bg-orange-400">
                    <a href="/" className="flex p-3">
                    <p className="text-black">DAFTAR SEKARANG</p>
                    <svg width="20" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"></path>
                    </svg></a>
                  </button></div>
                </div>  
              </div>
              </div>            
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
            <div className="flex items-center px-8 lg:px-20">
              <div className="flex-grow border-b border-gray-300"></div>
                <h className="px-2 text-slate-400 text-sm">YEG Academy Media</h>
              <div className="flex-grow border-b border-gray-300"></div>
            </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <News/>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <div className="container">
                <div className=" flex-row-reverse justify-center w-full h-full grid lg:grid-cols-12 gap-2 md:col-span-2 space-y-2 p-4">
                <div className=" h-full grid lg:mx-auto md:mx-16 col-span-12 md:col-span-6 gap-6 lg:col-span-5 md:order-3"> 
                <video
                  controls
                  autoPlay  // Add this attribute for autoplay
                  className=""
                ><source src="carousel14.mp4" type="video/mp4"/>
                </video>  
                </div>
                <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
                <div className="w-full h-full space-y-6  grid justify-center">
                    <p className="text-slate-600 text-xl font-light">Daftar sekarang sebagai Mutawwif Professional</p>
                    {/* <p className=" font-normal text-md text-slate-700 "><a className="border-b-2 border-yellow-600 font-bold" href="/">YEG Academy</a> adalah organisasi pendidikan di Malaysia yang menawarkan bidang pembelajaran dan kerjaya selari dengan permintaaan pasaran kerjaya pada masa kini. Sehubungan dengan itu, YEG Academy bertanggungjawab untuk memahami kekuatan, nilai dan keperluan khas setiap pelajar, sambil berusaha untuk memasukkan semua ahli keluarga dalam proses perancangan pendidikan. </p> */}
                    <p className="text-slate-700">Mari membina karier sebagai Mutawwif Professional & Muslim Tour Leader bersama kami. Kami menyediakan jurusan Diploma yang diiktiraf di peringkat antarabangsa dan yang pertama di dunia.</p>
                    <div>
                    <button className=" bg-slate-300 rounded-full transition duration-150 ease-out hover:bg-orange-400">
                      <a href="/" className="flex p-3">
                      <p className="text-black">DAFTAR SEKARANG</p>
                      <svg width="20" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"></path>
                      </svg></a>
                    </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
            <div className="flex items-center px-8 lg:px-2">
              <div className="flex-grow border-b border-gray-300"></div>
                <h className="px-2 text-slate-400 text-sm">Pencapaian YEG Academy</h>
              <div className="flex-grow border-b border-gray-300"></div>
            </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <div className="w-full">
              <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
                <div><CountAnimate1/></div>
                <div><CountAnimate2/></div>
                <div><CountAnimate3/></div>
                <div><CountAnimate4/></div>
              </div>
              </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <div className="w-full  bg-cyan-400 p-4">
                <div className="flex justify-center space-x-9 p-8 container mx-auto px-4">
                  <div className="flex items-center">
                    <p className="text-2xl text-white">Pengambilan untuk sesi 2024 kini telah dibuka!</p>
                  </div>
                  <button className=" bg-slate-300 rounded-full transition duration-150 ease-out hover:bg-orange-400">
                      <a href="/" className="flex p-3">
                      <p className="text-black">DAFTAR SEKARANG</p>
                      <svg width="20" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"></path>
                      </svg></a>
                    </button>
                </div>
              </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div> 
            <section>
              <div className="flex-row-reverse flex grid-cols-2 w-full gap-5 p-3">
                <div className="w-auto h-full grid mx-9 lg:mx-auto md:mx-16 col-span-12 md:col-span-6 gap-6 lg:col-span-5 md:order-3  pl-4">
                  <h className="text-gray-400">Kenapa Semakin Ramai Memilih</h>
                  <h className="text-gray-500 text-3xl font-semibold">Bidang Mutawwif Professional</h>
                  <h className="text-gray-500">Persaingan bagi mendapatkan tempat dan membina karier pada hari ini adalah satu cabaran yang hebat dan harus dihadapi khususnya oleh para lepasan graduan dan belia.</h>
                  <h className="text-slate-500">Persaingan ini memerlukan anda untuk memilih sebuah bidang atau industri yang kurang persaingan tetapi pada masa yang sama menjanjikan karier yang lebih menjamin masa depan. Atas sebab tersebut maka semakin ramai yang memilih untuk menceburi bidang mutawwif. Rebutlah peluang ini sekarang!</h>
                </div>
                <div className="w-full h-full">
                  <PercentFis/>
                </div>
              </div>       
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div> 
            <section>
            <div className="flex items-center py-">
              <div className="flex-grow border-b border-gray-300"></div>
                <h className="px-2 text-slate-400 text-sm">Pencapaian YEG Academy</h>
              <div className="flex-grow border-b border-gray-300"></div>
            </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <div className="container">
              <div className="w-full">
                <div className="w-full grid justify-center font-light space-y-2 p-4">
                  <h className="text-2xl text-gray-500 flex justify-center">Maklumat Lengkap</h>
                  <h className="text-4xl text-gray-500 font-semibold">DIPLOMA MUTAWWIF</h>
                </div>
                <Table/>
              </div>
              </div>
            </section>
            <section>
              <div>
                <div className=""></div>
            </div>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <Slider/>
            </section>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section>
              <div className="container">
                <div className="grid-cols-2 gap-4 flex">
                  <div className="bg-red-300 w-full">
                    <div className="grid space-y-6">
                      <h className="font-light text-xl text-gray-500">Tentang Kami</h>
                      <h className="font-bold text-3xl text-gray-600">Fakulti Pengajian Antarabangsa (FIS) & YEG Academy</h>
                      <h className="text-gray-500">Fakulti Pengajian Antarabangsa merupakan salah satu fakulti di bawah Kolej  Antarabangsa Inovatif. Fakulti ini walau bagaimanapun diuruskan sepenuhnya oleh YEG  Academy. Sejak dari penubuhannya pada tahun 2020, kursus yang ditawarkan iaitu  Diploma Pengurusan Haji dan Umrah telah berjaya melahirkan 354 graduan; dengan  jumlah keseluruhan pelajar mencecah 1,000 orang</h>
                      <h className="text-gray-500">Pensyarah kanan fakulti kami terdiri daripada individu yang berpengalaman dalam bidang  komunikasi, hukum dan pengurusan haji dan umrah. Antaranya Sheikh Dr. Omar  Muhammad Kalash, Tuan Haji Badrul Sani, PU Riz dan PU Amin</h>
                    </div>
                  </div>
                  <div className="bg-green-300 w-full">asd</div>
                </div>
              </div>
            </section>





      </main>
    );
  };

