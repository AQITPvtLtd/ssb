"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { form } from "@/services/user";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    Fname: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Start loading spinner

    try {
      const response = await form(formData);

      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "We have received your information.",
          icon: "success",
        });

        setformData({
          Fname: "",
          Email: "",
          Phone: "",
          Message: "",
        });

        router.push("/"); // Redirect to home page
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit the form. Please check your network and try again.",
      });
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div>
      <form
        className="bg-gray-50 p-8 shadow-lg rounded-lg max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact us</h3>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="Fname">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Full Name"
            value={formData.Fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="Phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="Phone"
            name="Phone"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Phone Number"
            value={formData.Phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="Email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Email Address"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="Message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="Message"
            name="Message"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Write Your Message Here..."
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
              <ClipLoader
                width="60"
                height="60"
                color="#eb5f30"
                className="animate-spin"
              />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
