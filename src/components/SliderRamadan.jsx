
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
        <SwiperSlide>
          <div className="w-full flex justify-center">
            <Image 
            className="w-full rounded-md"
            src="/mmpposter.jpg"
            alt="mmpposter"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center">
            <Image 
            className="w-full rounded-md"
            src="/postermerdeka.jpg"
            alt="postermerdeka"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center">
            <Image 
            className="w-full rounded-md"
            src="/postermerdeka.jpg"
            alt="postermerdeka"
            width="1000"
            height="50"
            style={{
            objectFit:"contain",
          }}
        />
          </div>
        </SwiperSlide>
        

      </Swiper>
      
    </>
  );
}
