import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/Hero/1.jpg";
import img2 from "../assets/Hero/2.jpg";
import img3 from "../assets/Hero/3.jpg";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[90vh]"
      >
        <SwiperSlide className="relative h-full">
          <img src={img1} alt="" className="h-[90vh] w-full object-cover"/>
          <div className="absolute top-0 left-0  h-[90vh] grid grid-cols-5 items-center text-left lg:text-2xl md:text-xl text-white">
            <div></div>
            <div className="lg:col-span-1 col-span-3 lg:bg-none bg-black lg:bg-opacity-0 bg-opacity-30 lg:p-0 p-2 rounded-lg">
              <h2 className="fertuzy text-white lg:text-5xl md:text-4xl  text-3xl underline armani">
                Armani
              </h2>
              <p className="text-[#d4ab84]">
                Exclusive offer -20% off this week.
              </p>{" "}
              <br />
              <p>
                Expending the offerings of Armani. Blackstone wrist collection
                with premium leather.
              </p>
              <span className="flex flex-col items-start mt-5 text-[#d4ab84]"><p className="mr-2">Starting at:</p><p className="text-xl md:text-2xl lg:text-4xl">$ 2,999</p></span>
            </div>
            <div className="md:col-span-3 col-span-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
        <img src={img2} alt="" className="h-[90vh] w-full object-cover"/>
          <div className="absolute top-0 left-0  h-full grid grid-cols-5 items-center text-left lg:text-2xl md:text-xl text-white">
            <div></div>
            <div className="lg:col-span-1 col-span-3 lg:bg-none bg-black lg:bg-opacity-0 bg-opacity-30 lg:p-0 p-2 rounded-lg">
              <h2 className="fertuzy text-white lg:text-5xl md:text-4xl  text-3xl underline armani">
                Casio
              </h2>
              <p className="text-[#d4ab84]">
                Exclusive offer -20% off this week.
              </p>{" "}
              <br />
              <p>
                Expending the offerings of Armani. Blackstone wrist collection
                with premium leather.
              </p>
              <span className="flex flex-col items-start mt-5 text-[#d4ab84]"><p className="mr-2">Starting at:</p><p className="text-xl md:text-2xl lg:text-4xl">$ 2,999</p></span>
            </div>
            <div className="md:col-span-3 col-span-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
        <img src={img3} alt="" className="h-[90vh] w-full object-cover"/>
          <div className="absolute top-0 left-0  h-full grid grid-cols-5 items-center text-left lg:text-2xl md:text-xl text-white">
            <div></div>
            <div className="lg:col-span-1 col-span-3 lg:bg-none bg-black lg:bg-opacity-0 bg-opacity-30 lg:p-0 p-2 rounded-lg">
              <h2 className="fertuzy text-white lg:text-5xl md:text-4xl  text-3xl underline armani">
                Kinner
              </h2>
              <p className="text-[#d4ab84]">
                Exclusive offer -20% off this week.
              </p>{" "}
              <br />
              <p>
                Expending the offerings of Armani. Blackstone wrist collection
                with premium leather.
              </p>
              <span className="flex flex-col items-start mt-5 text-[#d4ab84]"><p className="mr-2">Starting at:</p><p className="text-xl md:text-2xl lg:text-4xl">$ 2,999</p></span>
            </div>
            <div className="md:col-span-3 col-span-1"></div>
          </div>
        </SwiperSlide>
        

        
      </Swiper>
    </>
  );
}
