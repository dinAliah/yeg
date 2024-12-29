import React from 'react'
import Image from 'next/image'

function Testimonimmp() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp1.jpg"
              alt="testmmp1"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp2.jpg"
              alt="testmmp2"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp3.jpg"
              alt="testmmp3"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp4.jpg"
              alt="testmmp4"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp5.jpg"
              alt="testmmp5"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        <div className="w-full p-1">
          <Image
              className="w-full rounded-md"
              src="/testmmp6.jpg"
              alt="testmmp6"
              width="120"
              height="250"
              style={{
              objectFit:"fill",
              }}
          />
        </div>
        
        
      </div>
    </div>
  )
}

export default Testimonimmp