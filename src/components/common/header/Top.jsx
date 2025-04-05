"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

const Top = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-3">
        {/* Logo */}
        <Link href="https://ssbhealthcare.com/" target="_blank" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="SSB Logo"
            width={200}
            height={100}
            className="w-40 sm:w-48 md:w-64"
          />
        </Link>

        {/* Center Info (Hidden on small screens) */}
        <div className="hidden md:flex flex-col text-sm md:text-base text-gray-800 text-center">
          <div className="flex items-center gap-2 justify-center">
            <FaGlobe className="text-base" />
            <Link
              href="https://ssbhealthcare.com/"
              className="font-semibold hover:text-[#eb5f30]"
              target="_blank"
            >
              ssbhealthcare.com
            </Link>
          </div>
          <div className="flex items-start text-center gap-2 mt-1">
            <IoLocationSharp className="text-lg mt-1" />
            <Link
              href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
              className="font-semibold hover:text-[#eb5f30] text-center"
              target="_blank"
            >
              Plot No. 69, Mathura Road, Near Neelam Flyover, <br /> Sector 20 A, Faridabad, Haryana 121002
            </Link>
          </div>
        </div>

        {/* Call + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="tel:+919540114114"
            className="bg-[#eb5f30] text-white flex items-center gap-2 text-sm md:text-base font-medium py-2 px-4 rounded-full hover:scale-105 transition"
          >
            <LuPhoneCall className="text-xl" />
            <span className="hidden lg:block">Call Now</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - if needed */}
      {openMenu && (
        <div className="md:hidden px-4 pb-4 text-gray-800 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <FaGlobe className="text-base" />
            <Link
              href="https://ssbhealthcare.com/"
              className="font-semibold hover:text-[#eb5f30]"
              target="_blank"
            >
              ssbhealthcare.com
            </Link>
          </div>
          <div className="flex items-start gap-2">
            <span><IoLocationSharp className="text-lg mt-1" /></span>
            <Link
              href="https://maps.app.goo.gl/cgtmnHzK4aEEFYtN7"
              className="font-semibold hover:text-[#eb5f30]"
              target="_blank"
            >
              Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A, Faridabad, Haryana 121002
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Top;
