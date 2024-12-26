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
            href="https://www.google.com/maps/place/SSB+Heart+And+Multispecialty+Hospital/@28.3468466,76.7922585,9.75z/data=!4m20!1m13!4m12!1m4!2m2!1d77.2077968!2d28.6329434!4e1!1m6!1m2!1s0x390cdc4836be0d4b:0x5acd8fcb2eee0ce7!2sSSB+Heart+And+Multispecialty+Hospital,+Plot+No,+69,+NH-19,+near+Neelam+Flyover,+Sector+20+A,+New+Industrial+Township,+Faridabad,+Haryana+121001!2m2!1d77.3101748!2d28.3930904!3m5!1s0x390cdc4836be0d4b:0x5acd8fcb2eee0ce7!8m2!3d28.3930904!4d77.3101748!16s%2Fg%2F11f3v2_8q9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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
