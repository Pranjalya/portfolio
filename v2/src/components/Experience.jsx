import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const Experience = () => {
    const timelineData = [
        {
            id: 1,
            title: "Machine Learning Engineer",
            subtitle: "Deepsync Technologies",
            date: "July 1, 2021 - Present",
            description: "Researching and developing new algorithms and techniques via Deep Learning in the field of audio processing and audio generation using State of the Art techniques.",
            icon: <FaBriefcase />,
            type: "work",
            details: [
                "Implementing latest research papers into the sustainable system and complying with dataset.",
                "Perform new research and get better techniques in various fields like multi-lingual processing and multi-tonal attributes.",
                "Build tools for better automation and preprocessing pipeline using various tools.",
                "Build training and testing pipelines with better control over model deployment and serving."
            ]
        },
        {
            id: 2,
            title: "Software Engineer",
            subtitle: "Backprop Technologies",
            date: "October 2020 - June 2021",
            description: "Building solutions for optimization problem the field of Machine Learning, especially geared towards the use of Reinforcement Learning and creating solutions, along with scripting and internal tools building.",
            icon: <FaBriefcase />,
            type: "work",
            details: [
                "Create synthetic data via Simulation to generate dataset for training and testing dataset which can be used for analysis and model building.",
                "Build a Reinforcement Learning system and finding a way to incorporate it with the existing system.",
                "Use Python to build internal tools for automation and API manipulation and scripting."
            ]
        },
        {
            id: 3,
            title: "Data-Driven Astronomy",
            subtitle: "Coursera, University of Sydney",
            date: "June 21, 2020 - August 3, 2020",
            description: "Analysis of huge data from telescopes to investigate the challenges of working with large datasets.",
            icon: <FaGraduationCap />,
            type: "education",
            details: [
                "Discovering pulsars in radio images",
                "Exploring the black holes at the centres of massive galaxies",
                "Investigating exoplanets in other solar systems using SQL",
                "Exploring the lifecycle of stars in our Galaxy by setting Database",
                "Calculating the redshifts of distant galaxies using Regression",
                "Investigating different types of galaxies using Classification"
            ]
        },
        {
            id: 4,
            title: "Reinforcement Learning Specialization",
            subtitle: "Coursera, University of Alberta",
            date: "May 25, 2020 - Present",
            description: "Harnessing the full potential of artificial intelligence requires adaptive learning systems.",
            icon: <FaGraduationCap />,
            type: "education",
            details: [
                "Build a Reinforcement Learning system for sequential decision making.",
                "Understand how to formalize your task as a Reinforcement Learning problem.",
                "Understand the space of RL algorithms.",
                "Understand how RL fits under the broader umbrella of machine learning."
            ]
        },
        {
            id: 5,
            title: "CoronaWhy - Data Science Volunteer",
            subtitle: "CoronaWhy",
            date: "Feb 26, 2020 - Present",
            description: "CoronaWhy is an international group whose mission is to improve global coordination and analysis of all available data pertinent to the COVID-19 outbreak.",
            icon: <FaBriefcase />,
            type: "work",
            details: [
                "Team Risk Factors - Identify risk factors associated with COVID-19.",
                "Team Time Series - Forecast COVID-19 outbreak using Transfer Learning.",
                "Team Infrastructure - Set up heavy infrastructural needs.",
                "Team Social Media - Identify social media trends.",
                "Team Literature Review - Build tools for medical researchers."
            ]
        },
        {
            id: 6,
            title: "Finalists - Smart India Hackathon 2020",
            subtitle: "Government of India",
            date: "2020",
            description: "Proposed a solution to counter cyber-bulling and sexual harrasment in private chats of social media using Machine Learning techniques.",
            icon: <FaStar />,
            type: "achievement",
            details: [
                "Proposed a solution to counter cyber-bulling and sexual harrasment in private chats.",
                "Used classical NLP techniques and Deep Learning techniques."
            ]
        },
        {
            id: 7,
            title: "ML Engineer, Hybrid Application Developer",
            subtitle: "Kaissa Global Business Systems",
            date: "September 2019 - Present",
            description: "Kaissa Global Business Systems Pvt Ltd is a software company which proposes a unique solution to optimise and make life of people better.",
            icon: <FaBriefcase />,
            type: "work",
            details: [
                "Build Hybrid Application using Vue.js and Cordova.",
                "Built a Web Conferencing tool from scratch.",
                "Incorporate NoSQL database using IBM Cloudant.",
                "Built a ML model to optimise daily tasks based on reward systems."
            ]
        },
        {
            id: 8,
            title: "Deep Learning Specialization",
            subtitle: "Coursera, Deeplearning.ai",
            date: "May 2019 - August 2019",
            description: "Deep Learning Specialization is a catalogue course, taught by esteemed Prof. Andrew Ng.",
            icon: <FaGraduationCap />,
            type: "education",
            details: [
                "Deep Learning And Neural Networks",
                "Improving Deep Neural Networks",
                "Structuring Machine Learning Projects",
                "Convolutional Neural Networks",
                "Sequence Models"
            ]
        },
        {
            id: 9,
            title: "Stock Market Analysis - Intern",
            subtitle: "Machine Learning Internship",
            date: "July 2019 - August 2019",
            description: "Understand the various aspects of Stock Market including finding trends and building optimised portfolio.",
            icon: <FaBriefcase />,
            type: "work",
            details: [
                "Data analysis and Data Cleaning",
                "Data Visualisation and Technical Analysis",
                "Fundamental Analysis using Regression",
                "Trade Call Prediction using Classification",
                "Applying Modern Portfolio Theory for Stocks",
                "Clustering for Diversification Analysis"
            ]
        },
        {
            id: 10,
            title: "Fundamentals Of Digital Marketing",
            subtitle: "Google",
            date: "February 2019",
            description: "Fundamentals of Digital Marketing is a course by Google Digital Unlocked.",
            icon: <FaGraduationCap />,
            type: "education",
            details: [
                "Building Web presence",
                "Planning online business strategy",
                "Search Engine Optimisation",
                "Social Media Marketing",
                "Online Advertising and Campaigns",
                "Discovering Trends and Analytics"
            ]
        },
        {
            id: 11,
            title: "Bachelors of Engineering, CSE",
            subtitle: "Bhilai Institute of Technology, Durg",
            date: "August 2017 - Present",
            description: "CSE Undergraduate in Bachelors of Engineering from BIT Durg.",
            icon: <FaGraduationCap />,
            type: "education",
            details: [
                "Attaining 9.2 CPI",
                "Head Coordinator of Training and Placement Cell",
                "Secured 1st rank in BITSHINE",
                "Member of CSE Cricket Team",
                "Content Writer in Snapshots",
                "Recipient of Tuition Fee Waiver Scheme",
                "Elite Certificate in NPTEL's course of Programming in C++"
            ]
        },
        {
            id: 12,
            title: "Tabla",
            subtitle: "Indira Kala Sangeet Vishwavidyalay",
            date: "",
            description: "A certified Tabla player from Indira Kala Sangeet Vishwavidyalay, Khairagarh.",
            icon: <FaStar />,
            type: "achievement",
            details: [
                "Passed with distinction in Madhyama Pratham",
                "Completed four out of six year courses"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">Experience</h2>
                    <p className="text-xl text-gray-400">My Knowledge and Achievements</p>
                </div>

                <div className="relative container mx-auto px-6 flex flex-col space-y-8">
                    <div className="absolute z-0 w-2 h-full bg-gray-700 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
                    {timelineData.map((item, index) => (
                        <div key={item.id} className="relative z-10">
                            <div className={index % 2 === 0 ? "timeline-container left" : "timeline-container right"}>
                                <div className={index % 2 === 0 ? "timeline-pointer left" : "timeline-pointer right"} aria-hidden="true"></div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                                            <span className="text-blue-400 text-sm font-semibold">{item.subtitle}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{item.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                                    {item.details && (
                                        <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                                <div className="absolute top-6 z-20 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shadow-lg left-13 md:left-1/2 md:-translate-x-1/2">
                                    <span className="text-white text-sm">{item.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
