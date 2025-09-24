
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../pages/servicesData';
import { ChevronRight } from 'lucide-react';

const ServiceDetail = () => {
    const { serviceSlug } = useParams();
    const service = servicesData.find(s => s.slug === serviceSlug);

    if (!service) {
        return (
            <div className="py-16 text-center">
                <h2 className="text-3xl font-bold">Service Not Found</h2>
                <p className="mt-4 text-gray-600">The service you are looking for does not exist.</p>
                <Link
                    to="/services"
                    className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                >
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        to="/services"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        ← Back to Services
                    </Link>
                </div>

                <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-gray-700 text-2xl mb-8">{service.description}</p>

                {/* Image */}
                {/* <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-xl shadow-md mb-12"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Service+Image'; }}
                /> */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-h-[500px] object-contain rounded-xl shadow-md mb-12 bg-white"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Service+Image'; }}
                />

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-2 text-lg">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                                <ChevronRight className="w-5 h-5 text-blue-600 mr-2" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Steps / Process */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
                    <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                        {service.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                    </ol>
                </div>

                {/* Time & Price */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 text-md gap-6">
                    <div className="bg-white p-6 rounded-xl  shadow-md">
                        <h3 className="font-semibold mb-2">Approx. Time</h3>
                        <p>{service.time}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-semibold mb-2">Starting Price</h3>
                        <p>{service.price}</p>
                    </div>
                </div>

                {/* FAQs */}
                {service.faqs.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                        <div className="space-y-4">
                            {service.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl text-lg shadow-md">
                                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Book Now Button */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                    >
                        Book Now
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;
