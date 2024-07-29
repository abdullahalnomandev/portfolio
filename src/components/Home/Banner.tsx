import Image from "next/image";
import abdullah_al_noman from "@/assets/images/Abdullah_Al_Noman.jpg";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className="mb-6 mt-14">
      <div className="grid grid-cols-12">
        {/* Content  */}
        <div className="sm:col-span-7 col-span-full">
          <h3 className="text-xl font-serif">Hello! My name is</h3>
          <h1 className="font-bold text-4xl pb-2">Abdullah Al Noman</h1>
          <h1 className="font-bold text-2xl animate-fadeIn delay-1s">
            <Typewriter
              options={{
                strings: ['A full-stack web developer', 'A Curious web Developer', "Web Developer"],
                delay: 75,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-8 text-justify text-gray-500 animate-fadeIn delay-2s">
            A self-spurred and energetic web designer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.

          </p>
          <div className="buttons flex gap-2 items-center">
            <Link href="/about">
              <button className="font-sans px-2 py-2 border rounded-lg w-30 border-blue-700 bg-blue-600 transition text-white hover:text-blue-600 hover:bg-white scale-100 hover:scale-105 duration-300 animate-bounceIn">
                About Me
              </button>
            </Link>
            <Link href="/contact">
              <button className="font-sans px-2  py-2 border rounded-lg w-30 text-blue-600 border-blue-700 hover:bg-blue-600 transition hover:text-white scale-100 hover:scale-105 duration-300 animate-bounceIn delay-1s">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
        {/* Image  */}
        <div className="mt-3 md:mt-0 col-span-full sm:col-span-5 text-justify flex justify-start md:justify-end relative">

          <div className="relative">
            <Image
              src={abdullah_al_noman}
              width={350}
              height={350}
              alt="Abdullah Al Noman"
              title="Abdullah Al Noman"
              className="rounded-full ring-2 p-[3px] ring-blue-400 object-cover 
              transition-transform scale-100 hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;