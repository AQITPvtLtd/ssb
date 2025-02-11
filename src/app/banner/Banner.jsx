import React from "react";
import Image from "next/image";
import Form from "../contact/form/Form";
const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner/bgimg.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 md:grid grid-cols-12 h-full items-center">
        {/* Left Section: Image and Offer */}
        <div className="col-start-2 col-span-5 flex items-center justify-center p-5">
          <div className="relative w-full max-w-md">
            <Image
              src="/banner/sideimg.jpg"
              alt="Side Image"
              layout="intrinsic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Right Section: Form */}
        <div className="col-span-5 lg:ml-20 md:items-center lg:px-5 relative flex justify-center lg:block" id="queryForm">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Banner;
