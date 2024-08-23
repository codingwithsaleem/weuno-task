import React from 'react';
import Image from 'next/image';
import Container from '../reusableComponents/Container';
import { inter, playfair_display } from '@/helpers/fonts.js';
import { FaArrowRight } from "react-icons/fa6";


const Experiance = () => {
  return (
<Container>
<section className=" text-white pb-10">
      <div className="text-center mb-12">
        <h2 className={` ${playfair_display.className} text-5xl`}>Experience the Finest Cuisine</h2>
        <p className="mt-4 text-gray-300 max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto px-4">
        {/* First Card */}
        <div className="bg-[#283211] p-2 rounded-3xl overflow-hidden shadow-lg max-w-sm md:max-w-none md:flex-1">
          <Image src="/images/home/img-7.png" width={300} height={300}  alt="Vida Vera" className="w-full h-56 object-cover rounded-3xl" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Vida Vera</h3>
            <div className="flex justify-between items-center mt-4">
              <p className="bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white px-10 py-2 text-sm rounded-full">100 SR PER GUEST</p>
              <span className="text-xl"><FaArrowRight className="text-4xl mt-1 text-[#FFFFFF] opacity-[52%]" /></span>
            </div>
          </div>
        </div>
        <div className="bg-[#283211] p-2 rounded-3xl overflow-hidden shadow-lg max-w-sm md:max-w-none md:flex-1">
          <Image src="/images/home/img-8.png" width={300} height={300} alt="Zama Zulu" className="w-full h-56 object-cover rounded-3xl" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Zama Zulu</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white px-10  text-sm py-2 rounded-full">100 SR PER GUEST</span>
              <span className="text-xl"><FaArrowRight className="text-4xl mt-1 text-[#FFFFFF] opacity-[52%]" /></span>
            </div>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto mt-10 px-4">
        {/* First Card */}
        <div className="bg-[#283211] p-2 rounded-3xl overflow-hidden shadow-lg max-w-sm md:max-w-none md:flex-1">
          <Image src="/images/home/img-9.png" width={300} height={300}  alt="Vida Vera" className="w-full h-56 object-cover rounded-3xl" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Vida Vera</h3>
            <div className="flex justify-between items-center mt-4">
              <p className="bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white px-10 py-2 text-sm rounded-full">100 SR PER GUEST</p>
              <span className="text-xl"><FaArrowRight className="text-4xl mt-1 text-[#FFFFFF] opacity-[52%]" /></span>
            </div>
          </div>
        </div>
        <div className="bg-[#283211] p-2 rounded-3xl overflow-hidden shadow-lg max-w-sm md:max-w-none md:flex-1">
          <Image src="/images/home/img-10.png" width={300} height={300} alt="Zama Zulu" className="w-full h-56 object-cover rounded-3xl" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Zama Zulu</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white px-10  text-sm py-2 rounded-full">100 SR PER GUEST</span>
              <span className="text-xl"><FaArrowRight className="text-4xl mt-1 text-[#FFFFFF] opacity-[52%]" /></span>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
</Container>
  );
};

export default Experiance;
