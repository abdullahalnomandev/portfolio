import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import FaEmail from '@/assets/images/email.png'
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className="mt-40 w-14 fixed bottom-0 left-0">
            <ul className="flex flex-col items-center space-y-4 ">
                <li className="text-white hover:text-blue-700 transition duration-300 ">
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} className="text-blue-700" />
                    </Link>
                </li>
                <li className="text-white hover:text-gray-500 transition duration-300">
                    <Link href="https://www.github.com/abdullahalnomandev" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} className="text-gray-700" />
                    </Link>
                </li>
                <li className="text-white hover:text-blue-500 transition duration-300">
                    <Link href="mailto:abdullahalnoman1512@gmail.com">
                        {/* <FaEnvelope size={25} className="text-red-500" /> */}
                        <Image alt='emial' src={FaEmail} width={22} height={20} />
                    </Link>
                </li>
                <li className="text-white hover:text-green-500 transition duration-300">
                    <Link href="https://wa.me/+8801706960271" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={25} className="text-green-500" />
                    </Link>
                </li>
                <li className="text-white hover:text-blue-500 transition duration-300">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} className="text-blue-500" />
                    </Link>
                </li>
                <li className="text-white hover:text-red-500 transition duration-300">
                    <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={25} className="text-red-500" />
                    </Link>
                </li>
            </ul>
            <p className=" h-40 text-blue-600 w-[1px] mt-2 mx-auto text-center bg-blue-500 "></p>
        </div>
    );
};

export default Sidebar;