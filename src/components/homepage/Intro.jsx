import React from 'react'
import Navbar25 from '@/components/homepage/items/Navbar25'


function Intro() {
  return (
    <>
    <section1 className="w-full relative">
        <div className="absolute h-full w-1/6 bg-gradient-to-r from-[#16223d] to-[rgba(15,23,42,0)]">asdasd</div>
        <div className="absolute h-[120px] inset-0 bg-gradient-to-b from-[#000000] to-[rgba(15,23,42,0)]"></div>
        <div className="absolute h-[130px] inset-0 bg-gradient-to-b from-[#1d285a] to-[rgba(15,23,42,0)]"></div>
        <Navbar25/>
        <div className="max-w-full lg:px-3 flex justify-center bg-black">
            <video className="w-[1400px]" controls autoPlay ><source src="yegintro.mp4" type="video/mp4" /></video>
        </div>
        </section1>
    </>
    
  )
}

export default Intro