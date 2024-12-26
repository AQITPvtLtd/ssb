import Link from "next/link";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Form from "./form/Form";
import Socialicon from "./Socialicon";

const Contact = () => {
  return (
    <div className="dark:bg-white">
      <h1 className="text-center font-semibold lg:text-4xl text-2xl py-10 text-[#eb5f30]">
        Contact us
      </h1>
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-start-2 col-span-5 px-5 lg:px-0">
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="px-4 py-2 rounded-2xl"
          >
            {/* Emergency Appointment Section */}
            <div>
              <div className="flex gap-2">
                <IoIosCall className="text-xl text-[#eb5f30]" />
                <p className="font-semibold text-lg text-gray-800">
                  Emergency:
                </p>
                <Link
                  href="tel:+91 954 011 4114"
                  className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
                >
                  +91 954 011 4114
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center">
                  <IoIosCall className="text-xl mt-1 text-[#eb5f30]" />
                  <p className="font-semibold text-lg text-gray-800 ml-2">
                    Appointment:
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:ml-2">
                  <Link
                    href="tel:+91 98736 98775"
                    className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
                  >
                    +91 98736 98775,
                  </Link>
                  <Link
                    href="tel:+91 99587 92906"
                    className="font-semibold text-lg text-blue-600 hover:text-[#eb5f30]"
                  >
                    +91 99587 92906
                  </Link>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex gap-2 pt-2 items-center ">
              <IoMdMail className="text-xl text-blue-600" />
              <Link
                href="mailto:info@ssbhealthcare.com"
                className="text-lg font-semibold text-gray-800 hover:text-[#eb5f30]"
              >
                info@ssbhealthcare.com
              </Link>
            </div>

            {/* Address Section */}
            <div className="flex pt-2 gap-2">
              <FaLocationDot className="lg:text-xl mt-1 text-4xl text-red-600" />
              <p className="text-lg font-semibold text-gray-800 max-w-md hover:text-[#eb5f30]">
                Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A,
                Faridabad, Haryana 121002
              </p>
            </div>
          </div>

          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="px-4 py-2 rounded-2xl mt-10"
          >
            <h3 className="text-center font-bold text-2xl pt-2 dark:text-gray-900">
              Connect with us on Social Media
            </h3>
            <p className="text-center font-semibold text-lg pt-2 dark:text-gray-900">
              Stay updated with SSB Hospital! Follow us on social media for the
              latest news, updates, and health tips. Join our community and stay
              connected
            </p>
            <Socialicon />
          </div>
        </div>

        <div className="col-start-8 col-span-6 lg:px-0 lg:py-0 py-10 px-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
