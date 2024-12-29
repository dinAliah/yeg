
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image" 
import { Autoplay } from 'swiper/modules';


import "swiper/css";
import "swiper/css/autoplay";




export default function App() {
  return (
    <>
    <div>
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
        <Image
            className="w-full"
            src="/jelajahacm3.jpg"
            alt="jelajahacm1"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            className="w-full"
            src="/jelajahacm3.jpg"
            alt="jelajahacm3"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            className="w-full"
            src="/jelajahacm3.jpg"
            alt="logopelita"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      </Swiper>
      </div>
      
    </>
  );
}




      