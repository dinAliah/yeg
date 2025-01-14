'use client'
import React from 'react'
import Card from '@/components/ui/card'
import Image from 'next/image'


function App () {
  return (
    <main>
        <section11>
            <div className=" bg-green-800 w-full h-full px-4 lg:px-28">
            <div className="py-4"><h className="text-4xl font-extrabold text-white">Testimoni Dhumy</h></div>
            <div className="h-full lg:py-6 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4 items-center">
            <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7454090052411477256?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi1.mp4" type="video/mp4"/>
            </video>
            </a>
            <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7453861488747449608?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi2.mp4" type="video/mp4"/>
            </video>
            </a>
            <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7451224071339052296?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi3.mov" type="video/mp4"/>
            </video>
            </a>
            <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7452697755891338504?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi4.mp4" type="video/mp4"/>
            </video>
            </a>
            {/* <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7454958664617692424?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi5.mp4" type="video/mp4"/>
            </video>
            </a>
            <a href="https://www.tiktok.com/@pengurusanhajiumrah/video/7451930447564541202?is_from_webapp=1&sender_device=pc"
            className="flex hover:scale-150 duration-300">
            <video autoplay="autoplay" loop="loop" muted="muted"
                className="rounded-md top-0 left-0 w-full h-full object-cover" 
                width="390" 
                height="890">
                <source src="/testi6.mp4" type="video/mp4"/>
            </video>
            </a> */}
            </div>
            </div>
        </section11>
        </main>
              
              


                
    
                
  );
}

export default App;


