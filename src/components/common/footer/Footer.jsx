import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socialicon from "@/app/contact/Socialicon";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="dark:bg-white">
      <div className="lg:grid grid-cols-12 gap-6 py-5 pt-10">
        {/* Left Section */}
        <div className="col-start-2 col-span-4 px-5 lg:px-0">
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
          <div className="mb-4">
            <div className="flex gap-2 items-center mb-2">
              <IoIosCall className="text-3xl text-[#eb5f30]" />
              <p className="font-semibold text-lg text-gray-800">Emergency:</p>
              <Link
                href="tel:+91 954 011 4114"
                className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
              >
                +91 954 011 4114
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center">
                <IoIosCall className="text-xl mt-1 text-[#eb5f30]" />
                <p className="font-semibold text-lg text-gray-800 ml-2">
                  Appointment:
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:ml-2">
                <Link
                  href="tel:+91 98736 98775"
                  className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
                >
                  +91 98736 98775,
                </Link>
                <Link
                  href="tel:+91 99587 92906"
                  className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
                >
                  +91 99587 92906
                </Link>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex gap-2 items-center mb-4">
            <MdEmail className="text-3xl text-[#eb5f30]" />
            <Link
              href="mailto:info@ssbhealthcare.com"
              className="font-semibold text-lg hover:text-[#eb5f30] dark:text-gray-800"
            >
              info@ssbhealthcare.com
            </Link>
          </div>

          {/* Address Section */}
          <div className="flex gap-2 items-center mb-4">
            <IoLocationSharp className="lg:text-5xl text-3xl text-[#eb5f30]" />

            <Link
              href="https://www.google.com/maps/place/SSB+Heart+And+Multispecialty+Hospital/@28.3468466,76.7922585,9.75z/data=!4m20!1m13!4m12!1m4!2m2!1d77.2077968!2d28.6329434!4e1!1m6!1m2!1s0x390cdc4836be0d4b:0x5acd8fcb2eee0ce7!2sSSB+Heart+And+Multispecialty+Hospital,+Plot+No,+69,+NH-19,+near+Neelam+Flyover,+Sector+20+A,+New+Industrial+Township,+Faridabad,+Haryana+121001!2m2!1d77.3101748!2d28.3930904!3m5!1s0x390cdc4836be0d4b:0x5acd8fcb2eee0ce7!8m2!3d28.3930904!4d77.3101748!16s%2Fg%2F11f3v2_8q9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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

export default Footer;
