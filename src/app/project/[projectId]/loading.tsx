export default function LoadingProject() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start animate-pulse'>
        {/* Left: image / carousel placeholder */}
        <div className='w-full max-w-xl mx-auto md:mx-0'>
          <div
            className='w-full rounded-2xl bg-gray-200 dark:bg-gray-700 shadow-2xl'
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>

        {/* Right: text & buttons placeholder */}
        <div className='space-y-6'>
          {/* Title */}
          <div className='h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700' />

          {/* Description (3 lines) */}
          <div className='space-y-3'>
            <div className='h-4 w-full rounded bg-gray-200 dark:bg-gray-700' />
            <div className='h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-700' />
            <div className='h-4 w-10/12 rounded bg-gray-200 dark:bg-gray-700' />
          </div>

          {/* Tech badges (row of pills) */}
          <div className='flex flex-wrap gap-2'>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className='h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700'
              />
            ))}
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 pt-2'>
            <div className='h-10 w-32 rounded bg-gray-200 dark:bg-gray-700' />
            <div className='h-10 w-36 rounded bg-gray-200 dark:bg-gray-700' />
            <div className='h-10 w-36 rounded bg-gray-200 dark:bg-gray-700' />
          </div>
        </div>
      </div>
    </div>
  );
}
