"use client";

import Headline from "@/components/ui/Headline";
import PortFolioCard from "@/components/ui/PortFolioCard";
import { projects } from "@/data/projects";
import { useState } from "react";

const PortfolioPage = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initial visible projects

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className='py-12'>
      <Headline title='All Projects' />

      <div className='space-y-8 my-6'>
        {visibleProjects.map((item) => (
          <PortFolioCard
            key={item.id}
            item={{ ...item, image_url: item.image_url || "" }}
            hoverId={hoverId}
            setHoverId={setHoverId}
          />
        ))}
      </div>

      {hasMore && (
        <div className='text-center mt-10'>
          <button
            onClick={handleSeeMore}
            className='inline-block border border-blue-500 text-blue-600 dark:text-blue-400 
              px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white 
              dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-300'>
            See More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioPage;
