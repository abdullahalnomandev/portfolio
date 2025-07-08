"use client";

import logo from "@/assets/images/Abdullah_Al_Noman_Logo.png";
import { downloadLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      setIsFixed(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`transition-all duration-300 ${
        isFixed
          ? "sticky top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 shadow-md"
          : "bg-[#f4f6ff]"
      }`}>
      <nav className='flex items-center justify-between px-4 md:px-16 py-4 relative'>
        <Link href='/'>
          <Image src={logo} width={80} height={50} alt='Abdullah Al Noman' />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-3xl text-blue-600 z-[60]'>
          {isOpen ? <RxCross2 /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6 text-base font-medium text-gray-700'>
          {mainLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`transition hover:text-pink-500 ${
                isActive(href)
                  ? "text-pink-500 underline underline-offset-4 decoration-2"
                  : ""
              }`}>
              {label}
            </Link>
          ))}

          <button
            onClick={() => window.open(downloadLink)}
            className='relative inline-block overflow-hidden rounded border border-pink-500 px-6 py-2 text-pink-500 transition-all duration-300 group hover:text-white'>
            <span className='relative z-10'>Resume</span>
            <div className='absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100 origin-left' />
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}>
          <div className='flex flex-col space-y-4 p-6 text-base font-medium text-gray-700'>
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-pink-500 ${
                  isActive(href)
                    ? "text-pink-500 underline underline-offset-4 decoration-2"
                    : ""
                }`}>
                {label}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                window.open(downloadLink);
              }}
              className='mt-2 relative inline-block overflow-hidden rounded border border-pink-500 px-6 py-2 text-pink-500 transition-all duration-300 group hover:text-white'>
              <span className='relative z-10'>Resume</span>
              <div className='absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100 origin-left' />
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden'
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
