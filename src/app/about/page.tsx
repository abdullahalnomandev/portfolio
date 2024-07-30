"use client"
import React, { useState } from 'react';
import noman from '@/assets/images/Abdullah_Al_Noman.jpg';
import Image from 'next/image';

const AboutPage = () => {
    const [loading, setLoading] = useState(false);

    const handleDownloadClick = () => {
        setLoading(true);
        setTimeout(() => {
            window.location.href = "https://drive.google.com/uc?export=download&id=1w3HHHWQdlnVeOcNjlNOYjBhByS00qhmD";
            setLoading(false);
        }, 100); // Simulate a small delay to show loading state
    };

    return (
        <div className="grid grid-cols-2 gap-10 py-10 font-sans px-0">
            <div className="flex flex-col items-start text-left">
                <div className="max-w-xs mb-5">
                    <Image
                        src={noman}
                        alt="Abdullah Al Noman"
                        layout="responsive"
                        width={1}
                        height={1}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <h1 className="text-4xl mb-2 font-bold text-primary">I'm Abdullah Al Noman</h1>
                <p className="text-lg leading-8 mb-5 text-gray-600">
                    A self-motivated and enthusiastic web designer with a deep interest in JavaScript. Aiming to work in the software industry with cutting-edge web technologies in various local and global Software/IT companies in Bangladesh, and grow rapidly with increasing responsibilities.
                </p>
                <button
                    onClick={handleDownloadClick}
                    className="px-6 py-3 bg-blue-600 text-white rounded transition duration-300 font-bold flex items-center justify-center relative"
                >
                    {loading && (
                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-gray-200 border-t-4 border-white rounded-full w-5 h-5 animate-spin"></span>
                    )}
                    {loading ? 'Downloading...' : 'Download CV'}
                </button>
            </div>
            <div className="text-left px-5">
                <h2 className="text-2xl mb-5 border-b-2 border-blue-600 inline-block">Programming Skills</h2>
                <div className="mb-8">
                    <h3 className="text-xl mb-3 text-blue-600">Expertise</h3>
                    <ul className="list-disc pl-5 leading-relaxed">
                        <li>React</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>JavaScript (ES6)</li>
                        <li>Firebase</li>
                        <li>Bootstrap</li>
                        <li>React Bootstrap</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-3 text-blue-600">Comfortable</h3>
                    <ul className="list-disc pl-5 leading-relaxed">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>JSON</li>
                        <li>SASS</li>
                        <li>Material UI</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-3 text-blue-600">Familiar</h3>
                    <ul className="list-disc pl-5 leading-relaxed">
                        <li>React Native</li>
                        <li>Redux.js</li>
                        <li>TypeScript</li>
                        <li>JSON</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl mb-3 text-blue-600">Tools</h3>
                    <ul className="list-disc pl-5 leading-relaxed">
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Create React App</li>
                        <li>VS Code</li>
                        <li>Netlify</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
