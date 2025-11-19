import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // e.preventDefault(); // Uncomment to prevent default submission if using AJAX
        // Form submission logic here (or keep default action for mailthis.to)
    };

    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">Contact</h2>
                    <p className="text-xl text-gray-400">Leave your message</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-300">Email ID:</h3>
                            <p className="text-blue-400">pranjalyatiwari10@gmail.com</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-300">Address:</h3>
                            <p className="text-gray-400">Bilaspur, CG, India</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <form
                            action="https://mailthis.to/pranjalyawarrior@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">E-mail <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-transparent border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
