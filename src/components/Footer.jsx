
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Home, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white border-t border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="space-y-4">

                        {/* <Link to="/" className="flex items-center space-x-2">

                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 w-10 object-contain rounded-full"
                            />


                            <span className="text-xl font-bold text-blue-600">
                                Techno Housekeeping
                            </span>
                        </Link> */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <img
                                src={logo}
                                alt="Techno Housekeeping Logo"
                                className="h-12 w-12 object-contain rounded-full shadow-md border border-gray-200 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-700">
                                Techno <span className="text-yellow-500">Housekeeping</span>
                            </span>
                        </Link>

                        <p className="text-sm text-white leading-relaxed">
                            Professional housekeeping and cleaning services. Your home's care, our responsibility.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-white text-sm">
                            <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-800">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-blue-800">Our Services</Link></li>
                            <li><Link to="/payment" className="hover:text-blue-800">Payment Options</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-800">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm text-white">
                            <li>• Full Home Deep Cleaning</li>
                            <li>• Sofa & Carpet Cleaning</li>
                            <li>• Pest Control Services</li>
                            <li>• House Maid Service</li>
                            <li>• Office Housekeeping</li>
                            <li>• Garbage Disposal</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3 text-white">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+91 99207 25398</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">info@TechnoHousekeeping.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1" />
                                <span className="text-sm">
                                    Grace Plaza, A302/303, Swami Vivekananda Rd, opp. Sabri Masjid, Momin Nagar, Jogeshwari West, Mumbai, Maharashtra 400102
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-100 mt-8 pt-6 text-white flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-2 md:mb-0">
                        © 2025 smart cleansolution. All Rights Reserved.
                        Website Designed & Developed by MVAD Eventful Endeavors Pvt Ltd ...
                    </p>
                    <p className="text-sm flex items-center">
                        Made with <Heart className="w-4 h-4 mx-1 text-white" /> for clean homes
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
