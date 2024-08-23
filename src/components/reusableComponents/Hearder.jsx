"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/reusableComponents/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inter } from "@/helpers/fonts";

const Header = () => {
  const routes = [
    {
      href: "/",
      label: "DINE WITH US",
    },
    {
      href: "/",
      label: "PLAN WITH US",
    },
    {
      href: "/",
      label: "EVENTS",
    },
    {
      href: "/",
      label: "VIEW GROVES MAPS",
    },
    {
      href: "/",
      label: "OUR STORY",
    },
    {
      href: "/",
      label: "CONTACT US",
    },
  ];

  return (
    <header
      className={` ${inter.className} absolute top-0 left-0 z-10 bg-transparent w-[100%]`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between font-inter">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <Image
                className="text-xl font-bold text-green w-[160px] md:w-[200px]"
                src="/images/footer/logo-1.png"
                width={100}
                height={50}
              />
            </Link>
          </div>

          <div>
            <div className="hidden md:flex">
              <ul className="flex justify-between items-center gap-4 mx-4">
                <li className="bg-black">
                  <Link href="">
                    <Image
                      src="/images/home/tiktok.png"
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
              <Button variant="myCustom" className="h-10 w-[130px]">
                Log in
              </Button>
              <div>
                <Select defaultValue="english">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      <SelectItem value="english">
                        <div className="flex justify-between items-center gap-2">
                          <Image
                            src="/images/home/english.png"
                            width={30}
                            height={30}
                          />
                          <p>English</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="chines">Chines</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="md:hidden px-6 ml-4">
            
              <Sheet>
      <SheetTrigger asChild>
      <Image
                className="text-xl font-bold text-green w-[40px]"
                src="/images/home/ham-burger.png"
                width={300}
                height={50}
              />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
          <Image
                className="text-xl font-bold text-green w-[160px] md:w-[200px] mb-4"
                src="/images/footer/logo-1.png"
                width={100}
                height={50}
              />
          </SheetTitle>
        </SheetHeader>
        <nav>
            {routes.map((route, i) => (
                <Link
                  href={route.href}
                  key={i} className="block border-y py-4"
                >
                  <p className="block">{route.label} <br/></p>
                </Link>
              
            ))}
          </nav>
        <SheetFooter>
        <Button variant="myCustom" className="h-10 w-[130px] mt-4">
                Log in
              </Button>
              <div className="mt-4">
                <Select defaultValue="english">
                  <SelectTrigger className="w-[180px] focus:outline-none">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      <SelectItem value="english">
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            src="/images/home/english.png"
                            width={30}
                            height={30}
                          />
                          <p>English</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="chines">Chines</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-y py-4 hidden md:block">
        <Container>
          <nav className="flex px-2  items-center justify-between">
            {routes.map((route, i) => (
              <button key={i}>
                <Link
                  href={route.href}
                  className="text-white font-inter font-light text-sm"
                >
                  {route.label}
                </Link>
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* header mobile */}
    </header>
  );
};

export default Header;
