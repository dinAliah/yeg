'use client'
import Image from "next/image"
import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"

export default function article() {
  return (
    <main>        
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container pt-6">
            <div className="space-y-4 p-4 container">
              <div>
                <h className="text-base text-red-500 font-bold">Tawaran Sambung Belajar</h>
              </div>
              <div>
                <h className="font-serif font-bold text-2xl lg:text-5xl">Kursus Diploma Terbaik di Malaysia: Peluang Pendidikan dan Kerjaya Unggul</h>
              </div>
              <div className="grid">
                <h className="text-sm">by Ain Firdaus</h>
                <h className="text-sm">Jan 10, 2024 at 11:00 AM</h>
              </div>
            </div>
            <div className="">
            <div className="max-w-full lg:px-3 justify-center grid">
              <div className="">
              <Image 
              className=""
              src="/newss11.jpg"
              alt="suaphomeless"
              width="850"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
              </div>
              <div>
                <h className="font-serif text-sm italic">Pengarah YEG Academy beramah mesra bersama para guru semasa menganjurkan Program Inovatif Pendidikan di Mahsa University Malaysia</h>
              </div>
            </div>
            </div>
          </div>
        </section>
        <div className="py-6"></div>
        <section>
          <div className="flex justify-center w-full ">
          <div className="container lg:w-2/3  grid space-y-8 py-8">
            <h className=" text-black font-sans">Kursus diploma adalah pilihan terbaik untuk pelajar yang ingin membina asas kerjaya yang kukuh. Di Malaysia, pelbagai program diploma yang diiktiraf MQA menawarkan pendidikan berkualiti tinggi, direka khusus untuk memenuhi keperluan industri yang pelbagai. Kursus ini menjadi pilihan utama bagi lepasan SPM yang ingin meneroka pelbagai bidang kerjaya dan membina masa depan yang cerah.</h>
            <h className="text-black font-sans">Salah satu kelebihan utama kursus diploma ialah pendekatannya yang seimbang antara teori dan praktikal. Pelajar tidak hanya belajar konsep, tetapi juga diberi peluang untuk mengaplikasikan pengetahuan mereka melalui latihan industri. Pengalaman ini memberi nilai tambah kepada graduan, menjadikan mereka lebih bersedia untuk memasuki dunia pekerjaan. Selain itu, pelajar juga akan belajar kemahiran insaniah seperti komunikasi, kepimpinan, dan penyelesaian masalah yang sangat dihargai oleh majikan.</h>
          </div>
          </div>
        </section>
        <section>
          <div className="grid justify-center py-8">
          <div className="w-fit lg:w-[900px]">
            <video
              controls
              autoPlay
              className="">
              <source src="/yegintro.mp4" type="video/mp4" />
            </video>
          </div>
          </div>
        </section>
        <div className="flex justify-center py-4">
        <div className="container lg:w-2/3 grid space-y-8">
          <h className="font-sans ">Di YEG Academy, kami menyediakan pelbagai program diploma yang direka untuk memenuhi permintaan pasaran kerja yang semakin berkembang. Daripada minyak dan gas kepada penerbangan serta maritim, setiap program disesuaikan untuk melahirkan graduan yang kompeten dan berkebolehan tinggi. Semua kursus kami diiktiraf oleh MQA, memberikan pelajar keyakinan tentang kualiti pendidikan yang diterima. Kami turut menawarkan sesi bimbingan kerjaya untuk membantu pelajar mengenal pasti peluang pekerjaan yang sesuai dengan kelayakan mereka.</h>
          <h className="font-sans ">Tambahan pula, YEG Academy menawarkan kemudahan pembelajaran terkini yang memastikan pengalaman pembelajaran yang menyeluruh. Dengan makmal moden, perpustakaan digital, dan sokongan daripada pensyarah berpengalaman, pelajar dapat belajar dalam persekitaran yang kondusif. Kami juga menyediakan peluang biasiswa untuk pelajar cemerlang, membantu meringankan beban kewangan dan membolehkan mereka memberi tumpuan sepenuhnya kepada pelajaran.</h>
          <h className="font-sans ">Jika anda sedang mencari kursus diploma terbaik di Malaysia, YEG Academy adalah pilihan yang tepat. Sertailah kami hari ini untuk memulakan perjalanan pendidikan anda ke arah kerjaya yang gemilang. Jangan lepaskan peluang untuk melangkah ke masa depan yang lebih cerah dengan pendidikan diploma yang diiktiraf dan berkualiti tinggi. Untuk maklumat lanjut, hubungi kami atau lawati laman web rasmi kami di
            <a href ="https://www.yegmy.com/"><h className="text-blue-600"> YEG Academy</h></a>
            
          </h>
        </div>
        </div>
    <div>
      <Footer/>
    </div>
    </main>
  )
}

