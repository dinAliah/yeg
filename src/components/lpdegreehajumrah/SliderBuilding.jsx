
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
            src="/bangunan1.png"
            alt="sport1"
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
            src="/bangunan2.png"
            alt="sport2"
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
            src="/bangunan3.png"
            alt="sport3"
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
            src="/bangunan4.png"
            alt="sport4"
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
            src="/bangunan5.png"
            alt="sport5"
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
