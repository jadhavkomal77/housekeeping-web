
import React from "react";
import { motion } from "framer-motion";
import workers2 from "../assets/pexels-photo.jpg";
import { Users, Award, Shield, Heart, Clock, Star, Leaf, Headphones } from "lucide-react";

const About = () => {
    React.useEffect(() => {
        document.title = "About Us - Smart Clean Solutions";
    }, []);

    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="bg-gray-50">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-blue-100"
                    >
                        Your home's care, our responsibility
                    </motion.p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Smart Clean Solutions, established in 2019, is a leading housekeeping and cleaning services company.
                            We started small and have now become a trusted name in Maharashtra.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Our mission is to ensure cleanliness and health in every home and office.
                            With our team of trained workers, we provide all types of cleaning and maintenance services.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white rounded-xl shadow-md text-center"
                            >
                                <div className="text-3xl font-bold text-blue-600">15+</div>
                                <p className="text-gray-600">Years Experience</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white rounded-xl shadow-md text-center"
                            >
                                <div className="text-3xl font-bold text-indigo-600">100%</div>
                                <p className="text-gray-600">Customer Satisfaction</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-video">
                            <img
                                src={workers2}
                                alt="Our Team Working"
                                className="w-full h-full object-cover rounded-2xl shadow-md"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600">
                            The principles we work on
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Trust", description: "Have complete faith in us" },
                            { icon: Award, title: "Quality", description: "High quality service always" },
                            { icon: Users, title: "Teamwork", description: "Best results through collective efforts" },
                            { icon: Heart, title: "Care", description: "Care for your home like ours" },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 bg-gray-50 rounded-xl shadow-sm text-center transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Us
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600">
                            We make cleaning hassle-free, reliable, and affordable
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, title: "On-Time Service", description: "Always punctual and reliable" },
                            { icon: Star, title: "Affordable Pricing", description: "Best services at the right cost" },
                            { icon: Leaf, title: "Eco-Friendly", description: "Safe & sustainable cleaning methods" },
                            { icon: Headphones, title: "24/7 Support", description: "Customer care anytime you need" },
                        ].map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 bg-white rounded-xl shadow-sm text-center transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-600">
                                    <reason.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
