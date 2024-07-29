import React from "react";

const Headline = ({ title }: { title: string }) => {
  return (
    <h1 className="text-center  font-[cursive] border text-[25px] text-white w-80 m-auto py-1 rounded-full  bg-[#6047ec] shadow-purple-200
    ">
      {title}
    </h1>
  );
};

export default Headline;
