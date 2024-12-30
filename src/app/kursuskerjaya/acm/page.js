import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from '@/components/Contactus'

function acm() {
  return (
    <>
      

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
                    src="/acm.jpg"
                    alt="acm"
                    width="900"
                    height="200"
                    style={{
                    objectFit:"contain",
                    }}
                />
          </div>
        <div className="py-4 grid grid-cols-1  px-6">
          
          <div className=" p-4">
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">PROGRAM KERJAYA</h>
              <h> Sekilas Tentang DUNIA PENERBANGAN</h>
            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Penerbangan adalah dunia yang menakjubkan, Ia adalah dunia yang penuh dengan keajaiban, kemajuan teknologi, dan peluang tak terbatas. Di sini, kita tidak hanya mengejar impian, kita akan merealisasikan impian anda hingga menjadi nyata.</h>
            </div>
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
              <h className="">Program persediaan ini bertujuan untuk membentuk 
                  dan memupuk kemahiran yang diperlukan oleh
                  individu yang ingin menyertai industri penerbangan.</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Kami telah menyediakan kursus persediaan untuk 
                  membolehkan mereka mengejar ilmu penerbangan. 
                  Beberapa kursus yang kami tawarkan termasuk:</h>
              <li className="px-4">Sijil Profesional Pramugara, Pramugari & Pegawai Perkhidmatan Pelanggan Selama 3 bulan</li>
              <li className="px-4">Sijil Profesional Pramugara, Pramugari & Pegawai Perkhidmatan Pelanggan Selama 1 bulan</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan Peroleh</h>
              <li className="px-4">Pemajuan Kerjaya yang Jelas</li>
              <li className="px-4">Laluan Pantas untuk Mencapai Pendapatan yang Tinggi</li>
              <li className="px-4">Peluang Bekerja dalam Syarikat Multinasional</li>
              <li className="px-4">Pembelajaran daripada Pakar Industri dengan Pengalaman Lebih dari 20 Tahun</li>
              <li className="px-4"> Sokongan Penempatan Pekerjaan</li>
              <li className="px-4">Perkhidmatan Perundingan Percuma daripada Pakar Industri</li>
              <li className="px-4"> Makanan & Minuman Disediakan Semasa Latihan</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Berumur 18 hingga 35 Tahun</li>
              <li className="px-4">Lulus Sijil Pelajaran Malaysia dengan sekurang-kurangnya lulus Sejarah dan Bahasa Melayu</li>
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
        <div className="hidden  md:grid lg:grid grid-cols-2 gap-5 p-6">
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
    </>
  )
}

export default acm