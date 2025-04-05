"use client";
import { useState } from "react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="lg:text-5xl text-center text-[#eb5f30] font-semibold md:text-5xl text-3xl lg:px-20 px-4 py-10">
        Frequently Asked Questions
      </h1>

      <div id="accordion-collapse" className="lg:px-20 px-10 gap-20">
        {/* First Accordion Item */}
        <div className="rounded-2xl border border-black mb-4">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full lg:px-5 px-2 py-5 font-medium rtl:text-right gap-3"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span className="font-semibold lg:text-xl dark:text-gray-700">
                What conditions do you treat?
              </span>
              <IoIosArrowDown
                className={`lg:text-3xl text-lg font-semibold transition-transform duration-300 dark:text-gray-700 ${
                  activeIndex === 1 ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === 1 ? "max-h-screen" : "max-h-0"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="px-5 pb-2">
              <p className="dark:text-gray-700">
                Orthopaedics and Joint Replacement is a specialized field of
                medicine focused on diagnosing, treating, and managing
                conditions related to the musculoskeletal system, which includes
                bones, joints, ligaments, tendons, and muscles.
              </p>
            </div>
          </div>
        </div>

        {/* Second Accordion Item */}
        <div className="rounded-2xl border border-black mb-4">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full lg:px-5 px-2 py-5 font-medium rtl:text-right gap-3"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span className="font-semibold lg:text-xl dark:text-gray-700">
                What technology is used for joint replacements?
              </span>
              <IoIosArrowDown
                className={`lg:text-3xl text-lg font-semibold transition-transform duration-300 dark:text-gray-700 ${
                  activeIndex === 2 ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === 2 ? "max-h-screen" : "max-h-0"
            }`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="px-5 pb-2">
              <p className="dark:text-gray-700">
                Joint replacement surgeries use advanced technologies like
                robotic-assisted systems for precise implant placement,
                computer-assisted navigation for alignment accuracy, and 3D
                printing for custom-fit implants. Minimally invasive techniques,
                along with durable materials like titanium and ceramic, ensure
                improved outcomes, reduced recovery times, and enhanced joint
                functionality for long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Third Accordion Item */}
        <div className="rounded-2xl border border-black mb-4">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full lg:px-5 px-2 py-5 font-medium rtl:text-right gap-3"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-semibold lg:text-xl dark:text-gray-700">
                What are recovery timelines for surgery?
              </span>
              <IoIosArrowDown
                className={`lg:text-3xl text-lg font-semibold transition-transform duration-300 dark:text-gray-700 ${
                  activeIndex === 3 ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`overflow-hidden transition-all duration-300 dark:text-gray-700 ${
              activeIndex === 3 ? "max-h-screen" : "max-h-0"
            }`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="px-5 pb-2 dark:text-gray-700">
              <p>
                Recovery timelines for surgery vary by procedure and individual.
                Typically:
              </p>
              <ul className="list-disc px-4">
                <li>
                  <b>Knee/Hip Replacement:</b> Initial recovery in 6–12 weeks;
                  full recovery in 6–12 months.
                </li>
                <li>
                  <b>Minimally Invasive Surgeries:</b> 2–4 weeks for daily
                  activities; full recovery in 3 months.
                </li>
                <li>
                  <b>Complex/Revision Surgeries:</b> May take 12+ months.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fourth Accordion Item */}
        <div className="rounded-2xl border border-black mb-4">
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full lg:px-5 px-2 py-5 font-medium rtl:text-right gap-3"
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="accordion-collapse-body-4"
            >
              <span className="font-semibold lg:text-xl dark:text-gray-700">
                How can I prevent orthopaedic issues?
              </span>
              <IoIosArrowDown
                className={`lg:text-3xl text-lg font-semibold transition-transform duration-300 dark:text-gray-700 ${
                  activeIndex === 4 ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === 4 ? "max-h-screen" : "max-h-0"
            }`}
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="px-5 pb-2 dark:text-gray-700">
              <p className="font-semibold">
                Preventing orthopaedic issues involves:
              </p>
              <ol className="list-decimal px-4">
                <li>Maintaining a healthy weight to reduce joint stress.</li>
                <li>Exercising regularly to strengthen bones and muscles.</li>
                <li>Eating a calcium- and vitamin D-rich diet.</li>
                <li>Using proper posture during activities.</li>
                <li>Avoiding repetitive strain and injuries.</li>
                <li>Wearing supportive footwear.</li>
                <li>Scheduling regular check-ups for early detection.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
