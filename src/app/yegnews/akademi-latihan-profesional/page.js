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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container pt-6 ">
            <div className="space-y-4 p-4 container w-full h-full flex flex-col justify-between">
              <div className="grid space-y-8 ">
                <h className="text-base text-red-500 font-bold">Tawaran Sambung Belajar</h>
                <h className="font-serif font-bold text-2xl lg:text-5xl">Pendidikan Tinggi di Malaysia - Kelebihan Pendidikan Tinggi di Malaysia yang Anda Perlu Tahu</h>
                <div className="grid">
                <h className="text-sm">by Ain Firdaus</h>
                <h className="text-sm">Jan 19, 2024 at 11:00 AM</h>
              </div>
              </div>
              
              <div className="flex space-x-5 items-end mt-auto">
                <a className="grid" href="https://www.facebook.com/youreducationguidance/">
                    <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="30"
                    width="30"
                    >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                </a>
                <a className="grid" href="https://www.instagram.com/yegacademy.official/?hl=en"> 
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="30"
                        width="30"
                    >
                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                </a>
                <a className="grid" href="https://www.tiktok.com/@yegacademy?lang=en">
                    <svg
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        height="25"
                        width="25"
                    >
                        <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
                    </svg>
                </a>
                <a className="grid " href="https://www.yegmy.com/">
                <svg width="29" height="29" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    
                </a>
                </div>
            </div>
            <div className="lg:px-3 grid justify-items-center">
                <Image
                src="/newss11.jpg"
                alt="suaphomeless"
                width="550"
                height="10"
                style={{
                    objectFit: "contain",
                }}
                />
                <p className="font-serif text-sm italic text-center mt-2 w-[550px]">
                Pengarah YEG Academy beramah mesra bersama para guru semasa menganjurkan Program Inovatif Pendidikan di Mahsa University Malaysia
                </p>
                </div>      
          </div>
        </section>
        <div className="py-6"></div>
        <section>
          <div className="flex justify-center w-full ">
          <div className="container lg:w-2/3  grid space-y-8 py-8">
            <h className=" text-black font-sans">YEG Academy telah membuktikan dirinya sebagai salah satu akademi latihan profesional terkemuka di Malaysia, menawarkan pelbagai program yang relevan untuk memenuhi keperluan industri moden. Dengan fokus kepada pendidikan praktikal dan pembangunan kemahiran, YEG Academy menjadi pilihan utama bagi individu yang ingin memajukan kerjaya mereka dengan pantas.</h>
            <h className="text-black font-sans">Salah satu kelebihan utama YEG Academy adalah kursus-kursus yang berorientasikan industri. Akademi ini menawarkan program dalam bidang seperti Pengurusan Haji dan Umrah, Teknologi Maklumat (IT), dan Keusahawanan. Program-program ini direka untuk memberikan pelajar kemahiran praktikal yang dapat diaplikasikan terus ke dalam pekerjaan sebenar, menjadikan graduan YEG Academy sangat dicari oleh majikan.</h>
          </div>
          </div>
        </section>
        <section>
          <div className="grid justify-center py-8">
          <div className="w-fit lg:w-[900px]">
            <video
              controls
              utoPlay
              className="">
              <source src="/yegintro.mp4" type="video/mp4" />
            </video>
          </div>
          </div>
        </section>
        <div className="flex justify-center py-4">
        <div className="container lg:w-2/3 grid space-y-8">
          <h className="font-sans ">Di YEG Academy, para pelajar mendapat manfaat daripada tenaga pengajar yang berpengalaman dan fasiliti moden yang menyokong pembelajaran. Akademi ini juga terkenal dengan pendekatan pembelajaran fleksibel yang sesuai untuk pelajar dari pelbagai latar belakang. Dengan gabungan teori dan latihan praktikal, YEG Academy memastikan setiap pelajar dilengkapi dengan pengetahuan dan kemahiran terkini.</h>
          <h className="font-sans ">Selain itu, YEG Academy diiktiraf oleh badan-badan kelayakan seperti Agensi Kelayakan Malaysia (MQA), yang memastikan bahawa sijil yang diperoleh adalah berkualiti dan diiktiraf secara meluas. Ini memberikan keyakinan kepada pelajar dan majikan bahawa program yang ditawarkan memenuhi standard tertinggi dalam pendidikan dan latihan profesional.</h>
          <h className="font-sans ">Jika anda sedang mencari akademi latihan profesional yang dapat membantu anda mencapai matlamat kerjaya, YEG Academy adalah pilihan yang tepat. Dengan rekod kejayaan yang cemerlang dan komitmen terhadap kecemerlangan, YEG Academy bukan sahaja melatih pelajar untuk menjadi profesional yang berdaya saing, tetapi juga membantu mereka melangkah ke masa depan yang lebih cerah.
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

