"use client"
import Link from "next/link";
import portfolio from "../../data/portfolio.json";
import Image from "next/image";
import noman from "@/assets/images/noman.jpeg";
import Headline from "../ui/Headline";
import { useState } from "react";
const LatestPortfolio = () => {

  const [hoverId, setHoverId] = useState<string| any>("")
  return (
    <div>
      <Headline title="Latest Projects" />
      <div className="grid grid-cols-12 my-3">
        {portfolio
          .filter(({ hasShortlist }) => hasShortlist)
          .map(
            ({
              name,
              id,
              frontend_github_link,
              description,
              image_url,
              technologies,
            }) => (
              <div
                className={`col-span-12  lg:col-span-6 xl:col-span-4 my-2 mr-4 last:mr-0  `}
                key={id}
                onMouseOver={()=> setHoverId(id)}
                onMouseLeave={()=> setHoverId("")}
              >
                <div className={` p-1 rounded-md shadow overflow-hidden 
                `}>
                  <Image
                    src={image_url || noman}
                    alt={name}
                    className={`object-cover w-full h-64
                    scale-100  duration-300
                    ${hoverId === id?"scale-105 ":""}
                    `}
                  />
                  <Link
                    className={`text-blue-700 font-medium block mt-1 transition duration-300 ${hoverId === id?"underline":""}`}
                    target="_blank"
                    href={frontend_github_link}
                  >
                    {name}
                  </Link>
                  <p>Technologies:</p>
                  {technologies.map((technology, i) => (
                    <span
                      className="bg-blue-500 ml-0 text-[13px] py-[2.5px] px-[5px] text-white m-1 rounded-full font-normal 
                     hover:bg-blue-800 transition duration-500
                    "
                      key={i}
                    >
                      {technology}
                    </span>
                  ))}
                  <p className="text-gray-400">{description}</p>
                  live:
                  <Link href={frontend_github_link} target="_blank">
                    Front-end
                  </Link>
                </div>
              </div>
            )
          )}
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
