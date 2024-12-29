import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Contactus from '@/components/Contactus'


function dnur() {
  return (
    <main>
      <title>YEG Academy - Program Diploma</title>
      <section1>
      <div className="flex justify-center">
      <Image
                    className="rounded-sm"
                    src="/dnur.jpg"
                    alt="dnur"
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
              <h className="font-semibold">DIPLOMA IN NURSING</h>
              <h>Dalam zaman inovasi pendidikan, penekanan terhadap pengembangan kemahiran dalam industri kejururawatan semakin mendesak. Program diploma kejururawatan menawarkan pengalaman terbaik dengan melibatkan pakar industri dan modul inovatif yang memenuhi keperluan semasa. Dengan akreditasi sepenuhnya daripada Agensi Kelayakan Malaysia (MQA), program ini membuka peluang yang meluas bagi lulusan dalam bidang kejururawatan dan perkhidmatan kesihatan. Mereka dipersiapkan sebagai kejururawatan yang terampil dan profesional yang sangat diperlukan oleh industri, membolehkan mereka memberikan sumbangan dalam penjagaan kesihatan di dalam dan luar negara.</h>
            </div>
          <div className="space-y-5">
            <div className="grid justify-center space-y-2">
              <h className="text-justify">Program Diploma Kejururawatan memberikan penekanan kepada pengalaman pembelajaran yang memenuhi keperluan semasa para pelajar. Oleh itu, pelajar juga dapat memanfaatkan fasiliti makmal kejururawatan yang dilengkapi dengan peralatan terkini untuk pengalaman praktikal yang sebanding dengan keadaan sebenar di hospital. Dengan pusat latihan dan simulasi, pelajar dapat mengembangkan kemahiran praktikal mereka melalui latihan dalam skenario realistik. Kesemua fasiliti canggih ini membuktikan komitmen program untuk menyediakan persekitaran pembelajaran terbaik, memastikan para pelajar keluar sebagai kejururawatan yang mahir dan yakin untuk menghadapi cabaran dalam industri kesihatan yang sentiasa berkembang.</h>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus ini anda akan:</h>
              <li className="px-4">Jaminan penempatan di hospital yang terpilih (Dengan Terma & Syarat)</li>
              <li className="px-4">Pakaian Seragam Disediakan dan Percuma</li>
              <li className="px-4">Tempat tinggal dan fasiliti disediakan dalam kawasan Mahsa University</li>
              <li className="px-4">Dermasiswa Yuran Pengajian sebanyak RM 5700 (Yuran pengajian yg rendah jika berdaftar melalui program under YEG)</li>
              <li className="px-4">Diploma yang Diiktiraf oleh MQA</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">Lulus SPM atau *setaraf dengan 5 kredit</li>
              <li className="px-4">Kredit wajib dalam:  Bahasa Melayu Matematik </li>
              <li className="px-4">Mana-mana satu daripada kredit berikut:Sains/ Biologi/ Kimia/ Fizik/ Sains Terapan</li>
              <li className="px-4">2 kredit untuk subjek yang lain</li>
              <li className="px-4">Mesti LULUS dalam Bahasa Inggeris</li>
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

export default dnur