import React from 'react';
import workers from '../assets/istockphoto.jpg';
import imgs from '../assets/pexels-photo-6195129.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Users } from 'lucide-react';

const Home = () => {
    React.useEffect(() => {
        document.title = 'Smart Clean Solutions - Professional Housekeeping Services';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Professional housekeeping and cleaning services. Deep cleaning, pest control, sofa cleaning, and all home maintenance services.');
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Professional
                                <span className="block text-yellow-300">Cleaning Services</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-blue-100">
                                Make your home and office clean, safe and healthy with our professional services
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/services"
                                    className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    View Services <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <img
                                    src={workers}
                                    //  src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Professional Cleaning Service"
                                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Smart Clean Solutions?
                        </h2>
                        <p className="text-xl text-gray-600">Benefits of our professional services</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Trusted & Verified',
                                description: 'Verified and trusted workers'
                            },
                            {
                                icon: Clock,
                                title: '24/7 Available',
                                description: 'Day and night available service'
                            },
                            {
                                icon: Star,
                                title: 'Quality Service',
                                description: 'High quality standards'
                            },
                            {
                                icon: Users,
                                title: 'Expert Team',
                                description: 'Experienced and skilled team'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About Us
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Smart Clean Solutions is a professional cleaning service provider company. We have been providing
                                high quality housekeeping, deep cleaning, pest control and other home maintenance services across Maharashtra for the past 5 years.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-2xl font-bold text-blue-600">5000+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-2xl font-bold text-green-600">50+</div>
                                    <div className="text-gray-600">Cities Served</div>
                                </div>
                            </div>
                            <Link
                                to="/about"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                            >
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src={imgs}
                                // src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our Team"
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-green-500 p-2 rounded-full">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">100% Satisfaction</div>
                                        <div className="text-sm text-gray-600">Guaranteed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;