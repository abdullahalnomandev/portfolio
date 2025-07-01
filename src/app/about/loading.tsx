import Skeleton from "@/components/ui/Skeleton";

const AboutPageSkeleton = () => {
  return (
    <section className='bg-[#f4f6ff] min-h-screen px-8 py-16 md:px-20 md:py-24 font-sans text-gray-900'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        {/* Left Side Skeleton */}
        <div className='space-y-8 text-center md:text-left'>
          <Skeleton className='relative w-64 h-64 mx-auto md:mx-0 rounded-xl' />

          <Skeleton className='h-8 w-3/4 mx-auto md:mx-0 rounded' />
          <Skeleton className='h-4 w-5/6 mx-auto md:mx-0 rounded' />
          <Skeleton className='h-4 w-full mx-auto md:mx-0 rounded' />
          <Skeleton className='h-4 w-2/3 mx-auto md:mx-0 rounded' />
          <Skeleton className='h-10 w-40 mx-auto md:mx-0 rounded mt-4' />
        </div>

        {/* Right Side Skills Skeleton */}
        <div className='space-y-10'>
          {[1, 2, 3].map((section) => (
            <div key={section}>
              <Skeleton className='h-6 w-32 rounded mb-4' />
              <div className='flex flex-wrap gap-3'>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className='h-6 w-20 rounded-full' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageSkeleton;
