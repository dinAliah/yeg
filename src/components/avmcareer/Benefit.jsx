'use client'
import React from 'react'
import Image from 'next/image'


function Benefit() {
  return (
    <div>
        <div className="text-2xl font-bold text-center">Tawaran Menarik</div>
        <section>
        <Image 
          className=" w-full"
          src="/benafitaviation.png"
          alt="benafitaviation"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
        </section>
    </div>

  )
}

export default Benefit