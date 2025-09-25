// import React from "react";
// import work1 from "../assets/img1.jpeg";
// import work2 from "../assets/img2.jpeg";
// import work3 from "../assets/img3.jpeg";
// import work4 from "../assets/img4.jpeg";
// import work5 from "../assets/img5.jpeg";
// import work6 from "../assets/img6.jpeg";
// import work7 from "../assets/img7.jpeg";
// import work8 from "../assets/img8.jpeg";
// import work9 from "../assets/img9.jpeg";

// const works = [
//     { id: 1, image: work1, title: "Office Floor Scrubbing" },
//     { id: 2, image: work2, title: "Office Floor Polishing" },
//     { id: 3, image: work3, title: "Office Carpet Vacuuming" },
//     { id: 4, image: work4, title: "Sofa Deep Cleaning" },
//     { id: 5, image: work5, title: "Cupboard & Glass Cleaning" },
//     { id: 6, image: work6, title: "Hall Sweeping & Mopping" },
//     { id: 7, image: work7, title: "Outdoor Pressure Washing" },
//     { id: 8, image: work8, title: "Corner & Edge Vacuum Cleaning" },
//     { id: 9, image: work9, title: "Carpet Cleaning" },
// ];

// const RecentWork = () => {
//     return (
//         <div className="min-h-screen bg-gray-50 py-16">
//             <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
//                 Our Recent Work
//             </h1>

//             <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//                 {works.map((work) => (
//                     <div
//                         key={work.id}
//                         className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 transform hover:scale-105"
//                     >
//                         <img
//                             src={work.image}
//                             alt={work.title}
//                             className="w-full h-56 object-cover"
//                         />
//                         <div className="p-4 text-center">
//                             <h2 className="text-lg font-semibold text-gray-800">
//                                 {work.title}
//                             </h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RecentWork;

import React from "react";
import { motion } from "framer-motion";
import work1 from "../assets/img1.jpeg";
import work2 from "../assets/img2.jpeg";
import work3 from "../assets/img3.jpeg";
import work4 from "../assets/img4.jpeg";
import work5 from "../assets/img5.jpeg";
import work6 from "../assets/img6.jpeg";
import work7 from "../assets/img7.jpeg";
import work8 from "../assets/img8.jpeg";
import work9 from "../assets/img9.jpeg";

const works = [
    { id: 1, image: work1, title: "Office Floor Scrubbing" },
    { id: 2, image: work2, title: "Office Floor Polishing" },
    { id: 3, image: work3, title: "Office Carpet Vacuuming" },
    { id: 4, image: work4, title: "Sofa Deep Cleaning" },
    { id: 5, image: work5, title: "Cupboard & Glass Cleaning" },
    { id: 6, image: work6, title: "Hall Sweeping & Mopping" },
    { id: 7, image: work7, title: "Outdoor Pressure Washing" },
    { id: 8, image: work8, title: "Corner & Edge Vacuum Cleaning" },
    { id: 9, image: work9, title: "Carpet Cleaning" },
];

// Motion Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RecentWork = () => {
    return (
        <motion.div
            className="min-h-screen bg-gray-50 py-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl font-bold text-center text-blue-900 mb-12"
                variants={itemVariants}
            >
                Our Recent Work
            </motion.h1>

            <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {works.map((work) => (
                    <motion.div
                        key={work.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {work.title}
                            </h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default RecentWork;

