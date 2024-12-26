import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const Top = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-center py-5 px-6 bg-white gap-y-6 lg:gap-y-0">
      {/* Logo Section */}
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/logo/logo.png"
          alt="SSB Logo"
          className=""
          width={270}
          height={250}
        />
      </div>

      {/* Email and Location Section */}
      <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-4">
        <div className="flex items-center gap-2 text-gray-700">
          <MdEmail className="text-xl" />
          <Link
            href="mailto:info@ssbhealthcare.com"
            className="font-semibold text-lg hover:text-[#eb5f30]"
          >
            info@ssbhealthcare.com
          </Link>
        </div>

        <div className="flex text-center text-gray-700">
          <div className="text-2xl lg:mt-2 mt-1">
            <IoLocationSharp />
          </div>
          <Link
            href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
            className="text-lg hover:text-[#eb5f30] font-semibold"
            target="__blank"
          >
            Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A,
            Faridabad, Haryana 121002
          </Link>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="flex justify-center lg:justify-end">
        <Link
          href="tel:+919540114114"
          className="bg-[#eb5f30] text-white flex gap-3 text-lg font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          <LuPhoneCall className="text-2xl mt-[2px]" /> Contact us
        </Link>
      </div>
    </div>
  );
};

export default Top;
