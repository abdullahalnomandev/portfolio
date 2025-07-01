const LoadingPage = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center bg-white '>
      <div className='relative flex items-center justify-center'>
        <div className='h-28 w-28 rounded-full border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent animate-spin'></div>
        <div className='absolute'>
          <div className='h-20 w-20 rounded-full border-4 border-t-secondary border-r-transparent border-b-secondary border-l-transparent animate-spin-reverse'></div>
        </div>
      </div>
      <div className='mt-10 text-center'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          Loading Content
          <span className='inline-block animate-bounce'>.</span>
          <span className='inline-block animate-bounce delay-100'>.</span>
          <span className='inline-block animate-bounce delay-200'>.</span>
        </h2>
        <p className='mt-3 text-base text-gray-600 dark:text-gray-400'>
          We&apos;re preparing your experience. This may take a moment.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
