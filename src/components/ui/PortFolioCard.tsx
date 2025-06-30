import { IPortfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

interface IProps extends IPortfolio {
  hoverId?: string;
  setHoverId?: (id: string) => void;
}

const PortFolioCard = ({
  item,
  hoverId,
  setHoverId,
}: {
  item: IProps;
  hoverId?: string;
  setHoverId?: (id: string) => void;
}) => {
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
      className={`col-span-12 md:col-span-6 lg:col-span-4 transition-transform duration-300 ${
        hoverId === id ? "scale-[1.03]" : ""
      }`}
      onMouseEnter={() => setHoverId?.(id)}
      onMouseLeave={() => setHoverId?.("")}>
      <div className='h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
        {/* Image */}
        <div className='h-48 relative'>
          <Image
            src={image_url || "/default.jpg"}
            alt={name}
            fill
            className='object-cover rounded-t-xl'
          />
        </div>

        {/* Content */}
        <div className='p-5 flex flex-col flex-1 space-y-3'>
          <h3 className='text-xl font-bold text-gray-900'>{name}</h3>

          <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>
            {description}
          </p>

          {/* Technologies with fixed height space */}
          <div className='flex flex-wrap gap-2 min-h-[60px] items-start'>
            {technologies.map((tech, i) => (
              <span
                key={i}
                className='inline-block bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>

          {/* Push footer to bottom */}
          <div className='mt-auto pt-3 flex flex-wrap gap-4'>
            {live_link && (
              <Link
                href={live_link}
                target='_blank'
                className='text-blue-600 hover:text-blue-800 text-sm inline-flex items-center gap-1'>
                <FaLink className='text-base' />
                Live Site
              </Link>
            )}
            {frontend_github_link && (
              <Link
                href={frontend_github_link}
                target='_blank'
                className='text-gray-800 hover:text-black text-sm inline-flex items-center gap-1'>
                <FaGithub className='text-base' />
                Frontend
              </Link>
            )}
            {backend_github_link && (
              <Link
                href={backend_github_link}
                target='_blank'
                className='text-gray-800 hover:text-black text-sm inline-flex items-center gap-1'>
                <FaGithub className='text-base' />
                Backend
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioCard;
