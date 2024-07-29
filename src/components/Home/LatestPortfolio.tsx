"use client"
import Link from "next/link";
import portfolio from "../../data/portfolio.json";
import Headline from "../ui/Headline";
import { useState } from "react";
import PortFolioCard from "../ui/PortFolioCard";
const LatestPortfolio = () => {
  const [hoverId, setHoverId] = useState<string | any>("")

  return (
    <div>
      <Headline title="Latest Projects" />
      <div className="grid grid-cols-12 my-3">
        {portfolio.filter(({ hasShortlist }) => hasShortlist).map((item) => (
        <PortFolioCard key={item.id} item={{ ...item, image_url: item.image_url || '' }} 
         hoverId={hoverId}
         setHoverId={setHoverId}
        />
        ))}
      </div>
      <Link
        href="/portfolio"
        className="text-center border border-blue-400 w-36 m-auto py-1 rounded-full block "
      >
        See More
      </Link>
    </div>
  );
};

export default LatestPortfolio;

