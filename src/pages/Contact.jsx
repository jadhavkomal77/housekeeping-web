// import React, { useState, useEffect } from 'react';
// import { ImWhatsapp } from "react-icons/im";
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

//     useEffect(() => {
//         document.title = 'Contact Us - Smart Clean Solutions';
//     }, []);

//     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         try {
//             await new Promise((resolve) => setTimeout(resolve, 2000));
//             setSubmitStatus('success');
//             setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//         } catch {
//             setSubmitStatus('error');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };



//     const contactInfo = [
//         { icon: Phone, title: 'Phone', lines: ['+91 99207 25398', '+91 87791 46166'] },
//         { icon: Mail, title: 'Email', lines: ['info@smartcleansolutions.com'] },
//         { icon: MapPin, title: 'Address', lines: ['Shop No.C-12, Grace Plaza Shopping Center, Swami Vivekananda Rd, opp. Sabri Masjid, Momin Nagar, Jogeshwari West, Mumbai, Maharashtra 400102'] },
//         { icon: Clock, title: 'Hours', lines: ['Mon-Sat: 8AM - 8PM', 'Sun: 9AM - 6PM'], note: 'Emergency: 24/7', noteColor: 'text-red-600' }
//     ];

//     const socialLinks = [
//         { href: 'https://facebook.com', bg: 'bg-blue-600 hover:bg-blue-700', icon: Facebook },
//         { href: 'https://instagram.com', bg: 'bg-pink-600 hover:bg-pink-700', icon: Instagram },
//         { href: 'https://twitter.com', bg: 'bg-blue-400 hover:bg-blue-500', icon: Twitter },
//     ];

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//                 <p className="text-base sm:text-lg md:text-xl text-blue-100">We are always ready for your service</p>
//             </section>

//             {/* Main Content */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
//                 <div className="space-y-8">
//                     <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
//                         {/* Contact Form */}
//                         <div>
//                             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Book Your Service</h2>
//                             <p className="text-gray-600 mb-6">Tell us your requirements and we will contact you</p>

//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             required
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             placeholder="Enter Your Name"
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
//                                         <input
//                                             type="tel"
//                                             name="phone"
//                                             required
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             placeholder="Enter Your Number"
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="Enter Your Email"
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Which service do you need? *</label>
//                                     <select
//                                         name="service"
//                                         required
//                                         value={formData.service}
//                                         onChange={handleChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                                     >
//                                         <option value="">Select Service</option>
//                                         <option value="deep-cleaning">Full Home Deep Cleaning</option>
//                                         <option value="sofa-cleaning">Sofa & Carpet Cleaning</option>
//                                         <option value="pest-control">Pest Control Services</option>
//                                         <option value="garbage-disposal">Garbage Disposal</option>
//                                         <option value="house-maid">House Maid Service</option>
//                                         <option value="light-cleaning">Light & Chandelier Cleaning</option>
//                                         <option value="sign-board">Sign Board Cleaning</option>
//                                         <option value="office-cleaning">Office Housekeeping</option>
//                                     </select>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
//                                     <textarea
//                                         name="message"
//                                         rows={4}
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder="Provide detailed information about your requirements..."
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//                                     />
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                                     <button
//                                         type="submit"
//                                         disabled={isSubmitting}
//                                         className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                                                 <span>Sending...</span>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Send className="w-5 h-5" />
//                                                 <span>Send Message</span>
//                                             </>
//                                         )}
//                                     </button>
//                                     <a
//                                         href={`https://wa.me/${9920725398}?text=Hi%20Smart%20Clean%20Solutions,%20I%20want%20to%20book%20a%20service`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="flex-1 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
//                                     >
//                                         <ImWhatsapp className="w-6 h-6" /> {/* WhatsApp icon */}
//                                         <span>WhatsApp</span>
//                                     </a>
//                                 </div>

//                                 {submitStatus === 'success' && (
//                                     <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4">
//                                         ✅ Your message has been sent! We will contact you soon.
//                                     </div>
//                                 )}
//                                 {submitStatus === 'error' && (
//                                     <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mt-4">
//                                         ❌ Something went wrong. Please try again or call us.
//                                     </div>
//                                 )}
//                             </form>
//                         </div>

//                         {/* Stay Connected */}
//                         <div>
//                             <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
//                             <div className="flex space-x-4">
//                                 {socialLinks.map((social, idx) => (
//                                     <a key={idx} href={social.href} className={`${social.bg} p-3 rounded-full transition transform hover:scale-110`}>
//                                         <social.icon className="w-6 h-6 text-white" />
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="space-y-8">
//                     <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

