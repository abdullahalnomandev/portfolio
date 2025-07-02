"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Headline from "../ui/Headline";
import PortFolioCard from "../ui/PortFolioCard";

const LatestPortfolio = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <section className="py-12 ">
      <Headline title="My Latest Projects" />

      <div className="grid grid-cols-12 gap-6 my-6">
        {projects
          .filter(({ hasShortlist }) => hasShortlist)
          .map((item) => (
            <PortFolioCard
              key={item.id}
              item={{ ...item, image_url: item.image_url || "" }}
              hoverId={hoverId}
              setHoverId={setHoverId}
            />
          ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/portfolio"
          className="inline-block border border-blue-500 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default LatestPortfolio;
