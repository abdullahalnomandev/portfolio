"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import abdullah_al_noman_log from '@/assets/images/Abdullah_Al_Noman_Logo.png';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1; // Adjust this value as needed
      setIsFixed(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`  flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-16 shadow-md text-primary font-bold ${isFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            src={abdullah_al_noman_log}
            width={80}
            height={50}
            alt="Abdullah Al Noman"
            title="Abdullah Al Noman"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-600 focus:outline-none"
          >
            {isOpen ? <RxCross2 className="text-red-600 text-3xl" /> : <FiMenu className="text-white text-3xl" />}
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? "flex" : "hidden"} flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:justify-end items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <Link className=" hover:text-blue-500 p-2" href="/">Home</Link>
            <Link className=" hover:text-blue-500 p-2" href="/about">About</Link>
            <Link className=" hover:text-blue-500 p-2" href="/portfolio">Portfolio</Link>
            <Link className=" hover:text-blue-500 p-2" href="/blog">Blog</Link>
            <Link className=" hover:text-blue-500 p-2" href="/contact">Contact</Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className=" hover:text-blue-500 p-2 focus:outline-none"
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg z-10">
                  <Link className="block text-blue-300 hover:text-blue-500 p-2" href="/videos">Videos</Link>
                  <Link className="block text-blue-300 hover:text-blue-500 p-2" href="/images">Images</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
