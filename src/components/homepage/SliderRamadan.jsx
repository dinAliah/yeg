
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image" 
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";


export default function App() {
  return (
    <>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <div className="w-full flex justify-center py-8 bg-black">
            <Image 
            className="w-full rounded-md"
            src="/newyear.jpg"
            alt="newyear"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
        <div className="p-2 bg-gradient-to-r from-red-900 to-red-700 max-w-full lg:px-3 flex justify-center ">
            <video className="w-[1200px] border-none shadow-none" controls autoPlay loop ><source src="postercina.mp4" type="video/mp4" /></video>
          </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
        <Image 
            className="w-full rounded-md"
            src="/nisfushaaban.png"
            alt="newyear"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
        </SwiperSlide>
      </Swiper>    
    </>
  );
}
