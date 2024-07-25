import React from "react";

const Headline = ({ title }: { title: string }) => {
  return (
    <h1 className="text-center border border-blue-400 w-64 m-auto py-1 rounded-full ">
      {title}
    </h1>
  );
};

export default Headline;
