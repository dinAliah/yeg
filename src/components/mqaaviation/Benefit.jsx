'use client'
import React from 'react'
import Image from 'next/image'


function Benefit() {
  return (
    <div>
        <div className="text-3xl font-bold text-center py-4">Tawaran Menarik</div>
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