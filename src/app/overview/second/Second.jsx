import React from "react";
import Image from "next/image";
const Second = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 py-5 gap-10 items-center">
      {/* Left Side: Image */}
      <div className="flex justify-center">
        <Image
          src={"/overview/second.jpg"}
          height={500}
          width={500}
          alt="orthopaedics-img"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side: Content */}
      <div>
        {/* Section Heading */}
        <p className="font-extrabold text-2xl mb-4 mt-5 lg:mt-0 text-gray-800">
          Key Features to Highlight:
        </p>

        {/* Advanced Technology Section */}
        <div className="mb-6">
          <p className="font-bold text-lg text-blue-600 mb-2">
            Advanced Technology
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>3D techniques for detailed surgical planning.</li>
            <li>
              Painless computer navigation for precision in joint replacement.
            </li>
            <li>
              CORI handheld robotics with real-time smart mapping and optimized
              alignment.
            </li>
          </ul>
        </div>

        {/* Specialized Surgical Procedures */}
        <div className="mb-6">
          <p className="font-bold text-lg text-blue-600 mb-2">
            Specialized Surgical Procedures
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Total Knee & Hip Replacement (Minimally Invasive).</li>
            <li>Partial Knee Replacement with Early Rehabilitation.</li>
            <li>Shoulder, Elbow, and Advanced Arthroscopy of All Joints.</li>
            <li>Fracture & Polytrauma Management.</li>
            <li>Limb Lengthening and Deformity Correction.</li>
          </ul>
        </div>

        {/* Non-Surgical Treatments */}
        <div>
          <p className="font-bold text-lg text-blue-600 mb-2">
            Non-Surgical Treatments
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Physical therapy for mobility improvement.</li>
            <li>Pain management for symptom relief.</li>
            <li>Conservative therapies tailored to individual needs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Second;
