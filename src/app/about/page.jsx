import FirstSectionFream from "@/components/FirstSectionFream";
import Image from "next/image";
import aboutImage2 from "../../../public/aboutImage2.png";
import Testomonials from "@/components/Testomonials";

const AboutUs = () => {
  return (
    <>
      <FirstSectionFream title="About Me" title2="About Me" />
      <div className="container mx-auto px-4 xl:py-28 py-16">
        <div className="xl:py-16 py-8 xl:px-12 md:px-6 px-4 bg-primary text-white rounded-3xl">
          <div className="grid lg:grid-cols-2 xl:gap-16 gap-10">
            <Image src={aboutImage2} alt="image" className="w-full" />
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="xl:text-6xl text-4xl font-semibold">About Me</h1>
              <h2 className="xl:text-3xl text-xl font-medium pt-3">
                Judy Sabah, MCC
              </h2>
              <p className="xl:text-2xl text-lg font-medium">
                Questionologist and Business/Personal Resource Coach
              </p>
              <p>
                Judy Sabah turned an inherent love for people into a dynamic
                life long career. Coaching since 1994 and earning the Master
                Certified Coach designation through the International Coach
                Federation in 1999, Judy dedicates herself to assisting clients
                in deepening their understanding, knowledge, and acknowledgment
                of their own intrinsic value. <br /> <br />
                She is a 1996 graduate of Coach U, where she served as a
                teleclass leader from 1994 through 1998.
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            In 1999, Judy’s vision and passion for her clients, led her to
            achieve foundational and advanced training in the Hartman Value
            Profile from Harvey Schoof and Wayne Carpenter. Today she is
            affiliated with Axiogenics, LLC. <br />
            <br />
            Axiogenics, LLC is the world’s leading pioneer in the field of
            applied neuro-axiology (brain science + value science)
            and NCRT (Neuro-axiological Cognitive Remodeling Technology). <br />
            <br />
            Throughout her lengthy career as a speaker, author, coach, Judy has
            displayed her natural competence for leadership. Thirty-five + years
            of participation in the National Speakers Association has led her to
            inspire countless individuals to pursue new directions. Her flair
            for motivating others is noted by her ability to facilitate the
            organization of educational and support networks for speakers and
            coaches on a local level. <br />
            <br />
            She is a co-founder and past president, 1993/94, of NSA/Colorado.
            She is a member of the International Coach Federation and founder of
            ICF Colorado. <br />
            <br /> In 1999, Judy was the recipient of the Toastmasters
            International Communication and Leadership Award, given by the
            Colorado/Wyoming District 26. The purpose of this award is to honor
            an individual who has given outstanding service to her Community,
            State and Industry through Communication and Leadership. <br />
            <br /> Judy was awarded a Lifetime Membership to the NSA/Colorado
            Chapter in 2000 for her outstanding service, dedication and support
            to the organization. <br />
            <br />
            Judy’s home in Denver is her sacred haven, dancing is movement for
            her soul, and sharing with others through coaching, speaking, and
            writing, is her passion. Judy’s philosophy for life is simply;{" "}
            <br />
            <br />
          </p>
          <h1 className="xl:text-2xl text-lg font-medium">
            In Everything There is A Gift.
          </h1>
        </div>
      </div>
      <Testomonials />
    </>
  );
};

export default AboutUs;
