import React from 'react'
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

function page() {
  return (
    <>
    {/* <nav className="hidden lg:block sticky top-0 ">
    <Navbar />
    </nav>
    <nav>
    <div className="lg:hidden">
        <Sidebar />
    </div>
    </nav> */}
    <div className="flex grid-cols-2 gap-4">
        <div className="p-2">
        <div className="w-full shadow-md">
        <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Dron Teknologi</h>
              <h>Melangkah ke dunia dron, cabaran teknologi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Melangkah ke dalam kerjaya dalam industri teknologi dron membawa pengalaman yang menarik dengan peluang tanpa batas. Sudah semestinya pelatih akan merasai pengalaman-pengalaman yang mencabar kerana bidang ini termasuk dalam kerjaya berteknologi tinggi dan inovatif. Oleh itu, bekerjaya dalam industri ini mampu menawarkan gaji yang lumayan seiring dengan perkembangan kemahiran dan pengetahuan. Menyertai industri yang dinamik ini tidak hanya memberikan pengalaman kerja yang bermakna tetapi juga peluang untuk menyumbang kepada kemajuan global melalui penggunaan teknologi dron yang canggih dan lestari.</h>
              </div>
              {/* <div className="grid justify-start space-y-2">
                <h className="text-justify">:</h>
                <li className="px-4">Sijil Profesional Pemasangan Paip Gas</li>
                <li className="px-4">Sijil Profesional Paip dan Jurugegas</li>
                <li className="px-4">Sijil Profesional Kulinari</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat</h>
                <li className="px-4">Percuma Uniform PPE</li>
                <li className="px-4">NIOSH Oil & Gas Safety Passport (OGSP)</li>
                <li className="px-4">Kad CIDB</li>
                <li className="px-4">Lesen Offshore T-Bosiet OPITO</li>
                <li className="px-4">Sijil Basic Fire Watch</li>
                <li className="px-4">Medical OHD</li>
                <li className="px-4">Confined Space Entry (AESP)</li>
                <li className="px-4">Medical Offshore</li>
                <li className="px-4">Gas Pipe Installation (ABM) (High Pressure)</li>
                <li className="px-4">Jaminan Pekerjaan</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 hingga 35 tahun</li>
                <li className="px-4">Memiliki sekurang-kurangnya PT3/ SPM</li>
                <li className="px-4">Sihat tubuh badan (Lulus Medikal Klinik Panel Jabatan Laut)</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Lelaki sahaja</li>
              </div> */}
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default page