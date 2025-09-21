import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        document.title = 'Contact Us - Smart Clean Solutions';
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappNumber = '919920725398'; // +91 included

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100">We are always ready for your service</p>
            </section>

            {/* Form + Contact Info */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Book Your Service</h2>
                    <p className="text-gray-600 mb-6">Tell us your requirements and we will contact you</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Which service do you need? *</label>
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            >
                                <option value="">Select Service</option>
                                <option value="deep-cleaning">Full Home Deep Cleaning</option>
                                <option value="sofa-cleaning">Sofa & Carpet Cleaning</option>
                                <option value="pest-control">Pest Control Services</option>
                                <option value="garbage-disposal">Garbage Disposal</option>
                                <option value="house-maid">House Maid Service</option>
                                <option value="light-cleaning">Light & Chandelier Cleaning</option>
                                <option value="sign-board">Sign Board Cleaning</option>
                                <option value="office-cleaning">Office Housekeeping</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Provide detailed information about your requirements..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            <a
                                href={`https://wa.me/${9920725398}?text=Hi%20Smart%20Clean%20Solutions,%20I%20want%20to%20book%20a%20service`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 3C9.372 3 4 8.372 4 15c0 2.657.869 5.116 2.33 7.1L4 29l7.132-2.36A12.932 12.932 0 0016 27c6.628 0 12-5.372 12-12S22.628 3 16 3zm5.837 18.91c-.314.885-1.88 1.684-2.592 1.79-.698.104-1.55.148-4.28-1.016-3.547-1.478-5.806-5.17-5.978-5.416-.171-.246-1.403-1.696-1.403-3.24 0-1.544.859-2.307 1.164-2.61.305-.303.665-.303.885-.303.22 0 .436.003.626.003.203 0 .473-.077.74.56.266.637.903 2.207.983 2.37.082.164.137.354.027.57-.11.215-.16.35-.32.536-.16.184-.339.404-.484.542-.16.15-.325.315-.141.618.184.303.816 1.348 1.75 2.19 1.2 1.075 2.2 1.422 2.5 1.584.3.162.476.14.651-.084.175-.225.755-.882.958-1.185.203-.303.407-.254.679-.154.271.1 1.704.803 1.996.949.292.147.487.22.557.342.07.122.07.71-.245 1.595z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4">
                                ✅ Your message has been sent! We will contact you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mt-4">
                                ❌ Something went wrong. Please try again or call us.
                            </div>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            {[
                                { icon: Phone, title: 'Phone Number', lines: ['+91 99207 25398', '+91 87791 46166'], note: '8:00 AM to 10:00 PM' },
                                { icon: Mail, title: 'Email Address', lines: ['info@smartcleansolutions.com', 'services@smartcleansolutions.com'] },
                                { icon: MapPin, title: 'Office Address', lines: ['Shop No. 15, Shivaji Complex,', 'Near City Mall, Pune Road,', 'Maharashtra - 411001'] },
                                { icon: Clock, title: 'Working Hours', lines: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 6:00 PM'], note: 'Emergency: 24/7 Available', noteColor: 'text-red-600' }
                            ].map((info, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-full ${info.icon === Phone ? 'bg-blue-600' : info.icon === Mail ? 'bg-indigo-600' : info.icon === MapPin ? 'bg-purple-600' : 'bg-green-600'}`}>
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                        {info.lines.map((line, i) => <p key={i} className="text-gray-600">{line}</p>)}
                                        {info.note && <p className={`text-sm ${info.noteColor || 'text-gray-500'}`}>{info.note}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition transform hover:scale-110">
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a href="https://instagram.com" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition transform hover:scale-110">
                                <Instagram className="w-6 h-6 text-white" />
                            </a>
                            <a href="https://twitter.com" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition transform hover:scale-110">
                                <Twitter className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 3C9.372 3 4 8.372 4 15c0 2.657.869 5.116 2.33 7.1L4 29l7.132-2.36A12.932 12.932 0 0016 27c6.628 0 12-5.372 12-12S22.628 3 16 3zm5.837 18.91c-.314.885-1.88 1.684-2.592 1.79-.698.104-1.55.148-4.28-1.016-3.547-1.478-5.806-5.17-5.978-5.416-.171-.246-1.403-1.696-1.403-3.24 0-1.544.859-2.307 1.164-2.61.305-.303.665-.303.885-.303.22 0 .436.003.626.003.203 0 .473-.077.74.56.266.637.903 2.207.983 2.37.082.164.137.354.027.57-.11.215-.16.35-.32.536-.16.184-.339.404-.484.542-.16.15-.325.315-.141.618.184.303.816 1.348 1.75 2.19 1.2 1.075 2.2 1.422 2.5 1.584.3.162.476.14.651-.084.175-.225.755-.882.958-1.185.203-.303.407-.254.679-.154.271.1 1.704.803 1.996.949.292.147.487.22.557.342.07.122.07.71-.245 1.595z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
