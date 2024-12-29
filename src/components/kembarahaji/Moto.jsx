import React from 'react'
import Image from 'next/image'

function Moto() {
  return (
    <section9 >
      <div className="flex justify-center">
      <div className=" w-full  max-w-7xl ">
      <div className="hidden lg:block w-full h-full lg:grid-cols-3 gap-4 space-y-10">
        <div className="flex col-span-3 justify-end ">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">INOVASI</h>
        </div>
        <div className="px-10">
        <Image
          id="image1"
            className=""
            src="/section9(1).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div>
        <div className="flex col-span-3">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">DINAMIK</h>
        </div>
        <div className="flex items-center px-10">
        <Image
          id="image1"
            className=""
            src="/section9(2).svg"
            alt="section9"
            width="250"
            height="250"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div> 
        <div className="flex col-span-3 justify-center pt-3">
        <div className="flex items-center px-5">
        <Image
          id="image1"
            className=""
            src="/section9(3).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        <div className="grid items-center px-10 ">
          <h className="text-8xl grid font-bold font-sans text-slate-700">PROGRESIF</h>
        </div>       
        </div> 
      </div>
      </div>
      </div>
    </section9>
  )
}

export default Moto