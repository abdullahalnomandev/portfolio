"use client";

import abdullah_al_noman from "@/assets/images/g-image.jpeg";
import banner from "@/assets/images/solutions-manufacturing-circle-left.svg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section
      className='relative z-10 bg-no-repeat bg-top bg-contain w-full sm:py-12'
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "calc(100% - 90%) top",
      }}>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8'>
        {/* Left Content */}
        <div className='md:col-span-7 space-y-6'>
          <h2 className='text-2xl font-bold font-[Bangla393] text-gray-800 tracking-wide'>
            Hello! My name is
          </h2>

          <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#6047ec] to-[#4835b4] bg-clip-text text-transparent'>
            Abdullah Al Noman
          </h1>

          <div className='text-2xl font-bold'>
            <Typewriter
              options={{
                strings: [
                  '<span style="background: linear-gradient(to right, #ff35b4, #ff193f); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">A Full-stack Web Developer</span>',
                  '<span style="background: linear-gradient(to right, #ff35b4, #ff193f); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">A Curious Web Developer</span>',
                  '<span style="background: linear-gradient(to right, #ff35b4, #ff193f); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">A Web Developer</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: "✏️",
              }}
            />
          </div>

          <p className='text-gray-600 text-lg leading-relaxed max-w-2xl dark:text-[red]'>
            A self-spurred and energetic web designer with a profound interest
            in JavaScript. To work in the Software industry with modern web
            technologies and grow quickly with increasing responsibilities.
          </p>

          <div className='flex flex-wrap gap-4 pt-4'>
            <Link href='/about'>
              <button className='btn-primary hover:scale-105 transition-transform duration-300 ease-in-out'>
                About Me
              </button>
            </Link>
            <Link href='/contact'>
              <button className='relative overflow-hidden btn-secondary border bg-transparent p-2.5 px-6 rounded text-black text-xl transition-all duration-300 ease-in-out hover:text-white border-[#ff35b4] group'>
                <span className='relative z-10'>Get In Touch</span>
                <div className='absolute inset-0 bg-gradient-to-r from-[#ff35b4] to-[#ff193f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className='hidden md:block md:col-span-5 justify-center md:justify-end'>
          <div className='group relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]'>
            {/* Main image container with 3D effect */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6047ec] to-[#ff35b4] p-1 shadow-xl transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-6 rotate-[5deg]'>
              <div className='relative h-full w-full rounded-xl overflow-hidden bg-white'>
                <Image
                  src={abdullah_al_noman}
                  alt='Abdullah Al Noman'
                  fill
                  sizes='(max-width: 768px) 280px, (max-width: 1200px) 350px, 400px'
                  className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
                  priority
                />

                {/* Professional overlay with depth */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
            </div>

            {/* Enhanced backdrop glow */}
            <div className='absolute -inset-2 bg-gradient-to-r from-[#6047ec] to-[#ff35b4] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300 -z-10'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
