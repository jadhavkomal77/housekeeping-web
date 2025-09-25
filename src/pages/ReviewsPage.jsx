
// import { ArrowLeft } from "lucide-react";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Reviews data
// const reviews = [
//     {
//         author: "Rahul Sharma",
//         rating: 5,
//         text: "Absolutely outstanding cleaning service! My home has never looked this spotless. Highly recommended!",
//     },
//     {
//         author: "Priya Deshmukh",
//         rating: 5,
//         text: "Extremely satisfied with their professional service. The team was punctual, polite, and meticulous.",
//     },
//     {
//         author: "Amit Patil",
//         rating: 5,
//         text: "Superb service! Quick response and thorough cleaning. My home feels fresh and hygienic.",
//     },
//     {
//         author: "Sneha Kulkarni",
//         rating: 5,
//         text: "Friendly, efficient, and detail-oriented staff. The results exceeded my expectations!",
//     },
//     {
//         author: "Kiran Joshi",
//         rating: 4,
//         text: "Reliable and professional cleaning team. They left everything spotless and organized.",
//     },
//     {
//         author: "Anjali Deshpande",
//         rating: 5,
//         text: "Outstanding experience! My home looks immaculate and welcoming. Truly professional service.",
//     },
//     {
//         author: "Vikram Patil",
//         rating: 4,
//         text: "Professional, thorough, and punctual. The team did an excellent job and I’m very happy with the results.",
//     },
//     {
//         author: "Neha Kulkarni",
//         rating: 5,
//         text: "Exceptional cleaning service! Every corner of my home is sparkling. The team was courteous and highly skilled.",
//     },
// ];

// const ReviewsPage = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="min-h-screen bg-gray-50 py-16">
//             <h1 className="text-4xl font-bold text-center mb-8">Our Customer Reviews</h1>

//             <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-xl shadow-md">
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {reviews.map((r, i) => (
//                         <div
//                             key={i}
//                             className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//                         >
//                             <p className="text-gray-700 mb-2">{r.text}</p>
//                             <p className="font-semibold">
//                                 {r.author} ({r.rating}⭐)
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="text-center mt-8">
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-gray-500 transition"
//                     >
//                         Back
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewsPage;


import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const reviews = [
    {
        author: "Rahul Sharma",
        rating: 5,
        text: "Absolutely outstanding cleaning service! My home has never looked this spotless. Highly recommended!",
    },
    {
        author: "Priya Deshmukh",
        rating: 5,
        text: "Extremely satisfied with their professional service. The team was punctual, polite, and meticulous.",
    },
    {
        author: "Amit Patil",
        rating: 5,
        text: "Superb service! Quick response and thorough cleaning. My home feels fresh and hygienic.",
    },
    {
        author: "Sneha Kulkarni",
        rating: 5,
        text: "Friendly, efficient, and detail-oriented staff. The results exceeded my expectations!",
    },
    {
        author: "Kiran Joshi",
        rating: 4,
        text: "Reliable and professional cleaning team. They left everything spotless and organized.",
    },
    {
        author: "Anjali Deshpande",
        rating: 5,
        text: "Outstanding experience! My home looks immaculate and welcoming. Truly professional service.",
    },
    {
        author: "Vikram Patil",
        rating: 4,
        text: "Professional, thorough, and punctual. The team did an excellent job and I’m very happy with the results.",
    },
    {
        author: "Neha Kulkarni",
        rating: 5,
        text: "Exceptional cleaning service! Every corner of my home is sparkling. The team was courteous and highly skilled.",
    },
];

const ReviewsPage = () => {
    const navigate = useNavigate();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our Customer Reviews
            </motion.h1>

            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
                            variants={cardVariants}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <p className="text-gray-700 mb-4">{r.text}</p>
                            <p className="font-semibold text-gray-900">
                                {r.author} ({r.rating}⭐)
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowLeft className="inline-block w-5 h-5 mr-2" />
                        Back
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;

