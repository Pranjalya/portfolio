import React from 'react';
import { motion } from 'framer-motion';
import Social from './Social';
import { FaCoffee } from 'react-icons/fa';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">About Me</h2>
                    <p className="text-xl text-gray-400">Let's get to know each other</p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Placeholder for Radar Chart or Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="w-full max-w-md bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
                            <Radar
                                data={{
                                    labels: ['Management', 'Deep Learning', 'Digital Marketing', 'Web Dev', 'Machine Learning', 'Data Engineering', 'UX Design', 'DevOps'],
                                    datasets: [{
                                        label: 'Skill Level',
                                        data: [75, 90, 70, 90, 95, 85, 75, 80],
                                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                        borderColor: 'rgba(59, 130, 246, 1)',
                                        borderWidth: 2,
                                        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                                        pointBorderColor: '#fff',
                                        pointHoverBackgroundColor: '#fff',
                                        pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
                                    }]
                                }}
                                options={{
                                    scales: {
                                        r: {
                                            angleLines: {
                                                color: 'rgba(255, 255, 255, 0.1)'
                                            },
                                            grid: {
                                                color: 'rgba(255, 255, 255, 0.1)'
                                            },
                                            pointLabels: {
                                                color: '#9ca3af',
                                                font: {
                                                    size: 12
                                                }
                                            },
                                            ticks: {
                                                display: false,
                                                backdropColor: 'transparent'
                                            },
                                            suggestedMin: 0,
                                            suggestedMax: 100
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    }
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                        <h4 className="text-xl text-blue-300 mb-6">Pranjalya Tiwari</h4>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">E-mail:</strong>
                                <div className="flex-1">
                                    pranjalyatiwari10@gmail.com
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Languages:</strong>
                                <div className="flex-1">English, Hindi, Sanskrit, German (Novice)</div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Tools:</strong>
                                <div className="flex-1">PyTorch, Tensorflow, Docker, Kubernetes, Airflow, AWS, GCP, ElasticSearch, MongoDB, MySQL, Redis</div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Technologies:</strong>
                                <div className="flex-1">Langgraph, Langchain, Large Language Models (LLMs), Computer Vision, NLP, Audio Processing, MLOps, Data Engineering</div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Programming:</strong>
                                <div className="flex-1">Python, Go, Rust, C++, JavaScript, TypeScript, Bash</div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Interests:</strong>
                                <div className="flex-1">Generative AI, Open Source, Chess, Astronomy, Cosmology, Poetry</div>
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                <strong className="w-32 text-gray-500">Country:</strong>
                                <div className="flex-1">India 🇮🇳</div>
                            </div>
                        </div>

                        <Social />

                        <div className="mt-8">
                            <a
                                href="https://www.buymeacoffee.com/pranjalyatiwari"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#79d6b5] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity font-cursive text-xl"
                                style={{ fontFamily: 'Cookie, cursive' }}
                            >
                                <img
                                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                                    alt="Buy me a coffee"
                                    className="w-6 h-6 mr-2"
                                />
                                Buy me a coffee
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
