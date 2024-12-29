'use client'
import React, { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import Image from 'next/image'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const GlideSlider = () => {
  const glideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [glideInstance, setGlideInstance] = useState(null); // To store the glide instance



  useEffect(() => {
    if (glideRef.current) {
      console.log("Glide ref initialized.");
    
    const glide = new Glide(glideRef.current, {
      type: 'carousel',
      perView: 5,
      focusAt: 'center',
      peek:{
        before: 50,
        after: 50,
      },
      animationDuration: 800,
      breakpoints: {
        1000: {
          perView: 1,
        },
        
      },
    });

    glide.on('run.after', () => {
        setCurrentIndex(glide.index); // Update current index on slide change
      });
    glide.mount();

    glideRef.current.glideInstance = glide;

    return () => {
      glide.destroy();
    };  // Cleanup on unmount
  } else {
    console.error("Glide tak jumpa.");
  } 
},[]);

  // Function to go to the previous slide
  const handlePrev = () => {
    if (glideRef.current && glideRef.current.glideInstance) {
      glideRef.current.glideInstance.go('<');
    }
  };

  // Function to go to the next slide
  const handleNext = () => {
    if (glideRef.current && glideRef.current.glideInstance) {
      glideRef.current.glideInstance.go('>');
    }
  };

  return (
    <>
      <div className="py-10">
          <div className="flex justify-center">
              <h className="font-serif text-5xl">YEG Care</h>
          </div>
      <div className="xl:-mx-12 2xl:-mx-[120px] 3xl:mx-[calc((100vw-1500px)/-2)] ">
          <div className=" xl:px-12 2xl:px-[120px] 3xl:px-0 3xl:max-w-[1500px] bg-red-300 ">
          <div className="glide" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">    
            <li className={`glide__slide  transition-transform duration-300 ${currentIndex ===  0 ? 'pt-20 transform -translate-y-4' : 'h-auto'}}`}>
              <div className="flex flex-col justify-between bg-slate-200 border-black border-2 rounded-2xl min-h-[500px] min-w-[250px] ">
                <div className="absolute z-10 ml-2 mt-2 bg-red-500 w-fit p-0 px-3 rounded-sm">
                <p className="text-white font-medium text-xs font-sans">NEW</p>
                </div>
                <div className="">
                  <Image
                  className="w-[250px] rounded-t-xl"
                  src="/suap2.jpg"
                  alt="suap2"
                  height="100"
                  width="300"
                  style={{objectFit: "contain"}}/>
                </div>
                <div className="p-3 space-y-3">
                  <p className="text-xs font-bold text-slate-700 opacity-40">Sept31,2024 | by Noor Yaya</p>
                  <p className="text-md font-bold font-serif text-black">"Jangan berani balik selagi gelandangan ini tidak dapat makanan" - YEG Academy</p>
                  <p className="text-xs  text-slate-700 opacity-50">YEG Academy, bergerak meberi makanan kepada gelandangan tanpa rasa kekangan oleh pihak kerajaan.</p>
                  <a href="/" className="font-medium border-b-2 text-blue-600 flex items-center p-1 text-sm">Read Now
                    <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                
              </div>
            </li>
            <li className={`glide__slide transition-transform duration-300 ${currentIndex === 1 ? 'pt-20 transform -translate-y-4' : 'h-auto'}`}>
              <div className="flex flex-col justify-between bg-slate-300 border-black border-2 rounded-2xl p-8 min-h-[500px] min-w-[250px]">
                <p className="text-sm-heading lg:text-lg-heading font-medium mb-3">card 2</p>
                <p className="text-md-copy mb-5">Get all the features you need to sell online in a ready-to-go package.</p>
                <a href="/studio-store" className="font-medium border-b-2 border-green-500 text-black hover:bg-green-500">Learn more</a>
              </div>
            </li>
            <li className={`glide__slide transition-transform duration-300 ${currentIndex === 2 ? 'pt-20 transform -translate-y-4' : 'h-auto'}`}>
              <div className="flex flex-col justify-between bg-slate-400 border-black border-2 rounded-2xl p-8 min-h-[500px] min-w-[250px]">
                <p className="text-sm-heading lg:text-lg-heading font-medium mb-3">card 3</p>
                <p className="text-md-copy mb-5">Bypass your internal development teams and get your apps built fast.</p>
                <a href="/enterprise" className="font-medium border-b-2 border-green-500 text-black hover:bg-green-500">Learn more</a>
              </div>
            </li>
            <li className={`glide__slide transition-transform duration-300 ${currentIndex === 3 ? 'pt-20 transform -translate-y-4' : 'h-auto'}`}>
              <div className="flex flex-col justify-between bg-slate-400 border-black border-2 rounded-2xl p-8 min-h-[500px] min-w-[250px]">
                <p className="text-sm-heading lg:text-lg-heading font-medium mb-3">card 4</p>
                <p className="text-md-copy mb-5">Bypass your internal development teams and get your apps built fast.</p>
                <a href="/enterprise" className="font-medium border-b-2 border-green-500 text-black hover:bg-green-500">Learn more</a>
              </div>
            </li>
            <li className={`glide__slide transition-transform duration-300  ${currentIndex === 4 ? 'pt-20 transform -translate-y-4' : ' h-auto'}`}>
              <div className="flex flex-col justify-between bg-slate-400 border-black border-2 rounded-2xl p-8 min-h-[500px] min-w-[250px]">
                <p className="text-sm-heading lg:text-lg-heading font-medium mb-3">card 5</p>
                <p className="text-md-copy mb-5">Bypass your internal development teams and get your apps built fast.</p>
                <a href="/enterprise" className="font-medium border-b-2 border-green-500 text-black hover:bg-green-500">Learn more</a>
              </div>
            </li>
            {/* Add more slides as needed */}

            
          </ul>
        </div>
      </div>
      </div>
      </div>
      {/* Navigation buttons */}
      
      </div>
      <div className=" flex justify-between mt-5">
      <button
        onClick={handlePrev}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
    </>
    
    
    
    
  );
};

export default GlideSlider;
