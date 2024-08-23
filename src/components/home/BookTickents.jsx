"use client";

import React, { useState } from "react";
import CustomButton from "../reusableComponents/CustomButton";
import { playfair_display } from "@/helpers/fonts";
import Container from "../reusableComponents/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/globals.css";
import { Pagination } from "swiper/modules";
import SliderCard from "../reusableComponents/SliderCard";

const data = [
  { title: "Little Krazy", img: "/images/home/img-3.png" },
  { title: "Hawanim Groves City", img: "/images/home/img-4.png" },
  { title: "Picnic Market", img: "/images/home/img-5.png" },
  { title: "Lucaworld", img: "/images/home/img-6.png" },
  { title: "Little Krazy", img: "/images/home/img-3.png" },
  { title: "Hawanim Groves City", img: "/images/home/img-4.png" },
  { title: "Picnic Market", img: "/images/home/img-5.png" },
  { title: "Lucaworld", img: "/images/home/img-6.png" },
];

const BookTickents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideClass = (index) => {
    const relativeIndex = (index - activeIndex + data.length) % data.length;

    switch (relativeIndex) {
      case 0:
        return "md:scale-125 md:ml-10 md:mt-10"; // First image: 90%
      case 1:
        return "md:scale-[90%]"; // Second image: 70%
      case 2:
        return "md:scale-125 md:pr-2"; // Third image: 120%
      case 3:
        return "md:scale-100"; // Fourth image: 110%
      default:
        return "md:scale-100 md:ml-4"; // Default scaling for other images
    }
  };

  return (
    <div className="pb-20 md:py-20 home-booktickets-section">
      <Container>
        <div className="px-4 md:px-0
        ">
          <h1
            className={`${playfair_display.className} text-4xl md:text-5xl mb-10 text-white`}
          >
            Book General Access ticket and <br/>
            enjoy the attractions for free
          </h1>
          <CustomButton label="Book General Access Ticket" customClass="px-4" />
        </div>
      </Container>
      <div className="mt-12 ml-4 md:ml-32">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((value, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-300 ease-in-out w-full md:h-[600px]"
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
  );
};

export default BookTickents;
