import Image from "next/image";
import { FaArrowRight, FaFacebook, FaLinkedin } from "react-icons/fa6";
import arrow from "../../public/arrow.png";
import Logo from "../../public/logo.png";
import { MdOutlineDateRange } from "react-icons/md";
import { Footer } from "@/utils/FooterData";

const FooterBar = () => {
  return (
    <>
      <section className="bg-primary text-white xl:py-28 py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 2xl:gap-12 xl:gap-10 gap-6">
          <div className="flex flex-col justify-center">
            <h1 className="xl:text-4xl text-2xl font-semibold pb-5">
              As children we are filled with <br /> curiosity and ask lots of
              questions. <br /> It’s how we learn!
            </h1>
            <p>
              Then we begin school and throughout those years, questions are
              often not encouraged and many times discouraged. We may lose the
              skill we naturally had for asking questions. As a result, we may
              stop any questioning and when we don’t question, it can effect our
              learning. As I’ve spoken with people about the idea of asking
              questions some of the comments I’ve heard. “I don’t want to be
              nosy.” or “If I need to know something, the person will tell me.”
              What if the person doesn’t know you need information?
            </p>
          </div>
          <div className="flex flex-col gap-5 text-slate-500 ">
            <input
              type="text"
              placeholder="First Name"
              className="px-5 xl:py-5 py-3 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-5 xl:py-5 py-3 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="px-5 xl:py-5 py-3 rounded-lg focus:outline-none"
            />
            <div className="">
              <button className="xl:px-8 px-5 xl:py-4 py-3 bg-white rounded-lg">
                Sign Up
              </button>
            </div>
            <div className="px-5 xl:py-5 py-3 rounded-lg flex justify-between xl:w-96 w-72 bg-white">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="h-6 w-6 border border-black"
                />{" "}
                <h1>I’m Not A Robot</h1>
              </div>
              <div className="text-xs flex flex-col items-center">
                <Image src={arrow} alt="image" />
                <h1>reCAPTCHA</h1>
                <h1>Privacy - Terms</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white border-b border-white/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center xl:py-28 py-16">
            <h1 className="text-5xl font-semibold pb-3">Newsletter</h1>
            <p>Subscribe to our Newsletter for latest news.</p>
            <div className="flex gap-5 pt-7">
              <input
                type="email"
                placeholder="Email"
                className="text-black px-3 xl:w-[520px] w-full rounded-lg focus:outline-none"
              />
              <button className="flex gap-2 items-center xl:py-6 py-3 bg-primary xl:px-12 px-6 rounded-lg">
                Subscribe <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <Image src={Logo} alt="image" className="" />
              <div className="flex gap-3 pt-3">
                <div className="h-8 w-8 flex items-center justify-center border hover:bg-white hover:text-black">
                  <FaFacebook />
                </div>
                <div className="h-8 w-8 flex items-center justify-center border hover:bg-white hover:text-black">
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="xl:text-3xl text-2xl">Our Pages</h1>
              <br />
              <div className="flex flex-col gap-2">
                <p>Home</p>
                <p>About Me</p>
                <p>Coaching</p>
                <p>The Questions You’re Not Asking </p>
                <p>Speaking</p>
                <p>Blog</p>
                <p>Contact Me</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="xl:text-3xl text-2xl font-semibold">
                Recent Posts
              </h1>
              <br />
              <div className="grid lg:grid-cols-2 gap-5">
                {Footer.map((fData) => {
                  return (
                    <div key={fData.id} className="flex gap-4">
                      <Image src={fData.img} alt="image" className="" />
                      <div className="flex flex-col justify-between">
                        <h1 className="text-sm font-semibold xl:w-[212px]">
                          {fData.name}
                        </h1>
                        <div className="flex gap-2 items-center">
                          <MdOutlineDateRange /> 05/21/2021
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary py-6 text-white text-center">
        © Questionologist Business/Personal Resource Coach - All Content
        Copyright 2024 Judysabah.com
      </div>
    </>
  );
};

export default FooterBar;
