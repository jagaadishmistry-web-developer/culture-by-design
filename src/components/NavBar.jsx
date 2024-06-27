"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "../../public/logo.png";

const NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const mEnter = () => {
    setDropDownOpen(true);
  };
  const mLeave = () => {
    setDropDownOpen(false);
  };
  const [nav, setNav] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-black text-white">
      <div className="flex container mx-auto px-4 justify-between items-center xl:h-[110px] h-[90px]">
        <Link className=" " href="/">
          <Image src={Logo} alt="image" className="" />
        </Link>

        <div className="lg:flex items-center hidden 2xl:gap-12 xl:gap-9 gap-5 font-medium xl:text-[15px] text-[14px]">
          <div
            className="hover-dropdown group block"
            onMouseEnter={mEnter}
            onMouseLeave={mLeave}>
            <div className="flex gap-1 items-center">
              <Link href="/">Home</Link>
              <span>
                <IoMdArrowDropdown className="text-xl group-hover:rotate-180" />
              </span>
            </div>
            {dropDownOpen && (
              <Link
                className="absolute bg-white text-black border px-3 w-28 py-4"
                href="/home2">
                Home 2
              </Link>
            )}
          </div>
          <Link href="/about">About Me</Link>
          <Link href="/Coaching">Coaching</Link>
          <Link href="/">The Questions Youre Not Asking</Link>
          <Link href="/">Speaking</Link>
          <Link href="/">Coaching</Link>
          <div className="">
            <Link
              href="/"
              className="bg-white text-black py-4 w-[185px] lg:flex items-center justify-center rounded-full hidden">
              Contact Me
            </Link>
          </div>
        </div>
        {/* nomile navbar  */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
          {nav ? (
            <FaXmark className="w-8 h-7" />
          ) : (
            <FaBars className="w-8 h-7" />
          )}
        </div>
        {nav && (
          <div className="absolute md:top-[175px] top-[90px] left-0 right-0 h-[100vh] bg-white text-black">
            <div className="flex flex-col gap-3 px-6 text-lg font-medium pt-10 items-center">
              <div
                className="hover-dropdown group block"
                onMouseEnter={mEnter}
                onMouseLeave={mLeave}>
                <div className="flex gap-1 items-center">
                  <Link href="/">Home</Link>
                  <span>
                    <IoMdArrowDropdown className="text-xl group-hover:rotate-180" />
                  </span>
                </div>
                {dropDownOpen && (
                  <Link
                    className="absolute bg-white border px-3 w-40 py-4"
                    href="/home2">
                    Home 2
                  </Link>
                )}
              </div>
              <Link href="/about">About Me</Link>
              <Link href="/hoaching">Coaching</Link>
              <Link href="/">The Questions Youre Not Asking</Link>
              <Link href="/">Speaking</Link>

              <br />
              <Link
                href="/"
                className="text-white bg-primary px-5 py-3 rounded-lg">
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
