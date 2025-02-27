import React from 'react'
import Navbar25 from '@/components/homepage/items/Navbar25'
import Sidebar from '@/components/homepage/items/Sidebar'

function Intro() {
  return (
    <>
    {/* <Sidebar/>
    <Navbar25/ className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"> */}
    <section1 className="relative">
    <div className="absolute top-0 left-0 h-full w-1/4 "></div>
    <div className="bg-black max-w-full lg:px-3 flex justify-center ">
      <video className="w-[1400px]"controls playsInline autoPlay><source src="yegintro.mp4" type="video/mp4" /></video>
      </div>
        </section1>
        </>
    
  )
}

export default Intro