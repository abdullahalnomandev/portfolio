import React from 'react';
import footer_image from '@/assets/images/footer.png';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamic year

    return (
        <footer 
            className="text-center h-[400px]" 
            style={{ 
                backgroundImage: `url(${footer_image.src})`, 
                backgroundSize: "contain", 
                backgroundPosition: "bottom center", // Positioned at the bottom
                backgroundRepeat: 'no-repeat',
                width: '100%',
                opacity: 1.2, // Adjust opacit
            }} 
            aria-label="Footer"
        >
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
