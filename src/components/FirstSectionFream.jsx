import Link from "next/link";

const FirstSectionFream = (props) => {
  return (
    <>
      <div className="text-center xl:py-32 py-20 bg-[url('/bg.png')] bg-cover bg-center text-white">
        <h1 className="xl:text-6xl text-4xl font-semibold">{props.title}</h1>
        <div className="xl:text-3xl text-xl font-medium pt-5">
          <Link href="/">Home</Link> / {props.title2}
        </div>
      </div>
    </>
  );
};

export default FirstSectionFream;
