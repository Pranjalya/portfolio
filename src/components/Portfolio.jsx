import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 101,
            title: "Tortoise TTS Gradio",
            image: "/assets/img/120882.webp", // Placeholder
            link: "https://github.com/Pranjalya/tts-tortoise-gradio",
            category: "project"
        },
        {
            id: 102,
            title: "LLM Agent PDF Reader",
            image: "/assets/img/120882.webp", // Placeholder
            link: "https://github.com/Pranjalya/llm-agent-pdf-reader",
            category: "project"
        },
        {
            id: 103,
            title: "Vue Go GraphQL",
            image: "/assets/img/120882.webp", // Placeholder
            link: "https://github.com/Pranjalya/vue-go-graphql",
            category: "project"
        },
        {
            id: 1,
            title: "WebRTC Video Chat",
            image: "https://drive.google.com/thumbnail?id=18nft8nnx_1iiSrbcxIgNaqOztb83nOKI",
            link: "https://pranjalya.github.io/cordova-webrtc",
            category: "project"
        },
        {
            id: 2,
            title: "What is Debiasing?",
            image: "https://drive.google.com/thumbnail?id=1l-tdbX-mRcZODSzSU8nkrKaYIbDO8Tmf",
            link: "https://medium.com/@pranjalyatiwari/what-is-debiasing-and-why-is-it-important-6cad40e8511c",
            category: "blog"
        },
        {
            id: 3,
            title: "Google Duplex & Turing Test",
            image: "https://drive.google.com/thumbnail?id=11do6CTVeGt9f9CWAQXleDeMl4RFl8NUo",
            link: "https://medium.com/@pranjalyatiwari/did-google-duplex-really-pass-the-turing-test-ad62fd8286f5",
            category: "blog"
        },
        {
            id: 4,
            title: "Student Data Centre",
            image: "https://drive.google.com/thumbnail?id=137WbC_TeBKH6Gig6h17K7yZs70KUVXGn",
            link: "https://pranjalya.github.io/student-data-centre",
            category: "project"
        },
        {
            id: 5,
            title: "How Google Translate Works",
            image: "https://drive.google.com/thumbnail?id=1HePuTrXNxVA894lNX36UuAjhC-mu507w",
            link: "https://medium.com/@pranjalyatiwari/how-does-google-translate-work-86429c915cc2",
            category: "blog"
        },
        {
            id: 6,
            title: "Millenials App",
            image: "https://drive.google.com/thumbnail?id=1SpDi_9jTdQyt_jRhWEY1n5G2XwrUduhy",
            link: "https://play.google.com/store/apps/details?id=io.kaissa.millennials&hl=en_IN",
            category: "project"
        },
        {
            id: 7,
            title: "Kaggle Dataset Versions",
            image: "https://drive.google.com/thumbnail?id=18v_DQkdu5U5SyuUs0bY85UoPURttdXjB",
            link: "https://medium.com/@pranjalyatiwari/how-to-download-previous-versions-of-a-kaggle-dataset-9a8d62b78dcc",
            category: "blog"
        },
        {
            id: 8,
            title: "RL Weight Initialization",
            image: "https://drive.google.com/thumbnail?id=10KjDqaPWeYqDVeHlL9LJ3VoE3mHIMu4c",
            link: "https://github.com/Pranjalya/LearningInitializations",
            category: "project"
        }
    ];

    const tools = [
        { name: "Tensorflow", src: "tf.jpeg" },
        { name: "ElasticSearch", src: "Elasticsearch.png" },
        { name: "Vue.js", src: "vue.png" },
        { name: "Cloudant", src: "cloudant.png" },
        { name: "MongoDB", src: "mongodb.png" },
        { name: "Docker", src: "docker.webp" },
        { name: "MySQL", src: "mysql.jpeg" },
        { name: "Scikit Learn", src: "sklearn.webp" },
        { name: "CouchDB", src: "couchdb-logo1.png" },
        { name: "CircleCI", src: "circleci.png" },
        { name: "GCP", src: "gcp.png" },
        { name: "Golang", src: "go.png" },
        { name: "Rust", src: "go.png" } // Using Go icon as placeholder for Rust if specific icon not available
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">Portfolio</h2>
                    <p className="text-xl text-gray-400">My Works</p>
                </div>

                <div className="flex justify-center space-x-8 mb-12">
                    {['all', 'blog', 'project'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`text-lg uppercase tracking-wider pb-2 border-b-2 transition-colors ${filter === f ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {f === 'all' ? 'All Works' : f + 's'}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.category === 'project'
                                            ? 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                                            : 'bg-purple-500/20 border-purple-500/30 text-purple-300'
                                            }`}>
                                            {project.category === 'project' ? 'Project' : 'Blog'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="transform transition-all duration-500">
                                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-400 transition-colors mt-2"
                                            >
                                                <span>View Details</span>
                                                <FaExternalLinkAlt className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2 text-blue-400">Tools Known</h2>
                    </div>

                    {/* Simple Marquee / Grid for tools */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-24 h-24 bg-white rounded-full p-4 flex items-center justify-center mb-2">
                                    {/* Assuming images are in public/assets/img/icons/ */}
                                    <img src={`/assets/img/icons/${tool.src}`} alt={tool.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <span className="text-gray-400 text-sm">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
