import React from "react";
import ExpertDetail from "./ExpertDetail";

const page = async ({ params }) => {
  const {id} = await params;
  console.log(id);
  return (
    <div>
      <ExpertDetail id={id} />
    </div>
  );
};

export default page;
