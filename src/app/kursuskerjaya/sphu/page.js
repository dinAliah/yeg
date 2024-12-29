import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"


function sphu() {
  return (
    <main>
      <title>YEG Academy - Kursus Kerjaya</title>

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
                    src="/coursehajiumrah.svg"
                    alt="coursehajiumrah"
                    width="900"
                    height="200"
                    style={{
                    objectFit:"contain",
                    }}
                />
          </div>
        <div className="py-4 grid grid-cols-1 max-w-7xl px-6">
          <div className=" p-4">
          <div className="py-4">
              <h className="font-bold">SIJIL PROFESIONAL HAJI DAN UMRAH (SPHU)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">PROGRAM KERJAYA</h>
              <h>Pengalaman Terbaik</h>
            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Perkembangan teknologi masa kini secara global turut mempengaruhi kemajuan pelbagai sektor dalam industri haji dan umrah. Ia memberi satu cabaran baru kepada para pemain industri untuk menyediakan pekerja-pekerja profesional terutamanya dari kalangan mutawwif dan mutawwifah untuk membimbing kenaikan jumlah jemaah haji saban tahun. Secara tidak langsung, ia turut membuka peluang kepada masyarakat untuk terlibat secara langsung dan tidak langsung dalam membuka peluang pekerjaan baru.</h>
            </div>
            <div className="grid justify-center space-y-2">
              <h className="text-justify">Program ini memberi pendedahan yang luas dan terperinci dalam merungkaikan ilmu pengurusan Haji dan Umrah. Jadi, kami menawarkan program yang dapat meningkatkan kemahiran diri secara holistik:</h>
              <li className="px-4">Sijil Profesional Haji dan Umrah</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan Peroleh</h>
              <li className="px-4">Menerima modul lengkap dan dipelajari secara atas talian</li>
              <li className="px-4">Dilatih oleh tenaga pengajar dari kalangan pemain industri berpengalaman </li>
              <li className="px-4">Diberi akses portal 24 jam selama 1-2 tahun</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Berumur 18 Tahun ke atas</li>
              <li className="px-4">Sihat tubuh badan</li>
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
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">2</h>
              <h>Berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</h>
            </div>
          </card2>
          <card3 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">3</h>
              <h>Bidang-bidang yang ditawarkan mengikut pasaran kerja terkini.</h>
            </div>
          </card3>
          
        </div>
        <div className="hidden  md:grid grid-cols-2 lg:grid grid-cols-2 gap-5 p-6">
        <card4 className="bg-slate-200 p-4">
            <div className="flex items-center">
              <h className="text-9xl font-extrabold">4</h>
              <h>Personaliti dan potensi pelajar diambil kira dengan bidang kerjaya yang dipilih.</h>
            </div>
          </card4>
          <card5 className="bg-slate-200 p-4">
            <div className="flex items-center">
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

export default sphu