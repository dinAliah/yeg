import React from 'react'
import Image from "next/image"


function Intro() {
  return (
    <>
    <div className="sticky">
        <section2 className="w-full absolute bottom-16 px-24 hidden lg:block">
          <div className="w-full h-full bg-white rounded-md flex justify-center shadow-md space-x-16">
          <div className="flex items-center">
            <Image
                src="/iuclogo.png"
                alt="iuclogo"
                width="160"
                height="200"
                style={{
                  objectFit:"contain",
                }}
              />
            </div>
            <div className=" flex items-center">
            <Image
                src="/meatech2logo.svg"
                alt="meatech2logo"
                width="230"
                height="200"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" flex items-center">
            <Image
                src="/mahsalogo.svg"
                alt="mahsalogo"
                width="180"
                height="0"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" flex items-center">
            <Image
                src="/logoamtc.svg"
                alt="logoamtc"
                width="180"
                height="0"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" flex items-center">
            <Image
                src="/meatechlogo.svg"
                alt="meatechlogo"
                width="120"
                height="200"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" flex items-center">
            <Image
                src="/logopelita.svg"
                alt="logopelita"
                width="90"
                height="200"
                style={{objectFit: "contain"}}/>
            </div>
            </div>
        </section2>
        </div>
    </>
    
  )
}

export default Intro