//                         <div className="space-y-6">
//                             {contactInfo.map((info, idx) => (
//                                 <div key={idx} className="flex items-start space-x-4">
//                                     <div className={`p-3 rounded-full ${info.icon === Phone ? 'bg-blue-600' : info.icon === Mail ? 'bg-indigo-600' : info.icon === MapPin ? 'bg-purple-600' : 'bg-green-600'}`}>
//                                         <info.icon className="w-6 h-6 text-white" />
//                                     </div>
//                                     <div className="flex-1 overflow-x-auto"> {/* add flex-1 and overflow-x-auto */}
//                                         <h3 className="font-semibold text-gray-900">{info.title}</h3>
//                                         {info.lines.map((line, i) => {
//                                             if (info.icon === Phone) {
//                                                 return <p key={i} className="text-gray-600 break-all">
//                                                     <a href={`tel:${line}`} className="hover:underline">{line}</a>
//                                                 </p>
//                                             } else if (info.icon === Mail) {
//                                                 return <p key={i} className="text-gray-600 break-all">
//                                                     <a href={`mailto:${line}`} className="hover:underline">{line}</a>
//                                                 </p>
//                                             } else {
//                                                 return <p key={i} className="text-gray-600">{line}</p>
//                                             }
//                                         })}
//                                         {info.note && <p className={`${info.noteColor || 'text-gray-500'} text-sm`}>{info.note}</p>}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>

//                     {/* Google Map */}

//                     <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
//                         <div className="w-full h-80">
//                             <iframe
//                                 title="Smart Clean Solutions Location"
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.314533264033!2d72.84260637521137!3d19.12218958210088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96d43f43d1f%3A0xf9b70c8d540d1d64!2sGrace%20Plaza%2C%20Swami%20Vivekananda%20Rd%2C%20opp.%20Sabri%20Masjid%2C%20Momin%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400102!5e0!3m2!1sen!2sin!4v1727099600000!5m2!1sen!2sin"
//                                 width="100%"
//                                 height="100%"
//                                 className="rounded-xl border-0"
//                                 allowFullScreen
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                             ></iframe>
//                         </div>
//                     </div>

//                 </div>
//             </div >
//         </div >
//     );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import { ImWhatsapp } from "react-icons/im";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

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

    const contactInfo = [
        { icon: Phone, title: 'Phone', lines: ['+91 99207 25398', '+91 87791 46166'] },
        { icon: Mail, title: 'Email', lines: ['info@smartcleansolutions.com'] },
        { icon: MapPin, title: 'Address', lines: ['Shop No.C-12, Grace Plaza Shopping Center, Swami Vivekananda Rd, opp. Sabri Masjid, Momin Nagar, Jogeshwari West, Mumbai, Maharashtra 400102'] },
        { icon: Clock, title: 'Hours', lines: ['Mon-Sat: 8AM - 8PM', 'Sun: 9AM - 6PM'], note: 'Emergency: 24/7', noteColor: 'text-red-600' }
    ];

    const socialLinks = [
        { href: 'https://facebook.com', bg: 'bg-blue-600 hover:bg-blue-700', icon: Facebook },
        { href: 'https://instagram.com', bg: 'bg-pink-600 hover:bg-pink-700', icon: Instagram },
        { href: 'https://twitter.com', bg: 'bg-blue-400 hover:bg-blue-500', icon: Twitter },
    ];

    // Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div className="bg-gray-50 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.section
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center"
                variants={itemVariants}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100">We are always ready for your service</p>
            </motion.section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div className="space-y-8" variants={itemVariants}>
                    <motion.div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-8" variants={itemVariants}>
                        <motion.div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Book Your Service</h2>
                            <p className="text-gray-600 mb-6">Tell us your requirements and we will contact you</p>

                            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
                                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter Your Name"
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
                                            placeholder="Enter Your Number"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
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
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Provide detailed information about your requirements..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    />
                                </motion.div>

                                <motion.div className="flex flex-col sm:flex-row gap-4 mt-4" variants={itemVariants}>
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
                                        <ImWhatsapp className="w-6 h-6" />
                                        <span>WhatsApp</span>
                                    </a>
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    className={`${social.bg} p-3 rounded-full`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <social.icon className="w-6 h-6 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="space-y-8" variants={itemVariants}>
                    <motion.div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8" variants={itemVariants}>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <motion.div key={idx} className="flex items-start space-x-4" variants={itemVariants}>
                                    <div className={`p-3 rounded-full ${info.icon === Phone ? 'bg-blue-600' : info.icon === Mail ? 'bg-indigo-600' : info.icon === MapPin ? 'bg-purple-600' : 'bg-green-600'}`}>
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 overflow-x-auto">
                                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                        {info.lines.map((line, i) => {
                                            if (info.icon === Phone) {
                                                return <p key={i} className="text-gray-600 break-all">
                                                    <a href={`tel:${line}`} className="hover:underline">{line}</a>
                                                </p>
                                            } else if (info.icon === Mail) {
                                                return <p key={i} className="text-gray-600 break-all">
                                                    <a href={`mailto:${line}`} className="hover:underline">{line}</a>
                                                </p>
                                            } else {
                                                return <p key={i} className="text-gray-600">{line}</p>
                                            }
                                        })}
                                        {info.note && <p className={`${info.noteColor || 'text-gray-500'} text-sm`}>{info.note}</p>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8" variants={itemVariants}>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
                        <div className="w-full h-80">
                            <iframe
                                title="Techno Housekeeping Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.314533264033!2d72.84260637521137!3d19.12218958210088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96d43f43d1f%3A0xf9b70c8d540d1d64!2sGrace%20Plaza%2C%20Swami%20Vivekananda%20Rd%2C%20opp.%20Sabri%20Masjid%2C%20Momin%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400102!5e0!3m2!1sen!2sin!4v1727099600000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="rounded-xl border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;


