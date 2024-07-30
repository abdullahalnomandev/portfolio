import Image from "next/image";
import abdullah_al_noman from "@/assets/images/Abdullah_Al_Noman.jpg";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import banner from '@/assets/images/solutions-manufacturing-circle-left.svg';
import { GoPencil } from "react-icons/go";

const Banner = () => {
  const imageStyles: React.CSSProperties = {
    borderRadius: '50%',
    border: '2px solid transparent',
    padding: '3px',
    borderColor: '#6047ec', // Tailwind blue-500
    objectFit: 'cover',
    transition: 'transform 0.3s',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)' 
  };

  const rotatingBorderContainerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '350px',
    height: 'auto', // Set to auto to maintain aspect ratio
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const rotatingBorderStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: '#6047ec',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box', // Include border in element's dimensions
    animation: 'rotate 2.5s linear infinite',
  };

  const bannerContainerStyles: React.CSSProperties = {
    backgroundImage: `url(${banner.src})`, // Correctly reference the image URL
    backgroundSize: "contain",
    backgroundPosition: "calc(100% - 75%) top", // Adjusted position
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className=" px-3 z-10" style={bannerContainerStyles}>
      <div className="mb-6 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Content */}
          <div className="md:col-span-7 col-span-full">
            <h1 className="text-2xl font-bold  font-[Bangla393]"  >

              Hello! My name is</h1>
            <h1 className="font-bold text-4xl pb-3 text-[#6047ec] ">Abdullah Al Noman</h1>
            <h1 className="font-bold text-2xl animate-fadeIn delay-1s">
              <Typewriter
                options={{
                  strings: ['<span style="color:#ff35b4">A Full-stack Web Developer</span>', '<span style="color:#ff35b4">A Curious Web Developer</span>', '<span style="color:#ff35b4">A Web Developer</span>'],
                  delay: 75,
                  autoStart: true,
                  loop: true,
                  cursor:"✏️"
                  
                }}
              />
            </h1>
            <p className="py-8 text-justify text-gray-500 animate-fadeIn delay-2s">
              A self-spurred and energetic web designer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.
            </p>
            <div className="flex gap-2 items-center">
              <Link href="/about">
                <button className="btn-primary scale-100 hover:scale-105 duration-300 ">
                  About Me
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary border duration-500 bg-gradient-to-br hover:to-[#ff35b4] hover:from-[#ff193f] p-2.5 px-6 rounded  text-black hover:text-white text-xl scale-100 hover:scale-105 transition border-[#ff35b4] ">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="col-span-full md:col-span-5 flex justify-center md:justify-end mt-4 md:mt-0 ">
            <div style={rotatingBorderContainerStyles}>
              <div style={rotatingBorderStyles}></div>
              <Image
                src={abdullah_al_noman}
                width={350}
                height={350}
                alt="Abdullah Al Noman"
                title="Abdullah Al Noman"
                style={imageStyles}
                className="hover:scale-105 scale-100 " // Tailwind class for hover effect
              />
            </div>
            <style jsx>{`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Banner;