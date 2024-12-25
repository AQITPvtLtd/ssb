import React from "react";
import ExpertDetail from "./ExpertDetail";

const page = async ({ params }) => {
  console.log(params);
  const id = params.id;
  console.log(id);
  return (
    <div>
      <ExpertDetail id={id} />
    </div>
  );
};

export default page;
