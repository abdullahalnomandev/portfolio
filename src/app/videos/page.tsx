"use client";

import { videos } from "@/components/videos/Video";

const VideoPage = () => {
  return (
    <div className='grid gap-6 p-6 md:grid-cols-2'>
      {videos.map((video) => (
        <div
          key={video.id}
          className='relative w-full aspect-video overflow-hidden rounded shadow-md'>
          {video.embedCode}
        </div>
      ))}
    </div>
  );
};

export default VideoPage;
