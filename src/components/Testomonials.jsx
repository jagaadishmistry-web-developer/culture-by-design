"use client";

import { TestoData } from "@/utils/AllData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import code from "../../public/code.png";

const Testomonials = () => {
  var settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto px-7 xl:py-28 py-16">
        <h1 className="xl:text-5xl text-3xl font-semibold text-center">
          Testimonials
        </h1>
        <Slider {...settings} className=" xl:pt-20 pt-16">
          {TestoData.map((Cdata) => {
            return (
              <div key={Cdata.id} className="px-3">
                <div className="bg-white shado rounded-xl xl:px-6 px-4 py-6 flex flex-col justify-center hover:bg-primary hover:text-white">
                  <div className="flex flex-col items-center text-center pb-2">
                    <Image src={Cdata.img} alt="img" priority />
                    <div className="">
                      <p className="font-bold xl:text-xl md:text-lg text-lg">
                        {Cdata.name}
                      </p>
                      <p className="xl:text-base lg:text-sm font-bold text-slate-700">
                        {Cdata.customer}
                      </p>
                    </div>
                  </div>
                  <Image src={code} alt="img" priority />
                  <p className="pt-2">{Cdata.dec1}</p>
                  <p className="px-4 font-semibold text-lg text-center pt-4 text-primary">
                    {Cdata.dec2}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testomonials;
