import React from "react";
import Image from "next/image";
const First = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 py-10 gap-5 flex flex-col-reverse">
      <div>
        <p className="text-lg text-gray-800">
          The{" "}
          <span className="font-semibold">
            {" "}
            Orthopaedics & Joint Replacement Department{" "}
          </span>{" "}
          at{" "}
          <span className="font-semibold">
            {" "}
            SSB Heart And Multispecialty Hospital, Faridabad,{" "}
          </span>
          delivers advanced orthopaedic treatments and surgeries using
          cutting-edge technology like 3D techniques and painless computer
          navigation. The department specializes in minimally invasive
          procedures, which lead to faster recovery, less pain, and optimal
          results. The experienced team offers comprehensive care, from
          consultation to post operative rehab, ensuring tailored treatment
          plans for each patient.
        </p>
        <p className="text-gray-800 text-lg">
          In addition to surgical treatments, the hospital provides non-surgical
          therapies like physical therapy and pain management, emphasizing
          patient education and support to foster a compassionate treatment
          journey.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/overview/first.avif"}
          height={500}
          width={500}
          alt="orthopaedics-img"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default First;
