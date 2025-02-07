import React from "react";
import Link from "next/link";
const Testimonial = () => {
  return (
    <div>
      <h1 className="text-[#eb5f30] lg:text-4xl text-2xl text-center font-bold py-6">
        PATIENT TESTIMONIAL
      </h1>

      <div className="lg:grid grid-cols-12">
        <div className="col-start-5 col-span-4">
          <div
            style={{
              maxWidth: "100%",
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RUCr6-q57Fc?si=85S8Bm7yMkJ9XX3O"
              title="YouTube video player"
              className="rounded-2xl px-7 py-5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="text-center py-5">
            <h3 className="font-semibold lg:text-2xl text-lg text-[#eb5f30]">
              Knee Replacement Surgery
            </h3>
            <h2 className="font-semibold lg:text-3xl text-xl text-[#eb5f30]">
              Dr. Shailendra Pratap Singh
            </h2>

            <Link
              href="#queryForm"
              className="inline-block px-4 py-2 mt-5 hover:rounded-xl border-2 border-[#eb5f30] text-[#eb5f30] text-sm font-semibold hover:bg-[#eb5f30] hover:text-white transition-all duration-300"
            >
              Submit Your Query
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Testimonial;
