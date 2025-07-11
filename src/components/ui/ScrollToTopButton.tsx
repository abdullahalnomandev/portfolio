"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='bg-gradient-to-br from-[#ff35b4] to-[#ff193f] hover:from-[#ff193f] hover:to-[#ff35b4] p-2.5 rounded-full text-white text-xl scale-100 hover:scale-105 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff35b4] focus:ring-opacity-50 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700'>
          <FaArrowUp className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
