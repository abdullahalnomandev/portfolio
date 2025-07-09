"use client";

import { projects } from "@/data/projects";
import { IPortfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  const projectId = params.projectId;
  const getProject = async (projectId: string): Promise<IPortfolio> => {
    const id = parseInt(projectId);
    const project = projects?.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }
    // Ensure images property exists with default empty array
    return Promise.resolve({
      ...project,
      images: project.images || [],
    });
  };

  // Use state to handle async data
  const [project, setProject] = useState<IPortfolio | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch project data on component mount
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProject(projectId);
        setProject(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchProject();
  }, [projectId]);

  if (error) {
    return (
      <div className='p-10 text-center text-red-500 font-semibold'>{error}</div>
    );
  }

  if (!project) {
    return <div className='p-10 text-center'>Loading...</div>;
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* Left: Swiper Carousel */}
        {project.images?.length > 0 && (
          <div
            className='w-full max-w-xl mx-auto md:mx-0'
            data-aos='fade-right'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              lazy={true} // Lazy load images for performance
              modules={[Navigation, Pagination]}
              className='rounded-2xl overflow-hidden shadow-2xl border border-gray-200'
              style={{ aspectRatio: "16 / 9" }} // Maintain aspect ratio
              fadeEffect={{ crossFade: true }}
              effect='fade'>
              {project.images.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className='relative w-full h-full'>
                    {index === 0 ? (
                      <Image
                        src={url}
                        alt={`Project image ${index + 1}`}
                        fill
                        className='object-cover object-center rounded-2xl'
                        priority
                      />
                    ) : (
                      <Image
                        src={url}
                        alt={`Project image ${index + 1}`}
                        fill
                        className='object-cover object-center rounded-2xl'
                        loading='lazy'
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Right: Content */}
        <div className='space-y-6' data-aos='fade-left'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-1'>
              {project.name}
            </h1>
            <p className='text-base text-gray-600'>
              {project.short_description || "Project Details"}
            </p>
          </div>

          <div className='text-gray-700 text-base leading-relaxed'>
            {project.description}
          </div>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2 min-h-[60px] items-start'>
            {(project.technologies ?? []).map((tech, i) => (
              <span
                key={i}
                className='inline-block bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>

          <div className='flex flex-wrap gap-4 pt-2'>
            {project.live_link && (
              <Link
                href={project.live_link}
                target='_blank'
                className='inline-flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded hover:from-blue-500 hover:to-blue-600 shadow hover:opacity-90 transition-colors duration-300'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay='300'>
                <FaLink /> Live Site
              </Link>
            )}
            {project.frontend_github_link && (
              <Link
                href={project.frontend_github_link}
                target='_blank'
                className='inline-flex items-center gap-2 px-4 py-2 text-black bg-pink-100 rounded shadow hover:bg-pink-200 transition-colors duration-300'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay='300'>
                <FaGithub /> Frontend Code
              </Link>
            )}
            {project.backend_github_link && (
              <Link
                href={project.backend_github_link}
                target='_blank'
                className='inline-flex items-center gap-2 px-4 py-2 text-black bg-pink-50 rounded shadow hover:bg-pink-100 transition-colors duration-300'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay='300'>
                <FaGithub /> Backend Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
