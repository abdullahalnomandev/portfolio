"use client";

import logo from "@/assets/images/Abdullah_Al_Noman_Logo.png";
import footerBG from "@/assets/images/footer-bg.png";
import socialLinks from "@/data/socialLinks";
import Image from "next/image";
import Link from "next/link";

// Import React Icons only here
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  const links = socialLinks();

  // Render icons manually based on id
  const renderIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaLinkedin />;
      case 2:
        return <FaGithub />;
      case 3:
        return <HiOutlineMail />;
      case 4:
        return <BsWhatsapp />;
      case 5:
        return <FaFacebook />;
      case 6:
        return <FaYoutube />;
      default:
        return null;
    }
  };

  return (
    <footer
      className='w-full text-primary bg-no-repeat bg-cover bg-center relative dark:bg-[#0f172a]'
      style={{ backgroundImage: `url(${footerBG.src})` }}>
      {/* Optional overlay for better text contrast */}
      <div className='absolute inset-0 bg-black/15 dark:bg-black/40 pointer-events-none'></div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12'>
        {/* Logo & About */}
        <div>
          <Link href='/' className='inline-block'>
            <Image src={logo} alt='Logo' width={140} height={40} />
          </Link>
          <p className='mt-4 text-sm leading-relaxed text-white/80 dark:text-gray-300'>
            Crafting scalable, high-quality digital products with performance,
            accessibility, and modern UI/UX principles.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className='text-base font-semibold mb-4 text-white dark:text-white'>
            Company
          </h4>
          <ul className='space-y-2 text-sm text-white/90 dark:text-gray-300'>
            <li>
              <Link href='/about' className='hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/projects' className='hover:underline'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/blog' className='hover:underline'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className='text-base font-semibold mb-4 text-white dark:text-white'>
            Services
          </h4>
          <ul className='space-y-2 text-sm text-white/90 dark:text-gray-300'>
            <li>Full-Stack Web Development</li>
            <li>Headless CMS & API Integration</li>
            <li>UI/UX Design Systems</li>
            <li>eCommerce & SaaS Platforms</li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className='text-base font-semibold mb-4 text-white dark:text-white'>
            Contact
          </h4>
          <p className='text-sm text-white/80 dark:text-gray-300'>
            Dhaka, Bangladesh
          </p>
          <p className='mt-2 text-sm text-white/80 dark:text-gray-300'>
            Email:{" "}
            <a
              href='mailto:abdullahalnoman1512@gmail.com'
              className='hover:underline'>
              abdullahalnoman1512@gmail.com
            </a>
          </p>
          <p className='text-sm text-white/80 dark:text-gray-300'>
            Phone:{" "}
            <a href='tel:+8801741581512' className='hover:underline'>
              +8801741-581512
            </a>
          </p>

          {/* Social Icons */}
          <div className='flex flex-wrap gap-3 mt-4 text-xl'>
            {links.map(({ id, href }) => {
              const label = href.includes("linkedin")
                ? "LinkedIn"
                : href.includes("github")
                ? "GitHub"
                : href.includes("mailto")
                ? "Email"
                : href.includes("wa.me")
                ? "WhatsApp"
                : href.includes("facebook")
                ? "Facebook"
                : href.includes("youtube")
                ? "YouTube"
                : "Social Link";

              return (
                <a
                  key={id}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='text-white hover:text-gray-300 dark:hover:text-gray-400 transition'>
                  {renderIcon(id)}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className='border-t border-white/20 py-6 text-center text-sm text-white/70 dark:text-gray-400 relative z-10'>
        © {year} Abdullah Al Noman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
