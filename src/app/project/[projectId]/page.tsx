import { projects } from "@/data/projects";
import { IPortfolio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const getProject = async (
    projectId: string
  ): Promise<IPortfolio | undefined> => {
    const id = parseInt(projectId);
    return projects.find((project) => project.id === id);
  };

  const project = await getProject(params.projectId); // ✅ Call getProject

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>

      {/* Image */}
      {project.image_url && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={project.image_url}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="text-gray-700 text-base leading-relaxed">
        {project.description}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string, i: number) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 pt-4">
        {project.live_link && (
          <Link
            href={project.live_link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
          >
            <FaLink /> Live Site
          </Link>
        )}
        {project.frontend_github_link && (
          <Link
            href={project.frontend_github_link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
          >
            <FaGithub /> Frontend Code
          </Link>
        )}
        {project.backend_github_link && (
          <Link
            href={project.backend_github_link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
          >
            <FaGithub /> Backend Code
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
