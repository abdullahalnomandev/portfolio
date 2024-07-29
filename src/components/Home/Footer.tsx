import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamic year

    return (
        <footer className="text-center bg-blue-400 py-6" aria-label="Footer">
            <p className="text-white font-semibold">Developed by Abdullah Al Noman</p>
            <p className="text-white">© {currentYear} All rights reserved.</p>
            <p className="text-white">Powered by Abdullah Al Noman</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-white hover:underline" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="#" className="text-white hover:underline" aria-label="Terms of Service">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;