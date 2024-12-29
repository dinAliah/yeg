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
      <section1>
      <div className=" flex justify-center">
                <Image
                    className="rounded-sm"
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
          <div className="p-4">
            <div className="py-4">
              <h className="font-bold">DIPLOMA PENGURUSAN HAJI DAN UMRAH (DHUMY)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">DIPLOMA</h>
              <h>Pengalaman Pembelajaran Penuh Inspirasi</h>
            </div>
            <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Inovasi dalam dunia pendidikan menjadi satu keperluan pada masa kini. Dengan perkembangan luar biasa di sektor haji dan umrah, kaedah pembelajaran secara berstruktur dan peluang membina kerjaya sebagai pelopor di dalam industri ini dilihat sebagai satu peluang penting untuk diteliti. Menjalankan tugas dalam industri ini turut menjadi satu kerjaya yang semakin penting dan diperlukan kerana terdapat peningkatan jumlah jemaah haji dan umrah disamping kepentingan membimbing dan mempelajari pengurusan ibadah haji secara menyeluruh.</h>
            </div>
            <div className="grid justify-center space-y-2">
              <h className="text-justify">Program ini memberi peluang para pelajar untuk mendalami ilmu pengurusan haji dan umrah secara dekat dengan penglibatan pakar industri dan modul terbaik diinovasikan masa kini. Ia turut mendapat akreditasi sepenuhnya oleh Agensi Kelayakan Malaysia (MQA). Kami menawarkan program Diploma yang menjadi pilihan ramai iaitu:</h>
              <li className="px-4">Diploma Pengurusan Haji & Umrah (MQA/FA 11377)</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan </h>
              <li className="px-4">Praktikal 1 ke 3 bulan di Mekah dan Madinah</li>
              <li className="px-4">Para pengajar terdiri daripada tenaga pakar industri</li>
              <li className="px-4">Mendapat bantuan pendidikan pembelajaran </li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Berumur 18 Tahun hingga 27 Tahun </li>
              <li className="px-4">Lulus Sijil Pelajaran Malaysia (SPM) dengan sekurang-kurangnya 3 kredit</li>
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