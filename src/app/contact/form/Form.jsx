"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { form } from "@/services/user";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    Email: "",
    Phone: "",
    Location: "",
    Message: "",
    MedicalReport: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, MedicalReport: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("Fname", formData.Fname);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Phone", formData.Phone);
    formDataToSend.append("Location", formData.Location);
    formDataToSend.append("Message", formData.Message);

    if (formData.MedicalReport) {
      formDataToSend.append("MedicalReport", formData.MedicalReport);
    }

    try {
      const response = await form(formDataToSend);
      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "We have received your information.",
          icon: "success",
        });
        setFormData({
          Fname: "",
          Email: "",
          Phone: "",
          Location: "",
          Message: "",
          MedicalReport: null,
        });
        router.push("/");
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
      setLoading(false);
    }
  };



  return (
    <div className="mt-5">
      <form
        className="bg-gray-50 px-5 py-2 shadow-lg rounded-lg"
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
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
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
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
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
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Email Address"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="Location">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Location"
            name="Location"
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Location"
            value={formData.Location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 mb-1" htmlFor="Message">
            Write Problem Hindi/English <span className="text-red-500">*</span>
          </label>
          <textarea
            id="Message"
            name="Message"
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
            placeholder="Describe Health Problem..."
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="MedicalReport">
            Upload Medical Report (Optional)
          </label>
          <input
            type="file"
            id="MedicalReport"
            name="MedicalReport"
            accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg"
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
            onChange={handleFileChange}
          />

        </div>
        <div>
          {loading ? (
            <div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
              <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
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
