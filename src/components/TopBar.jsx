import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const TopBar = () => {
  return (
    <>
      <div className="bg-white md:flex flex-col justify-center py-2 hidden">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex md:flex-row flex-col gap-10 xl:text-[14px] text-[11px] lg:items-center">
            <div className="flex gap-1 items-center">
              <span className="">
                <IoIosMail className="xl:text-xl text-lg" />
              </span>
              Judy@JudySabah.com
            </div>
            <div className="flex gap-1 items-center">
              <span className="">
                <BiSolidPhoneCall className="xl:text-xl text-lg" />
              </span>
              3037771765
            </div>
          </div>
          <div className="md:flex hidden">
            <div className="flex">
              <div className="pr-4 border-r-2 border-black">
                <FaFacebookF className="xl:text-xl text-lg" />
              </div>
              <div className="pl-4">
                <FaInstagram className="xl:text-xl text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
