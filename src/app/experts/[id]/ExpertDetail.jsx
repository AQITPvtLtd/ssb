import { expertData } from "@/data/expert";
import React from "react";
import Image from "next/image";
import Form from "@/app/contact/form/Form";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const ExpertDetail = ({ id }) => {
  const obj = expertData.find((item) => item.id == id);
  return (
    <div>
      <div key={obj.id} className="bg-[#eb5f30] p-6">
        <div className="px-10 bg-white py-9 rounded-3xl">
          <div className=" flex justify-center">
            <span className="border border-orange-400 px-3 py-2 rounded-xl flex">
              <Link href="/" className="flex font-semibold">
                Home <AiOutlineDoubleRight className="mt-1" />
              </Link>
              <span className="text-[#eb5f30] font-semibold"> Our Experts</span>
            </span>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-4 mt-10">
              <div
                className="rounded-t-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #FF6A4D 0%, #FFE0D4 100%)",
                }}
              >
                <Image
                  className="rounded-t-lg mx-auto"
                  src={`/doctor-img/${obj.image}`}
                  alt={`${obj.name}'s image`}
                  width={350}
                  height={400}
                />
              </div>
              <div className="text-center">
                <h1 className="font-semibold text-2xl pt-3">{obj.name}</h1>
                <p className="text-lg">{obj.position}</p>
              </div>
            </div>

            {obj.schedule ? (
              <div className="col-start-7 col-span-5 py-11">
                <div className="p-4">
                  <h1 className="text-2xl font-semibold text-[#eb5f30] mb-4">
                    OPD Schedule
                  </h1>
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 font-semibold">
                          Day
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-semibold">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {obj.day.map((day, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">
                            {day}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {obj.time[index] || "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>{null}</div>
            )}
          </div>

          {/* Render the "about" section as a list */}
          <div className="shadow-xl shadow-gray-700 px-7 rounded-3xl py-6">
            {obj.about ? (
              <div>
                <h1 className="text-4xl font-semibold text-[#eb5f30]">
                  About Us
                </h1>
                <ul className="list-disc pl-6 mt-4">
                  {Array.isArray(obj.about) ? (
                    obj.about.map((item, index) => <li key={index}>{item}</li>)
                  ) : (
                    <li>{obj.about}</li>
                  )}
                </ul>
              </div>
            ) : (
              <div>{null}</div> // Show null if obj.about doesn't exist
            )}

            <div className="lg:grid lg:grid-cols-2">
              {obj.education ? ( // Check if obj.education exists
                <div className="mt-10">
                  <h1 className="text-4xl font-semibold text-[#eb5f30]">
                    Education
                  </h1>
                  <ul className="list-disc pl-6 mt-4">
                    {Array.isArray(obj.education) ? (
                      obj.education.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{obj.education}</li>
                    )}
                  </ul>
                </div>
              ) : (
                <div>{null}</div> // Show null if obj.education doesn't exist
              )}

              {obj.experince ? (
                <div className="mt-10">
                  <h1 className="text-4xl font-semibold text-[#eb5f30] ">
                    Experince
                  </h1>
                  <ul className="list-disc pl-6 mt-4">
                    {Array.isArray(obj.experince) ? (
                      obj.experince.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{obj.experince}</li>
                    )}
                  </ul>
                </div>
              ) : (
                <div>{null}</div>
              )}
            </div>

            <div className="lg:grid lg:grid-cols-2">
              {obj.achievements ? (
                <div className="mt-10">
                  <h1 className="text-4xl font-semibold text-[#eb5f30] ">
                    Achievements
                  </h1>
                  <ul className="list-disc pl-6 mt-4">
                    {Array.isArray(obj.achievements) ? (
                      obj.achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{obj.achievements}</li>
                    )}
                  </ul>
                </div>
              ) : (
                <div>{null}</div>
              )}

              {obj.specialinterest ? (
                <div className="mt-10">
                  <h1 className="text-4xl font-semibold text-[#eb5f30] ">
                    Special Interest
                  </h1>
                  <ul className="list-disc pl-6 mt-4">
                    {Array.isArray(obj.specialinterest) ? (
                      obj.specialinterest.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{obj.specialinterest}</li>
                    )}
                  </ul>
                </div>
              ) : (
                <div>{null}</div>
              )}
            </div>

            {obj.publication ? (
              <div className="mt-10">
                <h1 className="text-4xl font-semibold text-[#eb5f30] ">
                  Publication
                </h1>
                <ul className="list-disc pl-6 mt-4">
                  {Array.isArray(obj.publication) ? (
                    obj.publication.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>{obj.publication}</li>
                  )}
                </ul>
              </div>
            ) : (
              <div>{null}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetail;
