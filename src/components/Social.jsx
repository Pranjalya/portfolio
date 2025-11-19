import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaStackOverflow, FaInstagram, FaFacebook } from 'react-icons/fa';

const Social = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/pranjalyaks1213" }, // Replace with actual links
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/pranjalya-tiwari-456a7a179/" },
        { icon: <FaGithub />, url: "https://www.github.com/Pranjalya" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/pranjalya.tiwari" },
        { icon: <FaTwitter />, url: "https://twitter.com/PranjalyaQuasar" },
        { icon: <FaMedium />, url: "https://www.medium.com/@pranjalyatiwari" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/pranjalya_kvothe/" },
        { icon: <FaStackOverflow />, url: "https://stackoverflow.com/users/10142251/pranjalya/" },
    ];

    return (
        <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default Social;
