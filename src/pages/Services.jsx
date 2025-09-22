
import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "./servicesData";

const Services = () => {
  React.useEffect(() => {
    document.title = "Our Services - Smart Clean Solutions";
  }, []);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-h-60 object-contain bg-white"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Service+Image";
                }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>

                {/* View Details Button */}
                <button
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg 
                             font-medium shadow hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
