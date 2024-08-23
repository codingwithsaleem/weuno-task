import Image from 'next/image';
import React from 'react';
import { playfair_display } from '@/helpers/fonts.js';

const SliderCard = ({ img, title, alt, className }) => {
  return (
    <div className={`transform ${className} transition-transform duration-300 ease-in-out`}>
      <Image src={img} width={300} height={300} alt={alt} className="object-cover w-full h-full" />
      <h1 className={`my-4 ${playfair_display.className} text-2xl text-white`}>{title}</h1>
    </div>
  );
};

export default SliderCard;
