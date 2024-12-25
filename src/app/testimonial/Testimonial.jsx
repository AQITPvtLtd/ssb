import React from "react";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
