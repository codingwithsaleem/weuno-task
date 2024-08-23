"use client";

import React, { useState } from "react";
import CustomButton from "../reusableComponents/CustomButton";
import { playfair_display } from "@/helpers/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/globals.css";
import { Pagination } from "swiper/modules";
import SliderCard from "../reusableComponents/SliderCard";

const data = [
  { title: "Little Krazy", img: "/images/home/img-3.png" },
  { title: "Hawanim Groves City", img: "/images/home/img-11.png" },
  { title: "Picnic Market", img: "/images/home/img-12.png" },
  { title: "Little Krazy", img: "/images/home/img-3.png" },
  { title: "Hawanim Groves City", img: "/images/home/img-11.png" },
  { title: "Picnic Market", img: "/images/home/img-12.png" },
];

const Curate = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideClass = (index) => {
    const relativeIndex = (index - activeIndex + data.length) % data.length;

    switch (relativeIndex) {
      case 0:
        return "scale-[80%]"; // First image: 90%
      case 1:
        return "scale-[100%]"; // Second image: 70%
      case 2:
        return "scale-[90%]"; // Third image: 120%
      default:
        return "scale-100"; // Default scaling for other images
    }
  };

  return (
    <div className=" md:ml-32 md:flex flex-grow justify-start items-center">
        <div className="px-10 md:px-0
        ">
          <h1
            className={`${playfair_display.className} text-4xl mb-10 text-white`}
          >
            Curate your experience as you like
          </h1>
          <CustomButton label="Book Tickets" customClass="px-10" />
        </div>
    <div className="w-full pt-10 md:pt-0 md:py-20 home-booktickets-section">
      
        
      
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((value, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-300 ease-in-out w-[200px]"
            >
              <SliderCard
                title={value.title}
                img={value.img}
                className={getSlideClass(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Curate;
