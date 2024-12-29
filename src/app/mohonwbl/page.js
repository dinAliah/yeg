import React from 'react'
import Image from "next/image"
import Formwbl from "@/components/Formwbl"


function page() {
  return (
    <main>
        <div >
        <Image
        className="hidden lg:block w-full"
            src="/posterwbl.jpg"
            alt="wbl1"
            width="100"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          <Image
            className="lg:hidden"
            src="/wbl1(phone).png"
            alt="wbl1(phone)"
            width="1000"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <section2>
            <div className="bg-slate-700 p-3 flex justify-center py-8">
              <h className="text-white text-center lg:text-5xl text-3xl font-extrabold">DERMASISWA <span className="text-yellow-600">RM10 JUTA</span> BAGI MEMBANTU <span  className="text-yellow-600">3000</span> PELAJAR</h>
            </div>
        </section2>
        <div className="bg-white py-2 md:py-3 lg:py-86">.</div>

        <section3 className="grid grid-cols-5 gap-4 p-3">
          <div className="flex justify-center items-center ">
          <Image
            className=""
            src="/logohaji.svg"
            alt="logohaji"
            width="400"
            height="200"
            style={{
              objectFit: "contain",
            }}
          /> 
          </div>
          <div className="flex justify-center items-center">
          <Image
            className=""
            src="/logoacm.svg"
            alt="logoacm"
            width="400"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
          <div className="flex justify-center items-center">
          <Image
            className=""
            src="/logomhmep.svg"
            alt="logomhmep"
            width="400"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />  
          </div>
          <div className="flex justify-center items-center">
          <Image
            className=""
            src="/logoppu.svg"
            alt="logoppu"
            width="400"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
          <div className="flex justify-center items-center">
          <Image
            className=""
            src="/logomahstech.svg"
            alt="logomahstech"
            width="400"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
        </section3>
        <div className="bg-white py-2 md:py-3 lg:py-86">.</div>

        <section4 className="">
          <div>
          <Image
            className="w-full"
            src="/wbl2.png"
            alt="wbl2"
            width="350"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
        </section4>
        <div className="bg-slate-700 py-2 md:py-3 lg:py-86">.</div>

        <section5> 
          <div className="py-8 w-full h-full flex justify-center items-center  lg:p-10" style={{ backgroundImage: 'url("/wblbackground.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="grid p-10">
          <div>
          <Image
            className=""
            src="/wbl3.svg"
            alt="wbl3"
            width="1500"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
          <div>
          <Image
            className="lg:pt-8 pt-4"
            src="/wbl3(1).svg"
            alt="wbl3"
            width="1500"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
          </div>
          </div>
          </div>
        </section5>
        <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
        <div className="animate-pulse duration-800  bg-slate-600 flex justify-center p-2 py-6">
              <h className="text-2xl text-white font-bold font-sans">PENGIKTIRAFAN OLEH <span className="text-yellow-500">MQA</span></h>
            </div>
        <section6>
          <Formwbl/>
        </section6>
        <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
        <section7>
        <Image
            className="w-full"
            src="/wblfooter.png"
            alt="wblfooter"
            width="1500"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </section7>

    </main>
  )
}

export default page