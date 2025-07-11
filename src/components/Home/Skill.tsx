"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Headline from "../ui/Headline";

// Label generator
const getSkillLabel = (progress: number): string => {
  if (progress >= 90) return "Expert";
  if (progress >= 75) return "Advanced";
  if (progress >= 50) return "Intermediate";
  return "Beginner";
};

// Skill Data
const frontendSkills = [
  { id: "f1", name: "Next.js", progress: 95 },
  { id: "f2", name: "JavaScript", progress: 90 },
  { id: "f3", name: "TypeScript", progress: 85 },
  { id: "f4", name: "SHADCN UI", progress: 85 },
  { id: "f5", name: "Tailwind CSS", progress: 80 },
  { id: "f6", name: "React", progress: 70 },
  { id: "f7", name: "Redux", progress: 70 },
];

const backendSkills = [
  { id: "b1", name: "Node.js", progress: 80 },
  { id: "b2", name: "Express.js", progress: 75 },
  { id: "b3", name: "N8N", progress: 70 },
  { id: "b4", name: "PostgreSQL", progress: 65 },
  { id: "b5", name: "NoSQL", progress: 65 },
  { id: "b6", name: "AI", progress: 65 },
  { id: "b7", name: "Prisma", progress: 65 },
];

// Skill bar component
const SkillBar = ({
  name,
  progress,
  animatedProgress,
  idx,
  inView,
}: {
  name: string;
  progress: number;
  animatedProgress: number;
  idx: number;
  inView: boolean;
}) => (
  <div
    className={`transition-opacity duration-700 ${
      inView ? "opacity-100 animate-fadeInUp" : "opacity-0"
    }`}
    style={{ animationDelay: `${idx * 150}ms` }}>
    <div className='flex justify-between mb-1'>
      <span className='font-medium text-gray-800 dark:text-gray-200'>
        {name}
      </span>
      <span className='text-sm italic text-gray-600 dark:text-gray-400'>
        {getSkillLabel(progress)}
      </span>
    </div>
    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner overflow-hidden'>
      <div
        className='h-4 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-full transition-all duration-1000 ease-out'
        style={{ width: `${animatedProgress}%` }}
      />
    </div>
  </div>
);

// Section column component
const SkillSection = ({
  title,
  skills,
  animatedProgress,
  inView,
  titleColor,
}: {
  title: string;
  skills: { id: string; name: string; progress: number }[];
  animatedProgress: number[];
  inView: boolean;
  titleColor: string;
}) => (
  <div className='w-full md:w-1/2 px-2'>
    <h3 className={`text-xl font-bold ${titleColor} mb-4`}>{title}</h3>
    <div className='space-y-5'>
      {skills.map((skill, idx) => (
        <SkillBar
          key={skill.id}
          name={skill.name}
          progress={skill.progress}
          animatedProgress={animatedProgress[idx] ?? 0}
          idx={idx}
          inView={inView}
        />
      ))}
    </div>
  </div>
);

// Main component
const Skill = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [frontendProgress, setFrontendProgress] = useState<number[]>([]);
  const [backendProgress, setBackendProgress] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      setFrontendProgress(frontendSkills.map((s) => s.progress));
      setBackendProgress(backendSkills.map((s) => s.progress));
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className='max-w-6xl mx-auto px-6 py-12'
      aria-label='Skills section'>
      <Headline title='Skills' />

      <div className=' flex flex-col md:flex-row md:space-x-6 space-y-12 md:space-y-0'>
        <SkillSection
          title='Frontend Skills'
          skills={frontendSkills}
          animatedProgress={frontendProgress}
          inView={inView}
          titleColor='text-pink-500'
        />
        <SkillSection
          title='Backend Skills'
          skills={backendSkills}
          animatedProgress={backendProgress}
          inView={inView}
          titleColor='text-pink-500'
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skill;
