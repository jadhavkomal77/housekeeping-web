// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Shield, Clock, Star, Users } from "lucide-react";

// import workers from "../assets/istockphoto.jpg";
// import teamImg from "../assets/istockphoto-00.jpg";

// const Home = () => {
//     React.useEffect(() => {
//         document.title = "Smart Clean Solutions - Professional Housekeeping Services";
//     }, []);

//     // Features Data
//     const features = [
//         {
//             icon: Shield,
//             title: "Trusted & Verified",
//             description: "Verified and trusted workers",
//             slug: "trusted-verified",
//         },
//         {
//             icon: Clock,
//             title: "24/7 Available",
//             description: "Day and night service",
//             slug: "24-7-available",
//         },
//         {
//             icon: Star,
//             title: "Quality Service",
//             description: "High quality standards",
//             slug: "quality-service",
//         },
//         {
//             icon: Users,
//             title: "Expert Team",
//             description: "Experienced and skilled team",
//             slug: "expert-team",
//         },
//     ];

//     return (
//         <div>
//             {/* ---------------- HERO SECTION ---------------- */}
//             <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div>
//                         <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                             Professional{" "}
//                             <span className="block text-yellow-300">Cleaning Services</span>
//                         </h1>
//                         <p className="text-xl md:text-2xl mb-8 text-blue-100">
//                             Make your home and office clean, safe and healthy with our
//                             professional services
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <Link
//                                 to="/services"
//                                 className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
//                             >
//                                 View Services <ArrowRight className="ml-2 w-5 h-5" />
//                             </Link>
//                             <Link
//                                 to="/contact"
//                                 className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-all"
//                             >
//                                 Contact Us
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="relative">
//                         <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
//                             <div className="aspect-video">
//                                 <img
//                                     src={workers}
//                                     alt="Professional Cleaning Service"
//                                     className="w-full h-full object-cover rounded-xl shadow-2xl"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ---------------- FEATURES SECTION ---------------- */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                             Why Choose Smart Clean Solutions?
//                         </h2>
//                         <p className="text-xl text-gray-600">
//                             Benefits of our professional services
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => (
//                             <Link
//                                 key={index}
//                                 to={`/feature/${feature.slug}`}
//                                 className="block text-center p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
//                             >
//                                 <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                                     <feature.icon className="w-8 h-8 text-white" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ---------------- ABOUT SECTION ---------------- */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                             About Us
//                         </h2>
//                         <p className="text-lg text-gray-700 mb-6">
//                             Smart Clean Solutions is a professional cleaning service provider
//                             company. We deliver high-quality housekeeping, deep cleaning, pest
//                             control, and other home maintenance services across Maharashtra
//                             with a trusted team of experts.
//                         </p>

//                         {/* Stats */}
//                         <div className="grid grid-cols-2 gap-6 mb-8">
//                             <div className="text-center p-4 bg-white rounded-lg shadow-md">
//                                 <div className="text-2xl font-bold text-blue-600">5000+</div>
//                                 <div className="text-gray-700">Happy Customers</div>
//                             </div>
//                             <div className="text-center p-4 bg-white rounded-lg shadow-md">
//                                 <div className="text-2xl font-bold text-indigo-600">20+</div>
//                                 <div className="text-gray-700">Cities Served</div>
//                             </div>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-4">
//                             <Link
//                                 to="/about"
//                                 className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
//                             >
//                                 Learn More <ArrowRight className="ml-2 w-4 h-4" />
//                             </Link>
//                             <Link
//                                 to="/reviews"
//                                 className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
//                             >
//                                 Reviews <ArrowRight className="ml-2 w-4 h-4" />
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="relative">
//                         <div className="aspect-video">
//                             <img
//                                 src={teamImg}
//                                 alt="Our Team"
//                                 className="w-full h-full object-cover rounded-2xl shadow-2xl"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;


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
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

    return (
        <div>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional <span className="block text-yellow-300">Cleaning Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100">
                            Make your home and office clean, safe and healthy with our professional services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition-all"
                                >
                                    View Services <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-all"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="aspect-video">
                                <img
                                    src={workers}
                                    alt="Professional Cleaning Service"
                                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Smart Clean Solutions?
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-600">
                            Benefits of our professional services
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Link
                                    to={`/feature/${feature.slug}`}
                                    className="block text-center p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-transform"
                                >
                                    <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Smart Clean Solutions is a professional cleaning service provider company. We deliver high-quality housekeeping, deep cleaning, pest control, and other home maintenance services across Maharashtra with a trusted team of experts.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-blue-600">5000+</div>
                                <div className="text-gray-700">Happy Customers</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-indigo-600">20+</div>
                                <div className="text-gray-700">Cities Served</div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                                >
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to="/reviews"
                                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
                                >
                                    Reviews <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-video">
                            <img
                                src={teamImg}
                                alt="Our Team"
                                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
