"use client";

import logo from "@/assets/images/Abdullah_Al_Noman_Logo.png";
import { downloadLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";
import { PiReadCvLogoThin } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  /* ── scroll & sticky ─────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      setIsFixed(window.scrollY > threshold);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── theme persistence & toggle ───────────────────── */
  useEffect(() => {
    // Load saved theme or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial =
      (saved as "light" | "dark") || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  /* ── links ────────────────────────────────────────── */
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
          ? "md:sticky top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-md"
          : "bg-[#f5f7ff] dark:bg-gray-900"
      }`}>
      {/* Scroll Progress Bar */}
      <div
        className='h-1 bg-gradient-to-r  from-pink-500 to-rose-500 fixed top-0 left-0 z-[60] transition-all duration-200'
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className='flex items-center max-w-7xl m-auto justify-between px-4 md:px-16 py-4 relative'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} width={80} height={50} alt='Abdullah Al Noman' />
        </Link>

        <div className='md:hidden flex items-center gap-1 text-3xl text-blue-600 dark:text-blue-400 z-[60]'>
          {/* Theme toggle (mobile & desktop) */}
          <button
            onClick={toggleTheme}
            className={`${
              isOpen ? "hidden" : ""
            } md:hidden text-xl mr-2 text-yellow-500 dark:text-yellow-300 z-[60]`}
            aria-label='Toggle theme'>
            {theme === "light" ? <FaMoon /> : <MdOutlineLightMode />}
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6 text-base font-medium text-gray-700 dark:text-gray-300'>
          {mainLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`transition hover:text-pink-500 dark:hover:text-pink-400 ${
                isActive(href)
                  ? "text-pink-500 dark:text-pink-400 underline underline-offset-4 decoration-2"
                  : ""
              }`}>
              {label}
            </Link>
          ))}

          {/* Resume button */}
          <button
            onClick={() => window.open(downloadLink)}
            className='relative inline-flex items-center gap-2 overflow-hidden rounded border border-pink-500 px-2 py-2 text-pink-500 dark:text-pink-400 transition-all duration-300 group hover:text-white'>
            <PiReadCvLogoThin className='text-2xl text-pink-800 dark:text-pink-300 group-hover:text-white transition-colors duration-300 relative z-10' />
            <span className='relative z-10'>Resume</span>
            <div className='absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100 origin-left' />
          </button>

          {/* Desktop theme toggle */}
          <button
            onClick={toggleTheme}
            className='text-xl text-yellow-500 dark:text-yellow-300'
            aria-label='Toggle theme'>
            {theme === "light" ? <FaMoon /> : <MdOutlineLightMode />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}>
          <div className='flex flex-col space-y-4 p-6 text-base font-medium text-gray-700 dark:text-gray-300'>
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-pink-500 dark:hover:text-pink-400 ${
                  isActive(href)
                    ? "text-pink-500 dark:text-pink-400 underline underline-offset-4 decoration-2"
                    : ""
                }`}>
                {label}
              </Link>
            ))}

            <button
              onClick={() => window.open(downloadLink)}
              className='relative inline-flex items-center gap-2 overflow-hidden rounded border border-pink-500 px-2 py-2 text-pink-500 dark:text-pink-400 transition-all duration-300 group hover:text-white'>
              <PiReadCvLogoThin className='text-2xl text-pink-800 dark:text-pink-300 group-hover:text-white transition-colors duration-300 relative z-10' />
              <span className='relative z-10'>Resume</span>
              <div className='absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100 origin-left' />
            </button>

            {/* Theme toggle in drawer */}
            <button
              onClick={toggleTheme}
              className='mt-2 inline-flex items-center gap-2 text-yellow-500 dark:text-yellow-300'>
              {theme === "light" ? (
                <>
                  <FaMoon /> Dark Mode
                </>
              ) : (
                <>
                  <MdOutlineLightMode /> Light Mode
                </>
              )}
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
