import { IPortfolio } from '@/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import noman from '@/assets/images/noman.jpeg';
import hotel from '@/assets/images/hotel2.png'
import { FaGithub, FaLink } from 'react-icons/fa';

interface IProps extends IPortfolio {
    hoverId?: string;
    setHoverId?: (id: string) => void;
}

const PortFolioCard = ({ item, hoverId, setHoverId }: { item: IProps, hoverId?: string, setHoverId?: (id: string) => void }) => {
    const { name, id, image_url, frontend_github_link, backend_github_link, live_link, technologies, description } = item;

    return (
        <div
            className={`col-span-12 rounded md:col-span-6 lg:col-span-4 m-2 transition-transform duration-300 transform ${hoverId === id ? 'scale-105 shadow-lg' : 'shadow-md'}`}
            key={id}
            onMouseEnter={() => setHoverId?.(id as string)}
            onMouseLeave={() => setHoverId?.('')}
        >
            <div className="p-4 rounded-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                    src={hotel || noman}
                    alt={name}
                    className={`object-cover w-full rounded-md transition-transform duration-300 ${hoverId === id ? 'scale-105' : ''}`}
                />
                <Link
                    className={`text-blue-600 font-semibold block mt-2 transition duration-300 ${hoverId === id ? 'underline' : ''}`}
                    target="_blank"
                    href={frontend_github_link}
                >
                    {name}
                </Link>
                <p className="text-sm text-gray-600">Technologies:</p>
                <div className="flex flex-wrap mb-2">
                    {technologies.map((technology: string, i: number) => (
                        <span
                            className="bg-blue-500 text-[12px] py-1 px-2 text-white m-1 rounded-full font-normal hover:bg-blue-700 transition duration-300"
                            key={i}
                        >
                            {technology}
                        </span>
                    ))}
                </div>
                <p className="text-gray-500 text-sm mb-4">{description}</p>
                <div className="flex items-center space-x-4">
                    {live_link && (
                        <Link href={frontend_github_link} target="_blank" className={`text-blue-600 flex items-center hover:text-blue-800 transition  ${hoverId === id ? "underline" : ""}`}>
                            <FaLink className="mr-1" />
                            Live Site
                        </Link>
                    )}
                    {frontend_github_link && (
                        <Link href={frontend_github_link} target="_blank" className={`text-blue-600 flex items-center hover:text-blue-800 transition  ${hoverId === id ? "underline" : ""}`}>
                            <FaGithub className="mr-1 text-black" />
                            Frontend
                        </Link>
                    )}
                    {backend_github_link && (
                        <Link href={frontend_github_link} target="_blank" className={`text-blue-600 flex items-center hover:text-blue-800 transition  ${hoverId === id ? "underline" : ""}`}>
                            <FaGithub className="mr-1 text-black" />
                            Backend
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortFolioCard;
