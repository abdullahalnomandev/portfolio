"use client";
import noman from "@/assets/images/Abdullah_Al_Noman.jpg";
import Image from "next/image";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const AboutPage = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href =
        "https://drive.google.com/uc?export=download&id=1w3HHHWQdlnVeOcNjlNOYjBhByS00qhmD";
      setLoading(false);
    }, 150);
  };

  // Skill data
  const skillSections = [
    {
      title: "Expertise",
      skills: [
        "Next.js",
        "React",
        "Redux",
        "Typescript",
        "Javascript",
        "N8n",
        "Tailwind",
        "Ant Design",
        "SQL",
        "NOSQL",
        "Prisma",
        "Bootstrap.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Comfortable",
      skills: ["React Native", "Material UI", "CI/CD", "AI", "AWS"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Webpack",
        "Create React App",
        "VS Code",
        "Netlify",
        "Heroku",
      ],
    },
  ];

  return (
    <section className='bg-[#f4f6ff] min-h-screen px-8 py-16 md:px-20 md:py-24 font-sans text-gray-900'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        {/* Left side */}
        <div className='space-y-8 text-center md:text-left'>
          <div className='relative w-64 h-64 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg'>
            <Image
              src={noman}
              alt='Abdullah Al Noman'
              fill
              sizes='(max-width: 768px) 100vw, 25vw'
              className='object-cover'
              priority
            />
          </div>
          <h1 className='text-3xl md:text-4xl font-extrabold'>
            <span className='text-pink-500'>I&apos;m</span>{" "}
            <span className='text-gray-900'>Abdullah Al Noman</span>
          </h1>
          <p className='max-w-md mx-auto md:mx-0 text-base md:text-lg text-gray-700 leading-relaxed'>
            A self-spurred and energetic web designer with a profound interest
            in JavaScript. To work in the Software business with current web
            innovations of various neighborhood and worldwide Software/IT
            offices of Bangladesh and develop quickly with expanding duties.
          </p>
          <button
            onClick={handleDownloadClick}
            disabled={loading}
            className='btn-primary flex items-center gap-2 disabled:cursor-not-allowed'
            aria-label='Download CV'>
            <FiDownload className='text-xl' />
            {loading ? "Downloading..." : "Download CV"}
          </button>
        </div>

        {/* Right side */}
        <div className='space-y-10'>
          {skillSections.map(({ title, skills }) => (
            <section key={title}>
              <h2 className='text-pink-500 font-bold text-xl md:text-2xl inline-block border-b-2 border-blue-500 mb-6'>
                {title}
              </h2>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='text-primary text-xs md:text-base px-3 py-1 rounded-lg shadow-sm'>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
