import { IPortfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

interface PortFolioCardProps {
  item: IPortfolio;
  hoverId?: number | null;
  setHoverId?: (id: number | null) => void;
}

const PortFolioCard = ({ item, hoverId, setHoverId }: PortFolioCardProps) => {
  const {
    name,
    id,
    image_url,
    frontend_github_link,
    backend_github_link,
    live_link,
    technologies,
    description,
  } = item;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className="relative flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg group transition duration-300 hover:shadow-3xl hover:-translate-y-2 max-w-md md:max-w-full mx-auto max-h-full md:max-h-80 "
    >
      {/* Image Panel */}
      <div
        className={`
      relative w-full md:w-1/2 
      h-60 md:h-auto 
      md:aspect-[4/3] 
      overflow-hidden rounded-t-3xl 
      bg-gray-100 dark:bg-slate-800 
      flex-shrink-0
    `}
      >
        <Image
          src={image_url || "/default.jpg"}
          alt={name}
          fill
          // On small devices use object-cover for full coverage, on md+ use object-contain
          className="
        object-cover md:object-contain
        transition-transform duration-500 group-hover:scale-105
      "
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Content Panel */}
      <div className="relative z-10 w-full md:w-1/2 px-6 py-5 flex flex-col justify-between bg-gray-200 dark:bg-slate-900 overflow-hidden">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 font-[cursive]">
            {name}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 py-0.5 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 mt-4 border-t border-gray-100 dark:border-slate-700 pt-3 text-sm font-medium">
          {live_link && (
            <Link
              href={live_link}
              target="_blank"
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <HiOutlineExternalLink className="text-base" /> Live
            </Link>
          )}
          <Link
            href={`/project/${id}`}
            className="flex items-center underline gap-1 text-gray-700 dark:text-gray-300 hover:underline"
          >
            <FaEye className="text-base" /> View
          </Link>
          {frontend_github_link && (
            <Link
              href={frontend_github_link}
              target="_blank"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <FaGithub className="text-base" /> Frontend
            </Link>
          )}
          {backend_github_link && (
            <Link
              href={backend_github_link}
              target="_blank"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <FaGithub className="text-base" /> Backend
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortFolioCard;
