import React from 'react';
import workers from '../assets/istockphoto.jpg';
import teamImg from '../assets/istockphoto-00.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Users } from 'lucide-react';

const Home = () => {
    React.useEffect(() => {
        document.title = 'Smart Clean Solutions - Professional Housekeeping Services';
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Professional <span className="block text-yellow-300">Cleaning Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Make your home and office clean, safe and healthy with our professional services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all">
                                View Services <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <img src={workers} alt="Professional Cleaning Service" className="w-full h-80 object-cover rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Smart Clean Solutions?</h2>
                        <p className="text-xl text-gray-600">Benefits of our professional services</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: 'Trusted & Verified', description: 'Verified and trusted workers' },
                            { icon: Clock, title: '24/7 Available', description: 'Day and night service' },
                            { icon: Star, title: 'Quality Service', description: 'High quality standards' },
                            { icon: Users, title: 'Expert Team', description: 'Experienced and skilled team' }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
                                <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Smart Clean Solutions is a professional cleaning service provider company. We have been providing high quality housekeeping, deep cleaning, pest control and other home maintenance services across Maharashtra for the past 5 years.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-blue-600">5000+</div>
                                <div className="text-gray-700">Happy Customers</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-indigo-600">50+</div>
                                <div className="text-gray-700">Cities Served</div>
                            </div>
                        </div>
                        <Link to="/about" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative">
                        <img src={teamImg} alt="Our Team" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
