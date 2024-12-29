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
                <h className="font-serif font-bold text-2xl lg:text-5xl">Kursus Diploma Terbaik di Malaysia 2025: Pilihan No.1 untuk Pendidikan dan Kerjaya Gemilang</h>
              </div>
              <div className="grid">
                <h className="text-sm">by Ain Firdaus</h>
                <h className="text-sm">Jan 19, 2024 at 11:00 AM</h>
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
            <h className=" text-black font-sans">Apakah anda sedang mencari kursus diploma terbaik di Malaysia untuk melanjutkan pelajaran dan memulakan kerjaya impian anda? Di Malaysia, terdapat pelbagai pilihan kursus diploma yang diiktiraf dan direka khas untuk memenuhi keperluan industri yang berkembang pesat. Artikel ini akan membantu anda memahami pilihan terbaik yang tersedia serta faktor penting dalam memilih kursus diploma.</h>
            <h className="text-black font-sans">Kursus diploma merupakan pilihan yang popular kerana tempoh pengajiannya yang singkat, kos yang lebih berpatutan, dan peluang pekerjaan yang lebih cepat. Dengan tempoh pengajian sekitar 2 hingga 3 tahun, pelajar dapat memperoleh kemahiran praktikal yang relevan dengan keperluan industri. Selain itu, kursus diploma juga menjadi jambatan untuk melanjutkan pelajaran ke peringkat lebih tinggi seperti ijazah.</h>
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
          <h className="font-sans ">Antara kursus diploma yang popular di Malaysia termasuk Diploma Pengurusan Perniagaan, Kejuruteraan, Teknologi Maklumat (IT), Pengurusan Haji dan Umrah (DHUMY), serta Seni Kulinari. Kursus ini ditawarkan oleh institusi terkemuka seperti Universiti Teknologi MARA (UiTM), Politeknik Malaysia, Asia Pacific University (APU), dan YEG Academy. Setiap kursus ini menawarkan peluang kerjaya yang luas seperti menjadi pengurus pemasaran, juruteknik kejuruteraan, pakar IT, atau chef profesional.</h>
          <h className="font-sans ">Memilih kursus diploma yang tepat memerlukan anda mengenali minat dan matlamat kerjaya anda. Pastikan juga kursus tersebut diiktiraf oleh Agensi Kelayakan Malaysia (MQA) untuk memastikan kelayakannya diterima oleh majikan dan institusi lain. Faktor lain yang perlu dipertimbangkan termasuk lokasi institusi, kos pengajian, dan reputasi institusi dalam bidang kursus yang dipilih.</h>
          <h className="font-sans ">Dengan pelbagai pilihan yang tersedia, Malaysia menawarkan kursus diploma terbaik yang sesuai untuk setiap minat dan keperluan industri. Melalui panduan ini, anda dapat membuat keputusan yang tepat dan memulakan perjalanan ke arah kerjaya yang cemerlang. Untuk maklumat lanjut, anda boleh menghubungi institusi pilihan anda atau melayari laman web mereka. Untuk maklumat lanjut, hubungi kami atau lawati laman web rasmi kami di
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

