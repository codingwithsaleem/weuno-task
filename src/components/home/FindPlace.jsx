import Image from 'next/image'
import React from 'react'
import CustomButton from '../reusableComponents/CustomButton'
import Container from '../reusableComponents/Container'

const FindPlace = () => {
  return (
    <Container>
        <div className='flex-col-reverse md:flex-row flex justify-center items-center min-h-screen text-white'>
        <div>
            <Image src={"/images/home/map.png"} width={500} height={500} className='w-[1200px] h-[600px]'/>
        </div>
        <div className='flex flex-col justify-center container md:px-20'>
          <div className="title font-inter" data-swiper-parallax="-300">
          <p className='text-sm'>EXPERIENCE THE GROVES</p>
          </div>
          <div className="subtitle font-playfair" data-swiper-parallax="-200">
            <p className='text-5xl py-4'>Find your place</p>
          </div>
          <div className="text font-inter" data-swiper-parallax="-100">
            <p className='text-sm'>
            Our interactive map will show you the way to the shops and restaurants that you want to see. 
            </p>
          </div>
          <div className="font-inter pt-10" data-swiper-parallax="-100">
             <CustomButton label="Open the Map" customClass="px-4"/>
          </div>
          </div>
    </div>
    </Container>
  )
}

export default FindPlace
