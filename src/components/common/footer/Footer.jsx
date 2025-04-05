import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socialicon from "@/app/contact/Socialicon";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-white lg:px-0 px-5">
      <div className="lg:grid grid-cols-12 gap-6 py-5 pt-10">
        {/* Left Section */}
        <div className="col-start-2 col-span-4 px-2 lg:px-0">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="SSB Logo"
              width={270}
              height={250}
              className="mb-4"
            />
          </Link>
          <p className="mb-4 text-gray-700 text-lg">
            The{" "}
            <span className="font-semibold">
              {" "}
              Orthopaedics & Joint Replacement Department{" "}
            </span>{" "}
            at{" "}
            <span className="font-semibold">
              {" "}
              SSB Heart and Multispecialty Hospital, Faridabad,
            </span>{" "}
            delivers advanced orthopaedic treatments and surgeries using
            cutting-edge technology like 3D techniques and painless computer
            navigation.
          </p>
          <div className="mt-5">
            <Link
              href="tel:+91 954 011 4114"
              className="font-semibold text-white bg-[#eb5f30] py-4 px-6 rounded-2xl"
            >
              CALL +91 954 011 4114
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-start-7 col-span-5 mt-10 lg:mt-0 px-2">
          <h2 className="text-3xl font-semibold mb-4 dark:text-black">
            Get in Touch
          </h2>

          {/* Emergency and Appointment Section */}

          <div className="flex gap-2 items-center mb-2">
            <IoIosCall className="text-2xl text-[#eb5f30]" />
            <p className="font-semibold text-lg text-gray-800 mt-1">
              Appointment:
            </p>
            <Link
              href="tel:+91 954 011 4114"
              className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
            >
              +91 954 011 4114
            </Link>
          </div>


          {/* Email Section */}

          <div className="flex gap-2 items-center mb-2">
            <FaGlobe className="text-2xl text-[#eb5f30]" />
            <Link
              href="https://ssbhealthcare.com/"
              className="font-semibold text-lg hover:text-[#eb5f30] dark:text-gray-800"
            >
              ssbhealthcare.com
            </Link>
          </div>


          {/* Email Section */}
          <div className="flex gap-2 items-center mb-2">
            <MdEmail className="text-2xl text-[#eb5f30]" />
            <Link
              href="mailto:info@ssbhealthcare.com"
              className="font-semibold text-lg hover:text-[#eb5f30] dark:text-gray-800"
            >
              info@ssbhealthcare.com
            </Link>
          </div>


          {/* Address Section */}
          <div className="flex gap-2 mb-2">
            <div>
              <IoLocationSharp className="text-[#eb5f30] text-2xl" />
            </div>
            <Link
              href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
              className="font-semibold text-lg hover:text-[#eb5f30] dark:text-gray-800"
              target="__blank"
            >
              Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A,
              Faridabad, Haryana 121002
            </Link>
          </div>

          {/* Social Icons */}
          <div>
            <Socialicon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 2