import { IPortfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub, FaLink } from "react-icons/fa";

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
      data-aos='flip-left'
      data-aos-duration='1000'
      className={`col-span-12 md:col-span-6 lg:col-span-4 transition-transform duration-300 
      }`}
      onMouseEnter={() => setHoverId?.(id)}
      onMouseLeave={() => setHoverId?.(null)}>
      <div className='h-full flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 '>
        {/* Image with Hover Description */}
        <div className='relative h-48 overflow-hidden'>
          <Image
            src={image_url || "/default.jpg"}
            alt={name}
            fill
            className='object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black bg-opacity-70 text-white p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm'>
            <p className='line-clamp-9'>{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className='p-5 flex flex-col flex-1 space-y-4'>
          <h3 className='text-lg font-semibold text-gray-900'>{name}</h3>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2 min-h-[60px] items-start'>
            {technologies.map((tech, i) => (
              <span
                key={i}
                className='inline-block bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Links */}
          <div className='mt-auto pt-2 flex flex-wrap gap-3'>
            {live_link && (
              <Link
                href={live_link}
                target='_blank'
                className='inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors'>
                <FaLink className='mr-1' />
                Live
              </Link>
            )}
            {frontend_github_link && (
              <Link
                href={frontend_github_link}
                target='_blank'
                className='inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors'>
                <FaGithub className='mr-1' />
                Frontend
              </Link>
            )}
            {backend_github_link && (
              <Link
                href={backend_github_link}
                target='_blank'
                className='inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors'>
                <FaGithub className='mr-1' />
                Backend
              </Link>
            )}
            <Link
              href={`/project/${id}`}
              className='inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors'>
              <FaEye className='mr-1' />
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioCard;
