import React from 'react'
import Navbar25 from '@/components/homepage/items/Navbar25'
import Sidebar from '@/components/homepage/items/Sidebar'

function Intro() {
  /*return (
    <>
    {/* <Sidebar/>
    <Navbar25/ className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"> */
    /*<section1 className="relative">
    <div className="absolute top-0 left-0 h-full w-1/4 "></div>
    <div className="bg-black max-w-full lg:px-3 flex justify-center ">
      <video className="w-[1400px]"controls playsInline autoPlay><source src="yegintro.mp4" type="video/mp4" /></video>
      </div>
        </section1>
        </>
    
  )
}*/
return (
    <>
      {/* <Sidebar/>
    <Navbar25/ className="bg-gradient-to-r from-[#151c41] to-[rgba(11,24,54,0)"> */}
      <div className="yeg-hero-scope">
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content">
           
            <h1>Shaping Malaysia's next generation of <em>career-ready</em> talent.</h1>
            <p className="lead">
              YEG Academy connects students with the education pathways employers are actually
              hiring for — through partnerships built with Malaysia's leading institutions.
            </p>
            <div className="cta-row">
              <a href="#programs" className="btn btn-gold">Explore Programmes</a>
              <a href="#" className="btn btn-outline">Contact an Advisor</a>
            </div>
          </div>
        </section>

       
      </div>
    </>
  )
}

export default Intro