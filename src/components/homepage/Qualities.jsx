import React from 'react'
import Image from "next/image"



function Intro() {
  return (
    <>
    <section4>
      <div className="w-full h-full px-4 lg:px-16 grid text-blue-950 ">
          <span className="lg:text-5xl text-4xl font-bold py-3 text-center">OUR UNIQUE QUALITIES</span>
        </div>
        <div className="hidden lg:block w-full h-full justify-center ">
          <div className="group h-full flex justify-center  ">
          <p className="text-md text-slate-700  grid font-semibold font-sans text-center p-10 leading-snug tracking-wide">
          YEG Academy telah berjaya memberi peluang kepada lebih 5000 orang golongan muda untuk meneruskan pelajaran dan latihan kerjaya di dalam bidang yang relevan dengan kerjaya pada masa kini. Jangan biarkan impian anda terkubur begitu sahaja
            <span className="text-slate-700 font-bold bg-gradient-to-r mt-3 from-yellow-500 to-yellow-400 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
            Ambil peluang ini dan mulakan langkah pertama anda bersama YEG Academy.</span>
          </p>
        </div>
        </div>
        <div className="w-full h-full "></div>  
      <div className="px-4 lg:px-16 py-8 ">
        <div className="w-full h-full bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
            <div className="w-full flex justify-start px-5 transition-transform  group-hover:-translate-y-3">
            <Image
              src="/awardicon.svg"
              alt="malaysia"
              width="40"
              height="10"
              style={{objectFit:"contain"}}
            />
            </div>
            <div className="px-5 py-8 text-lg text-white font-semibold">
            <span>Selari Dengan Dasar Ekonomi Digital Negara</span>
            </div>
            <div className="px-5 flex w-full text-normal justify-center">
            <span className="text-gray-400 ">YEG menyediakan program yang selaras Dasar Ekonomi Digital Negara</span>
            </div>
            <div className="py-8 flex w-full text-normal justify-center">
            </div>
          </card>
          <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
            <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
            <Image
            id="image1"
              className=""
              src="/handshake.svg"
              alt="handshake"
              width="55"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
            </div>
            <div className="px-5 py-8 text-lg text-white font-semibold">
            <span className=" text-md font-bold">Ekosistem Pembelajaran Terbaik</span>
            </div>
            <div className="px-5 flex w-full text-normal justify-center">
            <span className="text-gray-400 ">YEG memilih untuk berkolaborasi dengan IPT yang mempunyai ekosistem pembelajaran yang lengkap.</span>
            </div>
            <div className="py-8 flex w-full text-normal justify-center">
            </div>
          </card>
          <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
            <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
            <Image
            id="image1"
              className=""
              src="/glob.svg"
              alt="glob"
              width="45"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
            </div>
            <div className="px-5 py-8 text-lg text-white font-semibold">
            <span>Pilihan Bidang Dengan Pasaran Kerja Terkini</span>
            </div>
            <div className="px-5 flex w-full text-normal justify-center">
            <span className="text-gray-400 ">YEG menyediakan pilihan program pendidikan dan kerjaya yang hanya mengikut permintaan industri.</span>
            </div>
            <div className="py-8 flex w-full text-normal justify-center">
            </div>
          </card>
          <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
            <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
            <Image
            id="image1"
              className=""
              src="/person.svg"
              alt="person"
              width="45"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
            </div>
            <div className="px-5 py-8 text-lg text-white font-semibold">
            <span>Mengambil Kira Potensi Pelajar dan Pelatih</span>
            </div>
            <div className="px-5 flex w-full text-normal justify-center">
            <span className="text-gray-400 ">YEG menyesuaikan personaliti pelajar dengan bidang kerjaya yang dipilih.</span>
            </div>
            <div className="py-8 flex w-full text-normal justify-center">
            </div>
          </card>
          <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
            <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
            <Image
            id="image1"
              className=""
              src="/support.svg"
              alt="support"
              width="45"
              height="10"
              style={{
                objectFit:"contain",
              }}
            />
            </div>
            <div className="px-5 py-8 text-lg text-white font-semibold">
            <span>Penglibatan Pakar Industri</span>
            </div>
            <div className="px-5 flex w-full text-normal justify-center">
            <span className="text-gray-400 ">Tenaga pengajar adalah terdiri mereka yang berpengalaman dalam industri masing-masing.</span>
            </div>
            <div className="py-8 flex w-full text-normal justify-center">
            </div>
          </card>
          </div>  
        </div>
      </section4>
    
    </>
    
  )
}

export default Intro