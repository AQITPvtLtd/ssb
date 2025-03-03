import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertData } from "@/data/expert";
const Experts = () => {
  return (
    <div className="relative mt-44 sm:mt-64 md:mt-0">
      <h1 className="text-center font-semibold lg:text-4xl text-2xl text-[#eb5f30] pt-10">
        OUR EXPERTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 mt-10 px-6 lg:px-10 pb-10">
        {expertData.map((e) => (
          <div
            key={e.id}
            className="w-full max-w-sm bg-white rounded-lg shadow-md dark:border-gray-700 dark:bg-white"
          >
            <div
              className="rounded-t-lg"
              style={{
                background: "linear-gradient(180deg, #FF6A4D 0%, #FFE0D4 100%)",
              }}
            >
              <Image
                className="rounded-t-lg mx-auto"
                src={`/doctor-img/${e.image}`}
                alt={`${e.name}'s image`}
                width={350}
                height={400}
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-2 text-lg font-bold text-gray-800">{e.name}</h5>
              <p className="mb-4 text-sm text-gray-700 font-medium">
                {e.position}
              </p>
              <p className="mb-4 text-sm text-gray-700 font-medium line-clamp-3">
                {e.about}
              </p>
              <Link
                href={`/experts/${e.id}`}
                className="inline-block px-4 py-2 border-2 border-[#eb5f30] text-[#eb5f30] text-sm font-semibold hover:bg-[#eb5f30] hover:text-white transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
