import Image from "next/image";
import aboutImage from "../../public/aboutImage.png";
import brand from "../../public/brand.png";
import { ServicesData, ThoughtfulData } from "@/utils/AllData";
import Testomonials from "@/components/Testomonials";

const page = () => {
  return (
    <>
      <div className="bg-[url('/homeBg.jpg')] bg-center bg-cover">
        <div className="container mx-auto px-4 flex flex-col justify-center gap-4 text-white h-[100vh]">
          <h1 className="text-3xl">Hi There!</h1>
          <p className="xl:text-6xl text-3xl font-semibold">
            Uncover the Secret <br /> to a Successful Life!
          </p>
          <p className="xl:text-5xl text-2xl pt-3">
            Get Your <br />
            Free Report Belo
          </p>
          <div className="py-8">
            <button className="px-8 py-3 bg-primary rounded-full">
              Know More
            </button>
          </div>
          <Image src={brand} alt="image" />
        </div>
      </div>
      <section className="container mx-auto px-4 xl:py-28 py-16">
        <div className="grid lg:grid-cols-2 xl:gap-24 gap-16">
          <Image src={aboutImage} alt="image" className="w-full" />
          <div className="pt-10">
            <h1 className="xl:text-5xl text-3xl font-semibold">About Me</h1>
            <h2 className="xl:text-3xl text-2xl font-medium pt-5 pb-3">
              Judy Sabah, MCC
            </h2>
            <p>Questionologist and Business/Personal Resource Coach</p>
            <br />
            <p className="xl:w-[610px]">
              As long as I can remember, I’ve been extremely curious about so
              many things. As a child I loved walking at night, looking in
              people’s windows when the shades were up. It was incredibly
              interesting to see how people decorated and what the inside of
              their homes looked like. As I focused on getting my curiosity
              satisfied, I had more and more fun! My curiosity has continued to
              increase. Since becoming a coach 25 years ago, my curiosity,
              questioning and listening skills have become an obsession and
              brought me so much joy and adventure. I find that through asking
              questions, I understand people better, I understand what is being
              communicated more clearly and as a result, I can make more
              effective decisions for myself.
            </p>
            <br />
            <h1 className="xl:text-5xl px-5 font-1 pb-2">Judy Sabah</h1>
            <button className="px-8 py-3 bg-primary rounded-full text-white">
              More About Me
            </button>
          </div>
        </div>
      </section>
      <section className="xl:py-28 py-16 bg-[#930add04]">
        <div className="container mx-auto px-4">
          <h1 className="xl:text-5xl text-3xl font-semibold text-center">
            Services I Offer
          </h1>
          <div className="xl:py-16 py-10 xl:px-10 grid lg:grid-cols-3 gap-8">
            {ServicesData.map((sData) => {
              return (
                <div
                  key={sData.id}
                  className="flex flex-col text-center items-center shado py-5 px-4">
                  <Image src={sData.img} alt="image" />
                  <div className="lg:px-6 px-2 xl:py-6 py-4">
                    <h1 className="text-3xl font-semibold pb-2">
                      {sData.title}
                    </h1>
                    <p>{sData.dec}</p>
                  </div>

                  <button className="px-8 py-3 bg-primary rounded-lg text-white">
                    Read More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 xl:py-28 py-16">
        <h1 className="xl:text-5xl text-3xl font-semibold text-center">
          Thoughtful Reflections
        </h1>
        <div className="xl:py-16 py-10 xl:px-10 px-4 grid lg:grid-cols-2 gap-8">
          {ThoughtfulData.map((tData) => {
            return (
              <div key={tData.id} className="shado py-6 xl:px-6 px-4">
                <div className="flex lg:flex-row flex-col items-center gap-4">
                  <Image src={tData.img} alt="image" />
                  <h1 className="text-3xl font-semibold text-primary pb-2">
                    {tData.title}
                  </h1>
                </div>
                <div className="grid grid-cols-2 py-5">
                  <div className="border-r-2 border-primary/50 pr-4">
                    <p>{tData.dec1}</p>
                    <h1 className="xl:text-lg text-primary font-medium pt-4">
                      {tData.name}
                    </h1>
                  </div>
                  <div className="border-primary/50 pl-4">
                    <p>{tData.dec2}</p>
                    <h1 className="xl:text-lg text-primary font-medium pt-4">
                      {tData.name2}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto xl:px-28 px-4 xl:py-28 py-16 text-center">
          <h1 className="xl:text-6xl text-4xl font-semibold">
            “The person who asks the questions, controls the conversation.”
          </h1>
          <br />
          <p>
            When asking questions we are less apt to make assumptions. Listening
            to the answer gives us information about the next questions to ask.
            So many times a person makes an assumption and believes it. The path
            from there forward often takes the person somewhere she really does
            not want to be. To proceed with an issue in an intelligent manner,
            we can choose to ask questions to get accurate information and
            proceed knowing the truth of the situation.
          </p>
        </div>
      </section>
      <Testomonials />
    </>
  );
};

export default page;
