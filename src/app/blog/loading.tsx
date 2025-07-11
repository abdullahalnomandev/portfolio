import Skeleton from "@/components/ui/Skeleton";

const BlogSkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 dark:bg-slate-900'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-4 dark:border-slate-800 dark:bg-slate-800'>
          {/* Image Skeleton */}
          <Skeleton className='h-52 w-full rounded-lg' />

          {/* Title */}
          <Skeleton className='h-4 w-3/4' />

          {/* Meta Info */}
          <div className='flex space-x-2'>
            <Skeleton className='h-3 w-20' />
            <Skeleton className='h-3 w-12' />
          </div>

          {/* Excerpt */}
          <Skeleton className='h-3 w-full' />
          <Skeleton className='h-3 w-5/6' />
          <Skeleton className='h-3 w-2/3' />

          {/* Button */}
          <Skeleton className='h-4 w-24 mt-2' />
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
