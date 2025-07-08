const Headline = ({ title }: { title: string }) => {
  return (
    <div data-aos='fade-right'>
      <h1 className='text-primary text-center font-[cursive]  max-w-[380px] mx-auto py-2 mb-20 shadow-lg shadow-[#a5a4adde] text-2xl rounded-[40px]'>
        {title}
      </h1>
    </div>
  );
};

export default Headline;
