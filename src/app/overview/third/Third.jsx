import React from "react";
import Image from "next/image";
const Third = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 py-5 flex flex-col-reverse">
      <div className="lg:px-5">
        <p className="font-extrabold text-2xl mb-4 mt-5 lg:mt-0 text-gray-800">
          Key Features to Highlight:
        </p>

        <div className="mb-6">
          <p className="font-bold text-lg text-blue-600 mb-2">
            Why Choose SSB?
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Highly experienced orthopaedic surgeons.</li>
            <li>Faster recovery and reduced post-operative discomfort.</li>
            <li>Patient-centric approach focusing on education and support.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-bold text-lg text-blue-600 mb-2">
            Conditions Treated
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Osteoarthritis, rheumatoid arthritis, sports injuries.</li>
            <li>Tendonitis, fractures, and carpal tunnel syndrome.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-lg text-blue-600 mb-2">When to Visit?</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Persistent pain or swelling.</li>
            <li>Joint stiffness or deformity.</li>
            <li>Numbness, tingling, or mobility issues.</li>
          </ul>
        </div>
      </div>

      <div>
        <Image
          src={"/overview/third.jpg"}
          height={1000}
          width={1000}
          alt="orthopaedics-img"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Third;
