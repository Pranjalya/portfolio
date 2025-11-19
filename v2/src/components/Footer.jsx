import React from 'react';
import Social from './Social';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Pranjalya Tiwari
                </div>
                <div className="text-gray-500 text-sm mb-4 md:mb-0 text-center">
                    Cover Image: Hubble Ultra Deep Field
                </div>
                <Social />
            </div>
        </footer>
    );
};

export default Footer;
