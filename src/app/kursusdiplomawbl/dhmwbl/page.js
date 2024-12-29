import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from "@/components/Contactus"


function dhmwbl() {
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
                    className="rounded-sm"
                    src="/kulinari.jpg"
                    alt="kulinari"
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
              <h>Pengurusan Perhotelan: Pengalaman dari Pakar di Dubai</h>
            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Jaminan pengalaman praktikal hampir 2 tahun dalam industri memberi graduan pengalaman yang luar biasa. Penempatan latihan industri di Dubai dengan permintaan tinggi membuka pintu peluang karier yang lebih menarik. Elaun praktikal antara RM1200 hingga RM2500 sebulan memberikan ganjaran sepadan untuk pembelajaran intensif dengan program Work Based-Learning. Tenaga pengajar dari kalangan pakar industri akan memastikan graduan menerima ilmu pengetahuan yang diperlukan sebelum bergelar pemain industri sendiri.</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Graduan bukan sahaja menguasai setiap kemahiran pengurusan perhotelan yang diperlukan, tetapi juga kemahiran komunikasi yang dicari oleh industri. Pelbagai peluang pekerjaan seperti pegawai pentadbiran hotel dan pelancongan, pegawai jualan dan pemasaran dan pelbagai lagi kerjaya yang dinamik menanti anda. Ia turut mendapat akreditasi sepenuhnya oleh Agensi Kelayakan Malaysia (MQA). Kami menawarkan program Diploma yang menjadi pilihan ramai iaitu:</h>
              <li className="px-4">Diploma Pengurusan Perhotelan -WBL (MQA/FA/ 843)</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan</h>
              <li className="px-4">Latihan Industri Bergaji Penuh (RM 1200 hingga RM 2500)</li>
              <li className="px-4">Dermasiswa Yuran Pengajian</li>
              <li className="px-4">Peluang Pekerjaan Tersedia Selepas Tamat Pengajian</li>
              <li className="px-4">Percuma Kelas Intensif untuk Bahasa Inggeris dan ACCA</li>
              <li className="px-4">Tempat Latihan Industri di Hotel-Hotel 5 Bintang</li>
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

export default dhmwbl