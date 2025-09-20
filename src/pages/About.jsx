// import React from "react";
// import workers2 from '../assets/istockphoto-00.jpg';
// import { Users, Award, Shield, Heart } from "lucide-react";

// const About = () => {
//     React.useEffect(() => {
//         document.title = "About Us - Smart Clean Solutions";
//     }, []);

//     return (
//         <div className="bg-gray-50">
//             {/* Header Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
//                 <div className="max-w-7xl mx-auto px-6 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
//                     <p className="text-lg md:text-xl text-blue-100">
//                         Your home's care, our responsibility
//                     </p>
//                 </div>
//             </section>

//             {/* Company Story */}
//             <section className="py-16">
//                 <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//                     <div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                             Our Story
//                         </h2>
//                         <p className="text-gray-700 mb-6 leading-relaxed">
//                             Smart Clean Solutions, established in 2019, is a leading
//                             housekeeping and cleaning services company. We started small and
//                             have now become a trusted name in Maharashtra.
//                         </p>
//                         <p className="text-gray-700 mb-6 leading-relaxed">
//                             Our mission is to ensure cleanliness and health in every home and
//                             office. With our team of trained workers, we provide all types of
//                             cleaning and maintenance services.
//                         </p>
//                         <div className="grid grid-cols-2 gap-6">
//                             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//                                 <div className="text-3xl font-bold text-blue-600">5+</div>
//                                 <p className="text-gray-600">Years Experience</p>
//                             </div>
//                             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//                                 <div className="text-3xl font-bold text-green-600">100%</div>
//                                 <p className="text-gray-600">Customer Satisfaction</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <img
//                             src={workers2}
//                             // src="https://media.istockphoto.com/id/915461310/photo/group-of-janitors-cleaning-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=oGZsXceFVxgF16uUQgq4TCG7WEfAwY-RLBziLA4LIUw="

//                             alt="Our Team Working"
//                             className="w-full h-96 object-cover rounded-2xl shadow-md"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Values Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                             Our Values
//                         </h2>
//                         <p className="text-gray-600">The principles we work on</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {[
//                             { icon: Shield, title: "Trust", description: "Have complete faith in us" },
//                             { icon: Award, title: "Quality", description: "High quality service always" },
//                             { icon: Users, title: "Teamwork", description: "Best results through collective efforts" },
//                             { icon: Heart, title: "Care", description: "Care for your home like ours" },
//                         ].map((value, index) => (
//                             <div
//                                 key={index}
//                                 className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md text-center transition"
//                             >
//                                 <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-green-600">
//                                     <value.icon className="w-8 h-8 text-white" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                                     {value.title}
//                                 </h3>
//                                 <p className="text-gray-600">{value.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                             Our Team
//                         </h2>
//                         <p className="text-gray-600">
//                             Experienced and trained professionals
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 name: "Rahul Sharma",
//                                 role: "Managing Director",
//                                 img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300",
//                             },
//                             {
//                                 name: "Priya Patil",
//                                 role: "Operations Head",
//                                 img: "https://images.pexels.com/photos/3771111/pexels-photo-3771111.jpeg?auto=compress&cs=tinysrgb&w=300",
//                             },
//                             {
//                                 name: "Amit Deshmukh",
//                                 role: "Quality Manager",
//                                 img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
//                             },
//                         ].map((member, idx) => (
//                             <div
//                                 key={idx}
//                                 className="text-center bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition"
//                             >
//                                 <img
//                                     src={member.img}
//                                     alt={member.name}
//                                     className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow"
//                                 />
//                                 <h3 className="text-xl font-semibold text-gray-900">
//                                     {member.name}
//                                 </h3>
//                                 <p className="text-gray-600">{member.role}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About;

import React from "react";
import workers2 from '../assets/pexels-photo.jpg';
import { Users, Award, Shield, Heart } from "lucide-react";

const About = () => {
    React.useEffect(() => {
        document.title = "About Us - Smart Clean Solutions";
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg md:text-xl text-blue-100">
                        Your home's care, our responsibility
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Smart Clean Solutions, established in 2019, is a leading housekeeping and cleaning services company. We started small and have now become a trusted name in Maharashtra.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Our mission is to ensure cleanliness and health in every home and office. With our team of trained workers, we provide all types of cleaning and maintenance services.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                                <div className="text-3xl font-bold text-blue-600">5+</div>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                                <div className="text-3xl font-bold text-indigo-600">100%</div>
                                <p className="text-gray-600">Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={workers2} alt="Our Team Working" className="w-full h-96 object-cover rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-gray-600">The principles we work on</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Trust", description: "Have complete faith in us" },
                            { icon: Award, title: "Quality", description: "High quality service always" },
                            { icon: Users, title: "Teamwork", description: "Best results through collective efforts" },
                            { icon: Heart, title: "Care", description: "Care for your home like ours" },
                        ].map((value, index) => (
                            <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md text-center transition-shadow duration-300">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                        <p className="text-gray-600">Experienced and trained professionals</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Rahul Sharma", role: "Managing Director", img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300" },
                            { name: "Priya Patil", role: "Operations Head", img: "https://images.pexels.com/photos/3771111/pexels-photo-3771111.jpeg?auto=compress&cs=tinysrgb&w=300" },
                            { name: "Amit Deshmukh", role: "Quality Manager", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        ].map((member, idx) => (
                            <div key={idx} className="text-center bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
                                <img src={member.img} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow" />
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
