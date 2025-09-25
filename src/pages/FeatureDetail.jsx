import React from "react";
import { useParams, Link } from "react-router-dom";
import { Shield, Clock, Star, Users, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        slug: "trusted-verified",
        title: "Trusted & Verified",
        tagline: "Your safety, our responsibility",
        icon: Shield,
        details:
            "All our staff undergo strict background checks and verification. Professionalism, honesty, and reliability are at the heart of our services.",
        highlights: [
            "Verified staff with identity & address checks",
            "Trained for safe and secure operations",
            "Building trust with 5000+ happy customers",
        ],
    },
    {
        slug: "24-7-available",
        title: "24/7 Available",
        tagline: "Anytime, anywhere – we’re here for you",
        icon: Clock,
        details:
            "Cleaning emergencies don’t wait, and neither do we. Our 24/7 availability ensures your schedule is never compromised.",
        highlights: [
            "Round-the-clock availability",
            "Weekend & late-night slots",
            "Emergency service support",
        ],
    },
    {
        slug: "quality-service",
        title: "Quality Service",
        tagline: "Premium quality, eco-friendly cleaning",
        icon: Star,
        details:
            "Our cleaning services follow strict quality standards. From eco-friendly products to trained professionals, we ensure lasting cleanliness.",
        highlights: [
            "Eco-friendly cleaning products",
            "Advanced equipment usage",
            "Customer-first quality checks",
        ],
    },
    {
        slug: "expert-team",
        title: "Expert Team",
        tagline: "Experience you can rely on",
        icon: Users,
        details:
            "Our skilled experts specialize in deep cleaning, pest control, and maintenance. Precision and professionalism are our promise.",
        highlights: [
            "Specialized experts for every service",
            "Continuous training & skill development",
            "20+ cities covered by our teams",
        ],
    },
];

const FeatureDetail = () => {
    const { slug } = useParams();
    const feature = features.find((f) => f.slug === slug);

    if (!feature) {
        return (
            <div className="max-w-4xl mx-auto py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature not found</h2>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Home
                </Link>
            </div>
        );
    }

    const Icon = feature.icon;

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-60 bg-blue-700 flex flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="bg-white p-4 rounded-full mb-4 shadow-lg"
                >
                    <Icon className="w-10 h-10 text-blue-600" />
                </motion.div>
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    {feature.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-200 mt-3"
                >
                    {feature.tagline}
                </motion.p>
            </motion.div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{feature.details}</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3 },
                            },
                        }}
                        className="list-disc list-inside text-gray-700 mb-6 space-y-2"
                    >
                        {feature.highlights.map((point, i) => (
                            <motion.li
                                key={i}
                                variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            >
                                {point}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md"
                        >
                            Get a Free Quote
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-4 pb-12 text-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-md"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FeatureDetail;
