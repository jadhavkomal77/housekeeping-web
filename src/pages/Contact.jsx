// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState('');

//     React.useEffect(() => {
//         document.title = 'Contact Us - Smart Clean Solutions';
//     }, []);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission (replace with actual form service)
//         try {
//             // Here you would integrate with EmailJS, Formspree, or Netlify Forms
//             await new Promise(resolve => setTimeout(resolve, 2000));
//             setSubmitStatus('success');
//             setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//         } catch (error) {
//             setSubmitStatus('error');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="py-16">
//             {/* Header Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//                     <p className="text-xl text-blue-100">We are always ready for your service</p>
//                 </div>
//             </section>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {/* Contact Form */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Service</h2>
//                         <p className="text-gray-600 mb-8">Tell us your requirements and we will contact you</p>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                                         Full Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         required
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                         placeholder="Enter your name"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                                         Mobile Number *
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         required
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                         placeholder="+91 98765 43210"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                     placeholder="your.email@example.com"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                                     Which service do you need? *
//                                 </label>
//                                 <select
//                                     id="service"
//                                     name="service"
//                                     required
//                                     value={formData.service}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                 >
//                                     <option value="">Select Service</option>
//                                     <option value="deep-cleaning">Full Home Deep Cleaning</option>
//                                     <option value="sofa-cleaning">Sofa & Carpet Cleaning</option>
//                                     <option value="pest-control">Pest Control Services</option>
//                                     <option value="garbage-disposal">Garbage Disposal</option>
//                                     <option value="house-maid">House Maid Service</option>
//                                     <option value="light-cleaning">Light & Chandelier Cleaning</option>
//                                     <option value="sign-board">Sign Board Cleaning</option>
//                                     <option value="office-cleaning">Office Housekeeping</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                                     Additional Information
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     rows={4}
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                     placeholder="Provide detailed information about your requirements..."
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                                         <span>Sending...</span>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Send className="w-5 h-5" />
//                                         <span>Send Message</span>
//                                     </>
//                                 )}
//                             </button>

//                             {submitStatus === 'success' && (
//                                 <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
//                                     ✅ Your message has been sent! We will contact you soon.
//                                 </div>
//                             )}

//                             {submitStatus === 'error' && (
//                                 <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
//                                     ❌ Something went wrong. Please try again or call us.
//                                 </div>
//                             )}
//                         </form>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="space-y-8">
//                         {/* Contact Details */}
//                         <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
//                             <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

//                             <div className="space-y-6">
//                                 <div className="flex items-start space-x-4">
//                                     <div className="bg-blue-600 p-3 rounded-full">
//                                         <Phone className="w-6 h-6 text-white" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-gray-900">Phone Number</h3>
//                                         <p className="text-gray-600">+91 98765 43210</p>
//                                         <p className="text-gray-600">+91 87654 32109</p>
//                                         <p className="text-sm text-gray-500">8:00 AM to 10:00 PM</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start space-x-4">
//                                     <div className="bg-green-600 p-3 rounded-full">
//                                         <Mail className="w-6 h-6 text-white" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-gray-900">Email Address</h3>
//                                         <p className="text-gray-600">info@smartcleansolutions.com</p>
//                                         <p className="text-gray-600">services@smartcleansolutions.com</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start space-x-4">
//                                     <div className="bg-purple-600 p-3 rounded-full">
//                                         <MapPin className="w-6 h-6 text-white" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-gray-900">Office Address</h3>
//                                         <p className="text-gray-600">
//                                             Shop No. 15, Shivaji Complex,<br />
//                                             Near City Mall, Pune Road,<br />
//                                             Maharashtra - 411001
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start space-x-4">
//                                     <div className="bg-orange-600 p-3 rounded-full">
//                                         <Clock className="w-6 h-6 text-white" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-gray-900">Working Hours</h3>
//                                         <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
//                                         <p className="text-gray-600">Sunday: 9:00 AM - 6:00 PM</p>
//                                         <p className="text-sm text-red-600">Emergency: 24/7 Available</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Links */}
//                         <div className="bg-white rounded-2xl shadow-xl p-8">
//                             <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>

//                             <div className="flex space-x-4">
//                                 <a
//                                     href="https://facebook.com/smartcleansolutions"
//                                     className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
//                                 >
//                                     <Facebook className="w-6 h-6 text-white" />
//                                 </a>
//                                 <a
//                                     href="https://instagram.com/smartcleansolutions"
//                                     className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
//                                 >
//                                     <Instagram className="w-6 h-6 text-white" />
//                                 </a>
//                                 <a
//                                     href="https://twitter.com/smartcleansolutions"
//                                     className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
//                                 >
//                                     <Twitter className="w-6 h-6 text-white" />
//                                 </a>
//                             </div>

//                             <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
//                                 <p className="text-sm text-gray-600">
//                                     📱 Send direct message on WhatsApp: <br />
//                                     <strong className="text-green-600">+91 98765 43210</strong>
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Service Areas */}
//                         <div className="bg-white rounded-2xl shadow-xl p-8">
//                             <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h2>

//                             <div className="grid grid-cols-2 gap-4 text-sm">
//                                 <div className="space-y-2">
//                                     <p className="font-semibold text-gray-800">Pune City:</p>
//                                     <ul className="text-gray-600 space-y-1">
//                                         <li>• Shivajinagar</li>
//                                         <li>• Kothrud</li>
//                                         <li>• Baner</li>
//                                         <li>• Wakad</li>
//                                     </ul>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <p className="font-semibold text-gray-800">Mumbai City:</p>
//                                     <ul className="text-gray-600 space-y-1">
//                                         <li>• Andheri</li>
//                                         <li>• Borivali</li>
//                                         <li>• Thane</li>
//                                         <li>• Navi Mumbai</li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <p className="text-sm text-blue-600 mt-4 font-medium">
//                                 * Service available in other areas too. Call to confirm.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;


import React, { useState } from 'react';
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

    React.useEffect(() => {
        document.title = 'Contact Us - Smart Clean Solutions';
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 py-16">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-blue-100">We are always ready for your service</p>
                </div>
            </section>

            {/* Form + Contact Info */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Service</h2>
                    <p className="text-gray-600 mb-8">Tell us your requirements and we will contact you</p>
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your name"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                                    placeholder="+91 98765 43210"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Which service do you need? *</label>
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                                placeholder="Provide detailed information about your requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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

                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                ✅ Your message has been sent! We will contact you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                ❌ Something went wrong. Please try again or call us.
                            </div>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-600 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-600">+91 87654 32109</p>
                                    <p className="text-sm text-gray-500">8:00 AM to 10:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-600 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                                    <p className="text-gray-600">info@smartcleansolutions.com</p>
                                    <p className="text-gray-600">services@smartcleansolutions.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-600 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                                    <p className="text-gray-600">
                                        Shop No. 15, Shivaji Complex,<br />
                                        Near City Mall, Pune Road,<br />
                                        Maharashtra - 411001
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-600 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                                    <p className="text-gray-600">Sunday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-sm text-red-600">Emergency: 24/7 Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
