'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@/app/globals.css";
import { Parallax, Pagination } from 'swiper/modules';
import CustomButton from '../reusableComponents/CustomButton';
import { inter, playfair_display } from '@/helpers/fonts';

const Hero = () => {
  return (
    <>
      <div className='h-screen home-hero-section'>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination]}
        className="mySwiper hero"
      >
        <SwiperSlide>
        <div
          slot="container-start"
          className="parallax-bg hero-wrapper"
          style={{
            backgroundImage:
              'url(/images/home/hero-1.png)',
          }}
          data-swiper-parallax="-23%"
        ></div>
          <div className={`${inter.className} h-screen flex flex-col justify-center md:container md:px-20`}>
          <div className="title font-inter" data-swiper-parallax="-300">
          <p className='text-sm'>KHAWAJA YANNI</p>
          </div>
          <div className={`subtitle ${playfair_display.className} `}data-swiper-parallax="-200">
            <h1 className='md:hidden text-4xl md:text-6xl py-4'>The new era of luxury</h1>
            <h1 className='hidden md:block text-4xl md:text-6xl py-4'>The new <br/> era of luxury</h1>
          </div>
          <div className="text font-inter" data-swiper-parallax="-100">
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. 
            </p>
          </div>
          <div className="font-inter pt-10" data-swiper-parallax="-100">
             <CustomButton label="Book reservation now" customClass="px-4"/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          slot="container-start"
          className="parallax-bg hero-wrapper"
          style={{
            backgroundImage:
              'url(/images/home/hero-1.png)',
          }}
          data-swiper-parallax="-23%"
        ></div>
          <div className='h-screen flex flex-col justify-center md:container md:px-20'>
          <div className="title font-inter" data-swiper-parallax="-300">
          <p className='text-sm'>KHAWAJA YANNI</p>
          </div>
          <div className={`subtitle ${playfair_display.className}`} data-swiper-parallax="-200">
          <h1 className='md:hidden text-4xl md:text-6xl py-4'>The new era of luxury</h1>
          <h1 className='hidden md:block text-4xl md:text-6xl py-4'>The new <br/> era of luxury</h1>
          </div>
          <div className="text font-inter" data-swiper-parallax="-100">
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. 
            </p>
          </div>
          <div className="font-inter pt-10" data-swiper-parallax="-100">
             <CustomButton label="Book reservation now" customClass="px-4"/>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Hero;
