import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"

function dhumywbl() {
  return (
    <main>
      <title>YEG Academy - diploma wbl</title>
      {/* <nav className="hidden lg:block sticky top-0 ">
        <Navbar/>
    </nav>
      <nav>
    <div className="lg:hidden">
        <Sidebar/>
    </div>
    </nav> */}
      
      <section1>
      <div className="flex justify-center">
                <Image
                    className="rounded-sm "
                    src="/dhumy.jpg"
                    alt="dhumy"
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
              <h className="font-semibold">DIPLOMA WORK BASED-LEARNING</h>
              <h>Pengalaman Membentuk Profesional Unggul</h>
            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Program Diploma Pengurusan Haji dan Umrah dengan konsep Work-based Learning menawarkan pelajar nilai pengalaman yang tak ternilai. Melalui kolaborasi dengan tenaga kerja industri berpengalaman, pelajar bukan hanya memperoleh pemahaman teori yang kukuh, tetapi juga mengaplikasikan pengetahuan tersebut dalam lingkungan kerja sebenar. Dengan struktur program yang melibatkan 12 bulan pembelajaran teori di dalam kelas dan 18 bulan latihan industri, pelajar diberi peluang untuk merasai dunia sebenar pengurusan Haji dan Umrah.</h>
            </div>
            
            
            <div className="grid space-y-2">
              <h className="">Keistimewaan tambahan termasuk pembayaran gaji penuh bakal memberikan pengalaman holistik yang mempersiapkan mereka untuk mencapai kecemerlangan dalam industri yang dinamik ini. Ini bukan sekadar program pendidikan, tetapi suatu pengalaman hidup yang membentuk dan mempersiapkan pelajar untuk mencapai kejayaan sejati dalam bidang pengurusan Haji dan Umrah. Ia turut mendapat akreditasi sepenuhnya oleh Agensi Kelayakan Malaysia (MQA). Kami menawarkan program Diploma yang menjadi pilihan ramai iaitu:</h>
              <li className="px-4">Diploma Pengurusan Haji & Umrah -WBL (MQA/FA 11377)</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan</h>
              <li className="px-4">Dermasiswa Yuran Pengajian</li>
              <li className="px-4">Percuma Kelas Intensif untuk Bahasa Melayu atau Bahasa Inggeris</li>
              <li className="px-4">Tempat Latihan Industri bersama Rakan Industri Program Diploma Pengurusan Haji dan Umrah (DHUMY)</li>
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

export default dhumywbl