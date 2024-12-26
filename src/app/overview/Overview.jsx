import React from "react";
import First from "./first/First";
import Second from "./second/Second";
import Third from "./third/Third";

const Overview = () => {
  return (
    <div>
      <div className="lg:px-20 lg:py-10 px-5 py-5 bg-[#fdcbbc]">
        <div className="bg-white pt-3 px-10 rounded-lg">
          <h1 className="text-[#eb5f30] lg:text-5xl text-2xl font-semibold text-center">
            OVERVIEW
          </h1>
          <First />
          <Second />
          <Third />
        </div>
      </div>
    </div>
  );
};

export default Overview;
