import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Contactus from '@/components/Contactus'


function diploma1() {
  return (
    <main>
      <title>YEG Academy - Distance Online Learning</title>

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
              <h className="font-semibold">DIPLOMA PENTADBIRAN PERNIAGAAN</h>
              <h>PROGRAM DILOMA UNTUK NAIK PANGKAT</h>
            </div>
          <div className="space-y-5">
            <div className="flex justify-center">
              <h className="text-justify">Pendidikan di peringkat pengajian tinggi memberi sebuah pengalaman yang berbeza kepada seseorang sekaligus membantu untuk perkembangan pelbagai kemahiran tertentu seperti komunikasi dan kepimpinan. Selain mengetengahkan kelebihan program ini untuk seseorang penjawat awam atau swasta naik pangkat dalam kerjaya masing-masing dan meningkatkan pendapatan bulanan, YEG Academy dengan kerjasama Kolej Universiti Innovatif turut memberi kemudahan kepada para pencarum KWSP. Hal ini kerana, mereka tidak perlu membiayai bayaran yuran secara tunai tetapi 100% melalui pengeluaran KWSP</h>
            </div>
            <div className="grid justify-center space-y-2">
              <h className="text-justify"> Dengan teknologi masa kini, inovasi dalam sistem pendidikan telah membantu kepada kemudahan untuk mengakses kelas dan kandungan pembelajaran tersedia pada bila-bila masa melalui aplikasi mudah alih. Oleh sebab itu, struktur yuran pengajian yang lebih rendah jika dibandingkan dengan tawaran daripada pelbagai pusat-pusat pendidikan lain dapat ditawarkan kepada para penjawat awam dan swasta yang berminat untuk meningkatkan kebolehan sedia ada. </h>
            </div>
            
            <div className="grid space-y-2">
              <h className="">Jadi, kami menawarkan program yang dapat meningkatkan kemahiran diri secara holistik::</h>
              <li className="px-4">Diploma Pentadbiran Perniagaan</li>
            </div>
            <div className="grid space-y-2">
              <h className="">Dengan Kursus Ini, Anda Akan Peroleh</h>
              <li className="px-4">Percuma buku rujukan (E-Book) bernilai RM 4,500 (RM 150 x 30 subjek)</li>
              <li className="px-4">Masa pembelajaran yang fleksibel</li>
              <li className="px-4">Jaminan lulus (Tiada yuran tambahan sekiranya mengulangi mana-mana subjek yang gagal dalam tempoh 3 tahun)</li>
              
            </div>
            <div className="grid space-y-2">
              <h className="">Syarat-Syarat Kelayakan</h>
              <li className="px-4">SPM lulus dengan minimum 3 kredit</li>
              <li className="px-4">Sedang bekerja dalam sektor swasta atau kerajaan</li>
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
        <div className="hidden  md:grid grid-cols-2 lg:grid gap-5 p-6">
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
    </div>
    </main>
  )
}

export default diploma1