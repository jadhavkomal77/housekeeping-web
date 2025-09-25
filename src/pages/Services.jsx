
// import React from "react";
// import { Link } from "react-router-dom";
// import { servicesData } from "./servicesData";

// const Services = () => {
//   React.useEffect(() => {
//     document.title = "Our Services - Smart Clean Solutions";
//   }, []);

//   return (
//     <section className="py-16 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Our Services
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service) => (
//             <Link
//               key={service.slug}
//               to={`/services/${service.slug}`}
//               className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-auto max-h-60 object-contain bg-white"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/400x300?text=Service+Image";
//                 }}
//               />
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 flex-grow">{service.description}</p>

//                 {/* View Details Button */}
//                 <button
//                   className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg 
//                              font-medium shadow hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "./servicesData";
import { motion } from "framer-motion";

const Services = () => {
  React.useEffect(() => {
    document.title = "Our Services - Smart Clean Solutions";
  }, []);

  // Container variants for staggered children
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 20px 35px rgba(0,0,0,0.15)" }}
            >
              <Link to={`/services/${service.slug}`} className="flex flex-col flex-grow">

                {/* Image */}
                <motion.div className="overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Service+Image"; }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
                  >
                    View Details
                  </motion.button>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

