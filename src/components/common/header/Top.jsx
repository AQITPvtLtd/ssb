"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const Top = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-center py-5 px-6 bg-white gap-y-6 lg:gap-y-0">
    //   {/* Logo Section */}
    //   <div className="flex justify-center lg:justify-start">
    // <Image
    //   src="/logo/logo.png"
    //   alt="SSB Logo"
    //   className=""
    //   width={270}
    //   height={250}
    // />
    //   </div>

    //   {/* Email and Location Section */}
    //   <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-4">
    //     <div className="flex items-center gap-2 text-gray-700">
    // <MdEmail className="text-xl" />
    // <Link
    //   href="mailto:info@ssbhealthcare.com"
    //   className="font-semibold text-lg hover:text-[#eb5f30]"
    // >
    //   info@ssbhealthcare.com
    // </Link>
    //     </div>

    // <div className="flex text-center text-gray-700">
    //   <div className="text-2xl lg:mt-2 mt-1">
    //     <IoLocationSharp />
    //   </div>
    //   <Link
    //     href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
    //     className="text-lg hover:text-[#eb5f30] font-semibold"
    //     target="__blank"
    //   >
    //     Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A,
    //     Faridabad, Haryana 121002
    //   </Link>
    // </div>
    //   </div>

    //   {/* Contact Us Section */}
    // <div className="flex justify-center lg:justify-end">
    //   <Link
    //     href="tel:+919540114114"
    //     className="bg-[#eb5f30] text-white flex gap-3 text-lg font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
    //   >
    //     <LuPhoneCall className="text-2xl mt-[2px]" /> Contact us
    //   </Link>
    // </div>
    // </div>
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo/logo.png"
              alt="SSB Logo"
              className=""
              width={270}
              height={250}
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="lg:block hidden">
              <Link
                href="tel:+919540114114"
                className="bg-[#eb5f30] text-white flex gap-3 text-lg font-medium py-2  px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <LuPhoneCall className="text-2xl mt-[2px]" /> Contact us
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={openMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              openMenu ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 jus">
              <li>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <MdEmail className="text-xl" />
                  <Link
                    href="mailto:info@ssbhealthcare.com"
                    className="font-semibold text-lg hover:text-[#eb5f30]"
                  >
                    info@ssbhealthcare.com
                  </Link>
                </div>

                <div className="flex text-center gap-2 text-gray-700">
                  <div className="text-2xl lg:mt-2 mt-1">
                    <IoLocationSharp />
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
                    className="text-lg hover:text-[#eb5f30] font-semibold"
                    target="__blank"
                  >
                    Plot No. 69, Mathura Road, Near Neelam Flyover,{" "}
                    <br className="lg:block hidden" /> Sector 20 A, Faridabad,
                    Haryana 121002
                  </Link>
                </div>
              </li>

              <li className="lg:hidden block">
                <div className="flex justify-center mt-2">
                  <Link
                    href="tel:+919540114114"
                    className="bg-[#eb5f30] text-white flex gap-3 text-lg font-medium py-2  px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                  >
                    <LuPhoneCall className="text-2xl mt-[2px]" /> Contact us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
