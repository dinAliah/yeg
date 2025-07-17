import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"

// const card =['ahmad', 'fuad', 'alia']

const detail = [
  {
    gambar: '/career/career1.jpg',
    width: 400,
  },
  {
    gambar: '/career/career2.jpg',
    width: 400,
  },
  {
    gambar: '/career/career3.jpg',
    width: 400,
  },
  {
    gambar: '/career/career4.jpg',
    width: 400,
  },
  {
    gambar: '/career/3.png',
    width: 400,
  },
  {
    gambar: '/career/4.png',
    width: 400,
  },
  {
    gambar: '/career/5.png',
    width: 400,
  },
  {
    gambar: '/career/6.png',
    width: 400,
  },
  {
    gambar: '/career/7.png',
    width: 400,
  },
  {
    gambar: '/career/8.png',
    width: 400,
  },
  {
    gambar: '/career/9.png',
    width: 400,
  },
  {
    gambar: '/career/10.png',
    width: 400,
  },
  {
    gambar: '/career/11.png',
    width: 400,
  },
];

function career() {
  return (
    <>
    <main>
        <title>YEG Academy - Career</title>
        <div className="pt-8">
          <div className="flex justify-center py-8">
            <div className="group w-3/4 h-full grid justify-center ">
              <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
                CAREER YEG ACADEMY
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 mx-auto container gap-4 py-4">
          {detail.map((detail,index) => (
            <div key={index}>
              <Image
              className='rounded'
              src={detail.gambar}
              width={detail.width}
              height={10}/>
            </div>
          ))}
        </div>
    </main>
    </>
    
  )
}

export default career