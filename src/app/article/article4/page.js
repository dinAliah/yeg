'use client'
import Image from "next/image"
import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"

export default function article() {
  return (
    <main>
        <title>YEG Academy - article 4</title>
    <section1 className="hidden">
        <div className="grid grid-cols-3 gap-6">
            <div className=" col-span-2 w-full ">
                <div className="flex justify-center py-4">
                <input type="Search" 
                    placeholder="Search Article"
                    className="w-1/2 h-8 rounded-md border px-4">
                </input>
                </div>
                <div className=" w-full flex justify-center pl-8 ">
                    <div className="w-full h-full ">
                    <video
                    height={400}
                        controls
                        aautoPlay  // Add this attribute for autoplay
                        className="rounded-md"
                        
                    >
                        <source src="yegintro.mp4" type="video/mp4" />
                    </video>
                </div>
                </div>
                <div className=" w-full flex justify-center">
                    <div className=" w-3/4 py-3">
                    <span className="text-2xl font-bold">podcast episod-1 | YEG Academy</span>
                    </div>
                    
                </div>
            </div>
            <div className="col-span-1 ">
                <div className=" grid justify-center w-full space-y-6 py-16">
                <card1 className="w-full  flex">
                    <div className="">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/carousel1.jpg"
                        alt="carousel1"
                        width="200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="grid px-4 ">
                    <span className="font-semibold">perasmian SPHU YEG Academy</span>
                    <span className="text-gray-300 font-normal text-xs">March 23</span>
                    </div>
                </card1>
                <card2 className=" w-full flex">
                    <div className="">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/carousel2.jpg"
                        alt="carousel2"
                        width="200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="grid px-4 ">
                    <span className="font-semibold">perasmian SPHU YEG Academy</span>
                    <span className="text-gray-300 font-normal text-xs">March 23</span>
                    </div>
                </card2>
                <card3 className=" w-full flex">
                    <div className="">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/carousel3.jpg"
                        alt="carousel3"
                        width="200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="grid px-4 ">
                    <span className="font-semibold">perasmian SPHU YEG Academy</span>
                    <span className="text-gray-300 font-normal text-xs">March 23</span>
                    </div>
                </card3>
                <card4 className="w-full flex">
                    <div className="">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/carousel4.jpg"
                        alt="carousel4"
                        width="200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="grid px-4 ">
                    <span className="font-semibold">perasmian SPHU YEG Academy</span>
                    <span className="text-gray-300 font-normal text-xs">March 23</span>
                    </div>
                </card4>
                <card5 className=" w-full flex">
                    <div className="w-">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/carousel5.jpg"
                        alt="carousel5"
                        width="200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="grid px-4 ">
                    <span className="font-semibold">perasmian SPHU YEG Academy</span>
                    <span className="text-gray-300 font-normal text-xs">March 23</span>
                    </div>
                </card5>
               
                </div>
                
            </div>
            
        </div>
    </section1>
   
    <section3>
        <div className="px-4 lg:px-28">
            <div className="flex justify-center">
        <div className="group w-full h-full grid justify-center ">
        <p className="text-2xl text-slate-700  font-semibold font-sans text-center p-10 leading-snug tracking-wide">
        BIDANG SAMBUNG BELAJAR DENGAN
          <span className="text-slate-700 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          PERMINTAAN PEKERJAAN TERKINI</span>
        </p>
      </div>
      </div>
      <div className="">
        <span>Ramai dikalangan anak-anak muda mahupun mereka yang sudah berpengalaman dalam dunia
pekerjaan mencari-cari maklumat berkenaan permintaan pekerjaan terkini. Dengan
perkembangan teknologi pada hari ini, pelbagai pekerjaan semakin hilang dan turut diganti
dengan kemudahan teknologi kecerdasan buatan (AI). Berikutan dengan permasalahan
ekonomi yang semakin membimbangkan, orang ramai turut cenderung untuk memilih pekerjaan
yang membuahkan hasil serta merta. Oleh itu, ramai golongan muda yang tidak berminat untuk
sambung belajar dan beralih ke sektor ekonomi gig, e-hailing dan sektor pengilangan.</span>
      </div>
      <div className="w-full flex justify-center py-8">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/article1(1).svg"
                        alt="article1"
                        width="1200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="pb-10">
        <span>Golongan remaja yang tidak berminat untuk menyambung pengajian sehingga ke peringkat
            profesional dapat memberi impak kepada usaha mencapai 35 peratus tenaga kerja
            berkemahiran tinggi dalam sektor ekonomi menjelang 2030. Sehubungan dengan itu, bidang
            sambung belajar yang mempunyai permintaan pekerjaan terkini dapat memberi peluang
            pekerjaan yang relevan dengan kadar gaji yang memberangsangkan. Dalam konteks ini,
            memahami permintaan pekerjaan terkini bukan hanya suatu keharusan, tetapi juga kunci untuk
            membuka pintu menuju karier yang berjaya.</span>
      </div>
      <div className="px-3 lg:px-8">
        <h className="font-bold underline">6 Contoh Permintaan Pekerjaan Terkini:</h>
      </div>
      <div className="px-3 lg:px-8 grid space-y-6">
        <h className="font-semibold">1. Pengurusan Haji dan Umrah:</h>
        <h className="px-3 lg:px-8 ">Dengan pertumbuhan terus-menerus dalam sektor pelancongan, terutamanya dalam
            pengurusan Haji dan Umrah, permintaan pekerjaan terkini dalam bidang ini semakin
            meningkat. Hal ini dapat dipastikan dengan perancangan masa depan pihak kerajaan
            yang ingin mewujudkan hub Umrah sekaligus penguatkuasaan beberapa syarat tertentu
            dan mengawal selia semula Akta Industri Pelancongan 1992 yang memerlukan
            sejumlah tenaga kerja mahir.</h>
      </div>
      <div className="w-full flex justify-center py-8">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/article1(2).svg"
                        alt="article2"
                        width="1200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="px-3 lg:px-8 grid space-y-6 pt-6">
        <h className="font-semibold">2. Kejururawatan:</h>
        <h className="px-3 lg:px-8 ">Seiring dengan meningkatnya kesedaran akan kepentingan kesihatan, permintaan
            pekerjaan di bidang kejururawatan terus tumbuh dan diperlukan terutamanya di hospital
            swasta. Menurut sebuah tinjauan yang dibuat oleh Persatuan Hospital Swasta Malaysia
            (APHM) pada November 2022, hasil maklum balas daripada 103 hospital mendapati
            Malaysia memerlukan kira-kira 9,224 jururawat tambahan pada tahun ini hingga 2025.
            Hal ini menjadikan kerjaya jururawat sebagai salah satu permintaan pekerjaan terkini
            yang tinggi.</h>
      </div>
      <div className="w-full flex justify-center px-3 lg:px-8">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/article1(3).svg"
                        alt="article3"
                        width="1200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="px-3 lg:px-8 grid space-y-6 pt-6">
        <h className="font-semibold">3. Kejuruteraan Penerbangan:</h>
        <h className="px-3 lg:px-8 ">Industri penerbangan dijangka terus berkembang seperti kenyataan yang dikeluarkan
            oleh IATA iaitu hasil penumpang pada 2024 bakal meningkat sebanyak 1.8 peratus
            berbanding 2023. Selain itu, EXCO pelaburan, perdagangan dan mobiliti turut
            menjelaskan bahawa permintaan kerjaya terkini bagi negara memerlukan ramai pekerja
            mahir dalam subsektor penerbangan seperti penyelenggaraan, pembaikan dan baik
            pulih (MRO), pembuatan aero, persepaduan sistem, rekaan dan kejuruteraan serta
            pendidikan.</h>
      </div>
      <div className="w-full flex justify-center py-8">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/article1(4).svg"
                        alt="article4"
                        width="1200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="px-3 lg:px-8 grid space-y-6 pt-6">
        <h className="font-semibold">4. Jurugegas dan Juruelektrik (bidang oil and gas):</h>
        <h className="px-3 lg:px-8 ">Terdapat permintaan yang tinggi untuk jurugegas dan juruelektrik dalam industri minyak
            dan gas untuk menyelenggara dan memperbaiki peralatan serta sistem elektrikal.
            Peningkatan aktiviti eksplorasi dan produksi minyak serta gas menyebabkan
            perusahaan-perusahaan mencari tenaga pakar yang dapat menjalankan tugas-tugas
            teknikal dengan kecekapan semakin meningkat selaras dengan permintaan pekerjaan
            terkini.</h>
      </div>
      <div className="w-full flex justify-center px-3 lg:px-8">
                <Image
                    id="image1"
                        className="rounded-md"
                        src="/article1(5).svg"
                        alt="article5"
                        width="1200"
                        height="250"
                        style={{
                        objectFit:"fill",
                        }}
                    />
                    </div>
                    <div className="px-3 lg:px-8 grid space-y-6 pt-6">
        <h className="font-semibold">5. Teknologi Maklumat dan Komunikasi (ICT):</h>
        <h className="px-3 lg:px-8">Permintaan untuk pakar ICT terkini terus meningkat seiring dengan peralihan ke arah
            ekonomi digital. Keperluan untuk mengurus dan melindungi data, pengembangan
            perisian, dan kecekapan dalam teknologi terkini seperti kecerdasan buatan dan
            kejuruteraan data menjadi kriteria utama di sebilangan besar industri. Oleh itu,
            permintaan kerjaya terkini menunjukkan mereka yang bekerjaya dalam bidang ICT
            adalah semakin diperlukan.</h>
      </div>
      <div className="px-3 lg:px-8 grid space-y-6 pt-6">
        <h className="font-semibold">6. Pemasaran Digital:</h>
        <h className="px-3 lg:px-8">Perkembangan teknologi maklumat dan komunikasi adalah selari dengan keperluan
            aktiviti pemasaran secara digital. Para majikan memerlukan mereka yang bukan sekadar
            peka IT tetapi juga mahir dalam selok belok kemajuannya. Hal ini demikian menjadikan
            kerjaya sebagai pemasar digital sebagai salah satu permintaan kerjaya terkini yang
            semakin dikehendaki..</h>
      </div>
      <div className="py-8">
        <h className="font-bold underline">Cara untuk Mendapatkan Tempat dalam Permintaan Pekerjaan Terkini</h>
      </div>
      <div className="px-3 lg:px-8 grid space-y-6">
        <h className="px-3 lg:px-8">Untuk mendapatkan peluang dalam pasaran permintaan pekerjaan terkini yang dinamik pada
            hari ini, ‘upskilling’ dan ‘reskilling’ menjadi salah satu elemen penting bagi mereka yang sudah
            bekerja ataupun bercadang untuk memulakan karier. Salah satu langkah yang perlu diambil
            adalah dengan mengikuti kursus-kursus yang relevan, mendapatkan sijil dan kelayakan
            tambahan, dan terlibat dalam sesi pengajaran dan pembelajaran bersama pakar-pakar industri.</h>
            <h>Berikut adalah kursus-kursus dan bidang sambung belajar yang boleh anda ikuti:</h>
      </div>
      <div className="px-3 lg:px-8 grid space-y-6 pt-6">
      <h className="font-bold">Kursus -kursus kerjaya:</h>
        <div className="grid space-y-2 underline font-serif">
        <a href="/" className="px-4 ">Sijil Profesional Haji dan Umrah</a>
        <a href="/" className="px-4 ">Sijil Persediaan Khidmat Pelanggan</a>
        <a href="/" className="px-4 ">Sijil Persediaan Krew Kabin</a>
        <a href="/" className="px-4 ">Sijil Persediaan Pengendalian Darat</a>
        <a href="/" className="px-4 ">Sijil Profesional Pemasangan Paip Gas</a>
        <a href="/" className="px-4 ">Sijil Profesional Paip dan Jurugegas</a>
        </div>
      </div>
      <div className="px-3 lg:px-8 grid space-y-6 pt-6">
      <h className="font-bold">Program-program diploma sambung belajar:</h>
        <div className="grid space-y-2 underline font-serif">
        <a href="/" className="px-4 ">Diploma Pengurusan Haji dan Umrah</a>
        <a href="/" className="px-4 ">Diploma Kejururawatan</a>
        <a href="/" className="px-4 ">Diploma Pengurusan Kargo Udara</a>
        <a href="/" className="px-4 ">Diploma Pengurusan Operasi Penerbangan</a>
        <a href="/" className="px-4 ">Diploma Penyelenggaraan Pesawat Teknologi</a>
        </div>
      </div>
        </div>
    </section3>
    <div>
      <Footer/>
    </div>
    </main>
  )
}

