
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
          <div className="w-full flex justify-center " style={{ backgroundImage: 'url("/bgkembarahaji.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundOpacity:4 }}>
        <Image 
         className=""
         src="/kembarahaji2.jpg"
         alt="kembarahaji2"
         width="700"
         height="80"
         style={{
           objectFit:"contain",
         }}
       />
       </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center " style={{ backgroundImage: 'url("/bgkembarahaji.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundOpacity:4 }}>
        <Image 
         className=""
         src="/kembarahaji2.jpg"
         alt="kembarahaji2"
         width="700"
         height="80"
         style={{
           objectFit:"contain",
         }}
       />
       </div>
        </SwiperSlide>
      </Swiper>
      </div>
      
    </>
  );
}




      