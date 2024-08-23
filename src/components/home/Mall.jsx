import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../reusableComponents/Container";
import { FaArrowRight } from "react-icons/fa6";
import { inter, playfair_display } from '@/helpers/fonts.js';

const Mall = () => {
  return (
    <section className=" text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className={`${playfair_display.className} text-5xl mb-4`}>
          Mall Of: Endless Possibilities
        </h1>
        <p className=" mb-12 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="relative inline-block">
          <Image
            src="/images/home/img-2.png"
            alt="Groves"
            width={800}
            height={600}
            className=""
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-2xl text-black p-4 rounded-full">
              <FaPlay />
            </div>
          </button>
        </div>
      </div>
      <Container>
        <div className="bg-transparent container m-auto md:px-28">
          <Card className="md:py-6 md:flex justify-between items-center border-0 text-white container mx-auto  shadow-2xl backdrop-blur-xl bg-[#283211] text-start">
            <div>
            <CardHeader>
              <CardDescription className={` ${inter.className} text-sm font-inter`}>
                25 SR/GUEST
              </CardDescription>
              <CardTitle className={`${playfair_display.className} text-2xl`}>
                Get your General Access Token
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm font-inter ${inter.className} `}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente id quas quis inventore repudiandae earum impedit nemo
                labore in quam, minima doloremque fugiat minus iste sunt.
              </p>
            </CardContent>
            </div>
            <div className="flex md:block justify-end">
          <FaArrowRight className="text-4xl my-4 md:mt-1 text-[#FFFFFF] opacity-50" />
          </div>
          </Card>
          
          
        </div>
      </Container>
    </section>
  );
};

export default Mall;
