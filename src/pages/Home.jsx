import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

import workers from "../assets/istockphoto.jpg";
import teamImg from "../assets/istockphoto-00.jpg";

const Home = () => {
    React.useEffect(() => {
        document.title = "Smart Clean Solutions - Professional Housekeeping Services";
    }, []);

    const features = [
        { icon: Shield, title: "Trusted & Verified", description: "Verified and trusted workers", slug: "trusted-verified" },
        { icon: Clock, title: "24/7 Available", description: "Day and night service", slug: "24-7-available" },
        { icon: Star, title: "Quality Service", description: "High quality standards", slug: "quality-service" },
        { icon: Users, title: "Expert Team", description: "Experienced and skilled team", slug: "expert-team" },
    ];

    // Animation variants
    const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
    const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                        >
                            Professional <span className="block text-yellow-400">Cleaning Services</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg sm:text-xl md:text-2xl text-blue-100"
                        >
                            Make your home and office clean, safe and healthy with our professional services
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-xl transition-all"
                                >
                                    View Services <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg shadow transition-all"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="aspect-video">
                                <img
                                    src={workers}
                                    alt="Professional Cleaning Service"
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose Smart Clean Solutions?
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600">
                            Benefits of our professional services
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.08, y: -5 }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
                            >
                                <Link
                                    to={`/feature/${feature.slug}`}
                                    className="block text-center p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-transform"
                                >
                                    <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <feature.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
                        <p className="text-lg sm:text-xl text-gray-700 mb-6">
                            Smart Clean Solutions is a professional cleaning service provider company. We deliver high-quality housekeeping, deep cleaning, pest control, and other home maintenance services across Maharashtra with a trusted team of experts.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="text-3xl font-bold text-blue-600">5000+</div>
                                <div className="text-gray-700 mt-2">Happy Customers</div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600">20+</div>
                                <div className="text-gray-700 mt-2">Cities Served</div>
                            </motion.div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.div whileHover={{ scale: 1.08 }}>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
                                >
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.08 }}>
                                <Link
                                    to="/reviews"
                                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg"
                                >
                                    Reviews <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 lg:mt-0"
                    >
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={teamImg}
                                    alt="Our Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home;
