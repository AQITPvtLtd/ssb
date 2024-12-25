import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Socialicon = () => {
  return (
    <div>
      <div className="flex justify-center lg:gap-6 gap-3 py-4">
        <Link
          href="https://www.facebook.com/ssbheartandmultispecialtyhospital"
          target="__blank"
          className="bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-400 hover:bg-[#eb5f30]"
        >
          {" "}
          <FaFacebookF className="text-lg text-white" />{" "}
        </Link>

        <Link
          href="https://x.com/ssbhealthcare"
          target="__blank"
          className="bg-blue-500 p-4 rounded-full shadow-lg shadow-blue-400 hover:bg-[#eb5f30]"
        >
          <FaXTwitter className="text-lg text-white" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/ssbhealthcare/"
          target="__blank"
          className="bg-blue-700 p-4 rounded-full shadow-lg shadow-blue-500 hover:bg-[#eb5f30]"
        >
          <FaLinkedinIn className="text-lg text-white" />
        </Link>

        <Link
          href="https://www.instagram.com/ssbhospital/"
          target="__blank"
          className="bg-pink-500 p-4 rounded-full shadow-lg shadow-pink-400 hover:bg-[#eb5f30]"
        >
          <FaInstagram className="text-lg text-white" />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCcwsvmA-5U-QPYeWVcwbihw"
          target="__blank"
          className="bg-red-600 p-4 rounded-full shadow-lg shadow-red-400 hover:bg-[#eb5f30]"
        >
          <FaYoutube className="text-lg text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Socialicon;
