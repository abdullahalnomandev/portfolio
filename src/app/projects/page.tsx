"use client";

import Headline from "@/components/ui/Headline";
import PortFolioCard from "@/components/ui/PortFolioCard";
import { projects } from "@/data/projects";
import { useState } from "react";

const PortfolioPage = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <section className="py-12">
      <Headline title="All Projects" />

      <div className="grid grid-cols-12 gap-6 my-6">
        {projects.map((item) => (
          <PortFolioCard
            key={item.id}
            item={item}
            hoverId={hoverId}
            setHoverId={setHoverId}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
