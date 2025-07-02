"use client";

import logo from "@/assets/images/Abdullah_Al_Noman_Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  // Handles submenu click (closes both dropdown and mobile menu)
  const handleMenuClick = () => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={`transition-all duration-300 ${
        isFixed
          ? "sticky top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 shadow-md"
          : "bg-[#f4f6ff]"
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} width={80} height={50} alt="Abdullah Al Noman" />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-blue-600"
        >
          {isOpen ? <RxCross2 /> : <FiMenu />}
        </button>

        {/* Menu */}
        <div
          className={`transition-all duration-300 md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 text-base font-medium text-gray-700">
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`transition hover:text-pink-500 ${
                  isActive(href)
                    ? "text-pink-500 underline-offset-4 underline decoration-2"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-pink-500 transition focus:outline-none"
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-20">
                  <Link
                    href="/videos"
                    onClick={handleMenuClick}
                    className={`block px-4 py-2 text-sm transition ${
                      isActive("/videos")
                        ? "text-pink-500 underline-offset-4 underline decoration-2"
                        : "text-gray-600"
                    } hover:text-pink-500`}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/images"
                    onClick={handleMenuClick}
                    className={`block px-4 py-2 text-sm transition ${
                      isActive("/images")
                        ? "text-pink-500 underline-offset-4 underline decoration-2"
                        : "text-gray-600"
                    } hover:text-pink-500`}
                  >
                    Images
                  </Link>
                </div>
              )}
            </div>

            {/* Resume Button */}
            <Link
              href="/resume.pdf"
              className="relative inline-block overflow-hidden rounded border border-pink-500 px-6 py-2 text-pink-500 transition-all duration-300 group hover:text-white"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
