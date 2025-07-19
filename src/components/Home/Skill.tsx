"use client";
import Image from "next/image";
import Headline from "../ui/Headline";

// Separated Skill Data
const frontendSkills = [
  {
    id: "7",
    name: "Next.js",
    icon: "https://img.icons8.com/fluent-systems-filled/512/nextjs.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "4",
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "1",
    name: "JavaScript",
    icon: "https://banner2.cleanpng.com/20180605/yjb/aa9yal4pp.webp",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "2",
    name: "React JS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },

  {
    id: "10",
    name: "Redux",
    icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },

  {
    id: "12",
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
];

const backendSkills = [
  {
    id: "3",
    name: "Node JS",
    icon: "https://freepngimg.com/download/github/71302-express.js-chrome-javascript-system-node.js-v8-runtime.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "5",
    name: "Express JS",
    icon: "https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "6",
    name: "MongoDB",
    icon: "https://images.icon-icons.com/2415/PNG/512/mongodb_plain_logo_icon_146422.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "8",
    name: "PostgresQl",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "11",
    name: "GraphQl",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/500px-GraphQL_Logo.svg.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
  {
    id: "12",
    name: "Prisma",
    icon: "https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png",
    bgColor: "bg-gray-200 dark:bg-slate-800",
  },
];

// Skill card component
const SkillCard = ({
  name,
  icon,
  bgColor,
  idx,
}: {
  name: string;
  icon: string;
  bgColor: string;
  idx: number;
}) => (
  <div
    className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-lg transition hover:transition`}
    data-aos='fade-up'
    data-aos-delay={idx * 50}
    data-aos-duration='600'>
    {icon.startsWith("http") ? (
      <Image
        src={icon}
        alt={name}
        width={48}
        height={48}
        className='mb-3 object-contain w-12 h-12'
      />
    ) : (
      <div className='text-4xl mb-3'>{icon}</div>
    )}
    <h3 className='text-blue-500 dark:text-slate-300 font-medium text-lg'>
      {name}
    </h3>
  </div>
);

// Main component
const Skill = () => {
  return (
    <section
      className='max-w-7xl mx-auto px-6 py-12'
      aria-label='Skills section'>
      <Headline title='Some of My Skills' />
      {/* Frontend Skills */}
      <h2 className='text-xl font-semibold text-slate-700 dark:text-white mt-10 mb-4'>
        Frontend
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {frontendSkills.map((skill, idx) => (
          <SkillCard key={skill.id} {...skill} idx={idx} />
        ))}
      </div>

      {/* Backend Skills */}
      <h2 className='text-xl font-semibold text-slate-700 dark:text-white mt-10 mb-4'>
        Backend
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {backendSkills.map((skill, idx) => (
          <SkillCard key={skill.id} {...skill} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skill;
