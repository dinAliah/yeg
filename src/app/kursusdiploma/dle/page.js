import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from '@/components/Contactus'


function dle() {
  return (
    <main>
      <title>YEG Academy - Program Diploma</title>
      <section1>
      <div className="flex justify-center">
                <Image
                    className="rounded-sm "
                    src="/ppu.jpg"
                    alt="ppu"
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
              <h className="font-semibold">DIPLOMA PENGUATKUASAAN UNDANG-UNDANG</h>
              <h>Dalam era inovasi pendidikan, fokus terhadap pembangunan kemahiran dalam industri penguatkuasaan undang-undang semakin mendesak. Program diploma penguatkuasa undang-undang menawarkan pengalaman terbaik dengan melibatkan pakar industri dan modul inovatif yang memenuhi keperluan semasa. Dengan akreditasi sepenuhnya daripada Agensi Kelayakan Malaysia (MQA), program ini memberikan lulusan peluang yang luas dalam bidang penguatkuasaan undang-undang dan badan beruniform, mempersiapkan mereka sebagai pemimpin yang berkaliber dan profesional yang diperlukan oleh industri untuk berkhidmat dalam dan luar negara.</h>
            </div>
          <div className="space-y-5">
            <div className="grid justify-center space-y-2">
              <h className="text-justify"> Jika anda juga merasa tertarik dengan daya tarikan 
                  dunia penerbangan, dan anda mempunyai hasrat 
                  untuk menjelajahi dunia dari ketinggian, maka selamat 
                  datang ke dalam industri kami. Di sini, kami akan
                  membantu anda merealisasikan impian anda,
                  membentuk anda menjadi seorang pakar industri 
                  dalam bidang penerbangan, dan membawa anda ke 
                  puncak kejayaan di langit biru</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus ini anda akan:</h>
              <li className="px-4">Dermasiswa yuran pengajian</li>
              <li className="px-4">Silibus Diploma Berasaskan Bidang Kepolisan</li>
              <li className="px-4">Latihan Kawad dan Latihan Menembakl</li>
              <li className="px-4">Penempatan Latihan Industri di Jabatan Penguatkuasaan</li>
              <li className="px-4">Peluang kerjaya selepas tamat pengajian</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Akademik</li>
              <li className="px-4">Lulus SPM subjek Bahasa Melayu & Sejarah</li>
              <li className="px-4">Total 3 kredit mana-mana subjek</li>
              <li className="px-4">Lelaki - Berat:50kg 163cm</li>
              <li className="px-4">Perempuan - Berat:50kg 157cm</li>
              <li className="px-4">Penglihatan yang baik dan tidak rabun warna</li>
              <li className="px-4">BMI 19-26 (Berat badan yang ideal)</li>
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

export default dle