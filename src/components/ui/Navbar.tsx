"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import abdullah_al_noman_log from '@/assets/images/Abdullah_Al_Noman_Logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex px-16 flex-col md:flex-row items-center justify-between py-4 text-blue-600  font-bold">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Image
          src={abdullah_al_noman_log}
          width={80}
          height={50}
          alt="Abdullah Al Noman"
          title="Abdullah Al Noman"
        />
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div className={`flex-col md:flex md:flex-row ${isOpen ? "flex" : "hidden"} md:flex`}>
        <Link className="text-blue-300 hover:text-blue-500 p-2" href="/">Home</Link>
        <Link className="text-blue-300 hover:text-blue-500 p-2" href="/about">About</Link>
        <Link className="text-blue-300 hover:text-blue-500 p-2" href="/portfolio">Portfolio</Link>
        <Link className="text-blue-300 hover:text-blue-500 p-2" href="/blog">Blog</Link>
        <Link className="text-blue-300 hover:text-blue-500 p-2" href="/contact">Contact</Link>
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-blue-300 hover:text-blue-500 p-2">
            More
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg">
              <Link className="block text-blue-300 hover:text-blue-500 p-2" href="/videos">Videos</Link>
              <Link className="block text-blue-300 hover:text-blue-500 p-2" href="/images">Images</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;