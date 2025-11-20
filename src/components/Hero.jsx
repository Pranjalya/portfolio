import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('${import.meta.env.BASE_URL}assets/img/120882.webp')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Pranjalya Tiwari
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    AI / ML Engineer | Full Stack | LLMs, GenAI, Diffusion | Open Source
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="https://github.com/Pranjalya" className="text-3xl hover:text-blue-400 transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/pranjalya-tiwari/" className="text-3xl hover:text-blue-400 transition-colors"><FaLinkedin /></a>
                    <a href="https://twitter.com/PranjalyaQuasar" className="text-3xl hover:text-blue-400 transition-colors"><FaTwitter /></a>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
