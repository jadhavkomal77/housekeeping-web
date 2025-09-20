import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">Smart Clean Solutions</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Professional housekeeping and cleaning services. Your home's care, our responsibility.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Payment Options
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
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
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-gray-300">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-gray-300">info@smartcleansolutions.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-red-400 mt-1" />
                                <span className="text-sm text-gray-300">
                                    Shop No. 15, Shivaji Complex,<br />
                                    Pune Road, Maharashtra
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400 mb-4 md:mb-0">
                            © 2024 Smart Clean Solutions. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400 flex items-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for clean homes
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;