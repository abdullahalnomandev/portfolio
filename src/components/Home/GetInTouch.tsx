"use client";

import Link from "next/link";

const GetInTouch = () => {
  return (
    <section
      className='max-w-3xl mx-auto p-8 text-center dark:bg-gray-900'
      data-aos='fade-up'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
        Get In Touch
      </h2>
      <p className='text-gray-700 dark:text-gray-300 mb-8 leading-relaxed'>
        I&apos;d like to hear from you. Regardless of whether you suffer a heart
        attack or simply need to say hey, go ahead and drop a message. I&apos;ll
        make an honest effort to hit you up!
      </p>
      <Link href='/contact' passHref>
        <button className='relative overflow-hidden btn-secondary border bg-transparent p-2.5 px-6 rounded text-black dark:text-white text-xl transition-all duration-300 ease-in-out hover:text-white border-[#ff35b4] group'>
          <span className='relative z-10'>Say Hi!</span>
          <div className='absolute inset-0 bg-gradient-to-r from-[#ff35b4] to-[#ff193f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
        </button>
      </Link>
    </section>
  );
};

export default GetInTouch;
