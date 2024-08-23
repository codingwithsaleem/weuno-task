import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <footer className="px-4 md:px-0 py-20 border-t text-white">
      <div className="mb-4 md:hidden">
            <Image
              src="/images/footer/logo-1.png"
              width={100}
              height={100}
              className="w-[200px] h-full"
            />
          </div>
        <div className="md:flex justify-between items-center pb-20">
          <h1 className="text-5xl">
            Join us for an <br /> unforgettable experience
          </h1>
          <div>
            <p className="md:mt-0 mt-10">DOWNLOAD THE GROVES APP</p>
            <div className="flex items-center gap-4 mt-6">
              <Image
                src="/images/footer/1.png"
                width={100}
                height={100}
                className="w-[150px] h-full"
              />
              <Image
                src="/images/footer/2.png"
                width={100}
                height={100}
                className="w-[150px] h-full"
              />
            </div>
          </div>
        </div>
        <div className="md:flex justify-start gap-x-20  opacity-90">
          <div className="md:flex justify-between gap-x-20">
            <div>
              <p className="mb-4">LOCATION</p>
              <address>
                Al-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br />{" "}
                Riyadh Saudi Arabia
              </address>
            </div>
            <div>
              <p className="mb-4">WORKING HOURS</p>
              <span>
                <p className="mb-4">
                  {" "}
                  Sun until Thurs: 4:00PM <br /> Fri & Sat: 2:30PM
                </p>
              </span>
              <span>
                Gates Close at: <br /> Sat until Wed: 12:00AM <br /> Thu & Fri:
                12:30AM
              </span>
            </div>
          </div>
          <div>
            <p className="mb-4">GUEST SERVICE CALL</p>
            <div>
              <span>
                <p className="mb-4">
                  cc@thegroves-sa.com <br /> 920001672
                </p>
              </span>
              <span>+966556631309</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-10">
          <div className="hidden md:block">
            <Image
              src="/images/footer/logo-1.png"
              width={100}
              height={100}
              className="w-[200px] h-full "
            />
          </div>
          <div className="md:flex">
            <ul className="flex justify-between items-center gap-4">
              <li className="bg-black">
                <Link href="">
                  <Image
                    src="/images/footer/tiktok.png"
                    width={20}
                    height={20}
                    className=" opacity-[63%] bg-black"
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/images/home/instagram.png"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image src="/images/home/x.png" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/images/home/snapchat.png"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="md:flex justify-between items-center">
            <ul className="md:flex justify-between items-center gap-4">
              <li >
                <Link href="">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>

              <li>
                <Link href="">©2023 The Groves for Entertainment</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 md:justify-center items-center mt-4 md:mt-0">
            <Image src="/images/footer/3.png" width={20} height={20} />
            <Image src="/images/footer/4.png" width={20} height={20} />
            <Image src="/images/footer/5.png" width={20} height={20} />
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
