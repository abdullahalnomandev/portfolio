const Headline = ({ title }: { title: string }) => {
  return (
    // <h1 className="text-center  font-[cursive] border text-[25px] text-white w-80 m-auto py-1 rounded-full  bg-[#6047ec] shadow-purple-200
    // ">
    //   {title}
    // </h1>
    <h1 className="text-primary text-center font-[cursive]  max-w-[380px] mx-auto py-2 mb-20 shadow-lg shadow-[#a5a4adde] text-2xl rounded-[40px]">
      {title}
    </h1>
  );
};

export default Headline;
