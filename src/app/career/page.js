import React from 'react'
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"

function career() {
  return (
    <main>
        <title>YEG Academy - Career</title>
        <div className="pt-8">
            <div className="flex justify-center py-8">
        <div className="group w-3/4 h-full grid justify-center ">
          <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          CAREER YEG ACADEMY</span>
      </div>
      </div>
            </div>
            <section1>
            <div className="px-4 lg:px-28 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="">
                    <Image
                    className="rounded-md hover:shadow-slate-500 hover:shadow-2xl shadow-md hover:scale-150 duration-300"
                        src="/career1.jpg"
                        alt="career1"
                        width="300"
                        height="200"
                        style={{
                        objectFit:"cover",
                        }}
                    />
            </div>
            <div className="">
            <Image
                    className="rounded-md hover:shadow-slate-500 hover:shadow-2xl shadow-md hover:scale-150 duration-300"
                        src="/career2.jpg"
                        alt="career2"
                        width="300"
                        height="200"
                        style={{
                        objectFit:"cover",
                        }}
                    />
            </div>
            <div className="">
            <Image
                    className="rounded-md hover:shadow-slate-500 hover:shadow-2xl shadow-md hover:scale-150 duration-300"
                        src="/career3.jpg"
                        alt="career3"
                        width="300"
                        height="200"
                        style={{
                        objectFit:"cover",
                        }}
                    />
            </div>
            
        </div>
            </div>
            </section1>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
            <section2>
              <div className="px-8 lg:px-28 flex justify-center">
                <div className="border hover:shadow-xl rounded-md duration-300 p-3 py-6 bg-slate">
              <h>Contact Us</h>
                <div className="grid space-y-4">
                  <div className="flex items-center">
                  <Image
                    id="image1"
                      className=""
                      src="/wassap.svg"
                      alt="wassap"
                      width="45"
                      height="10"
                      style={{
                        objectFit:"contain",
                      }}
                    />
                    <a href="https://wa.me/+60163144841"  className="font-sans text-blue-500 underline px-3">https://wa.me/+60163144841</a>
                  </div>
                  <div className="flex items-center">
                  <Image
                    id="image1"
                      className=""
                      src="/gmail.svg"
                      alt="gmail"
                      width="45"
                      height="10"
                      style={{
                        objectFit:"contain",
                      }}
                    />
                  <a href="mailto:hr@youreducationguidance.my/" className="font-sans text-blue-500 underline px-3">hr@youreducationguidance.my/</a>
                  </div>
                  
                  
                 
                </div>
                </div>
              </div>
            </section2>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>    
    <div>
      <Footer/>
    </div>
    </main>
  )
}

export default career