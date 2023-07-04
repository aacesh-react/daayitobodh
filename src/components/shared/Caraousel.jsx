import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Carausel = ({ children }) => {
  const data = [1, 3, 4, 5, 6, , 8, 9, 0, 1, 2];
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
      >
        <ul>
          {data.map((value, index) => (
            <SwiperSlide key={index}>{children}</SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default Carausel;
