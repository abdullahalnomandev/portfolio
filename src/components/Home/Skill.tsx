"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Headline from "../ui/Headline";

const skills = [
  { id: 1, name: "Next.js", progress: 95 },
  { id: 3, name: "TypeScript", progress: 85 },
  { id: 3, name: "TypeScript", progress: 85 },
  { id: 4, name: "Node.js", progress: 75 },
  { id: 5, name: "UI/UX Design", progress: 70 },
];

const Skill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible to trigger
  });

  const [animatedProgress, setAnimatedProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      // Animate progress bars once section is in view
      setAnimatedProgress(skills.map((skill) => skill.progress));
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className='max-w-4xl mx-auto px-6 py-12'
      aria-label='Professional skills with progress bars'>
      <Headline title='Skills' />

      <div className='space-y-6 mt-10'>
        {skills.map(({ id, name }, idx) => (
          <div
            key={id}
            className={`opacity-0 ${inView ? "animate-fadeInUp" : ""}`}
            style={{ animationDelay: `${idx * 150}ms` }}>
            <div className='flex justify-between mb-1'>
              <span className='text-gray-800 font-semibold hover:text-blue-600 transition-colors cursor-default'>
                {name}
              </span>
              <span className='text-gray-600'>{animatedProgress[idx]}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-5 shadow-inner overflow-hidden'>
              <div
                className='h-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-all duration-[1200ms] ease-out'
                style={{ width: `${animatedProgress[idx]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: forwards;
          animation-duration: 600ms;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skill;
