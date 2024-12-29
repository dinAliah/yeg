import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"


function dtmmea() {
  return (
    <main>
      <title>YEG Academy - Program Diploma</title>
      <section1>
      <div className="flex justify-center">
      <Image
            className="rounded-sm"
            src="/acm.jpg"
            alt="acm"
            width="900"
            height="200"
            style={{
            objectFit:"contain",
            }}
        />
          </div>
        <div className="py-4 grid grid-cols-1 px-6">
          <div className=" p-4">
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">DIPLOMA PENGURUSAN PELANCONGAN</h>
              <h>Melangkah Lebih Jauh dengan Kombinasi Kemahiran Hebat</h>
            </div>
          <div className="space-y-5">
            <div className="grid justify-center space-y-2">
              <h className="text-justify">Program ini adalah Diploma Pengurusan Pelancongan yang ditambah dengan Sijil Kecekapan Penerbangan. Diploma ini memberikan pelajar pengetahuan mendalam dalam pengurusan pelancongan, merangkumi aspek-aspek seperti pemasaran pelancongan dan perkhidmatan pelanggan. Ia turut memberi penekanan terhadap pemahaman konsep pelancongan, kebudayaan, dan aspek-aspek pengurusan yang berkaitan. Sementara itu, Sijil Kecekapan Penerbangan menyediakan latihan khusus dalam operasi penerbangan dan pelbagai kemahiran berkaitan industri penerbangan.</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan kombinasi ini, pelajar tidak hanya akan memahami strategi pengurusan dalam industri pelancongan, tetapi juga akan memiliki kecekapan dalam aspek penerbangan seperti keselamatan, logistik, dan peraturan penerbangan. Program ini bertujuan untuk melahirkan graduan yang komprehensif dan berdaya saing dalam dua sektor penting yang dinamik dan berkembang pesat ini. Kemahiran ini turut membuka lebih banyak peluang kerjaya yang meluas dalam dua industri sekaligus. Kami menawarkan program Diploma yang menjadi pilihan ramai iaitu:</h>
              <li className="px-4">Diploma Pengurusan Perhotelan -WBL </li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan</h>
              <li className="px-4">Dermasiswa bernilai RM 2500</li>
              <li className="px-4">Percuma Sijil Kemahiran Industri (SKiN) bernilai RM 8000</li>
              <li className="px-4">Elaun program Work Based-Learning (WBL) sebanyak RM 500 hingga RM 900</li>
              <li className="px-4">Latihan Industri Disediakan</li>
              <li className="px-4">Bantuan Penempatan Kerjaya</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Lulus Sijil Pelajaran Malaysia (Bahasa Malaysia & Sejarah)</li>
              <li className="px-4">Sekurang-kurangnya mempunyai 3 kepujian dalam mana-mana subjek</li>
            </div>
            </div>
          </div>
        </div>
      </section1>
      
      <div className="py-8 lg:py-10 md:[height:80px]"></div>
      <Contactus/>
      <div className="py-8 lg:py-10 md:[height:80px]"></div>

      <section2>
        <div className="hidden lg:grid-cols-3 md:grid grid-cols-3 gap-6 px-6">
          <card1 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">1</h>
              <h>Program-program yang dipilih selaras dengan Dasar Ekonomi Digital Negara.</h>
            </div>
          </card1>
          <card2 className="bg-slate-200 p-4">
            <div className="flex ">
              <h className="text-9xl font-extrabold">2</h>
              <h>Berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</h>
            </div>
          </card2>
          <card3 className="bg-slate-200 p-4">
            <div className="flex ">
              <h className="text-9xl font-extrabold">3</h>
              <h>Bidang-bidang yang ditawarkan mengikut pasaran kerja terkini.</h>
            </div>
          </card3>
          
        </div>
        <div className="hidden  md:grid grid-cols-2 lg:grid grid-cols-2 gap-5 p-6">
        <card4 className="bg-slate-200 p-4">
            <div className="flex ">
              <h className="text-9xl font-extrabold">4</h>
              <h>Personaliti dan potensi pelajar diambil kira dengan bidang kerjaya yang dipilih.</h>
            </div>
          </card4>
          <card5 className="bg-slate-200 p-4">
            <div className="flex">
              <h className="text-9xl font-extrabold">5</h>
              <h>Tenaga pengajar yang terdiri dari pakar industri masing-masing.</h>
            </div>
          </card5>
        </div>
      </section2>
      <div>
      <Footer/>
    </div>
    </main>
  )
}

export default dtmmea