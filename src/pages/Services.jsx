// import React from 'react';
// import { Home, Sofa, Bug, Trash2, UserCheck, Lightbulb, FileText, Sparkles } from 'lucide-react';

// const Services = () => {
//   React.useEffect(() => {
//     document.title = 'Our Services - Smart Clean Solutions';
//   }, []);

//   const services = [
//     {
//       icon: Home,
//       title: 'Full Home Deep Cleaning',
//       description: 'Complete deep cleaning of entire home - kitchen, bathroom, bedroom, hall complete cleaning of all areas',
//       features: ['Kitchen Deep Clean', 'Bathroom Sanitization', 'Floor Mopping & Polishing', 'Window & Glass Cleaning']
//     },
//     {
//       icon: Sofa,
//       title: 'Sofa & Carpet Cleaning',
//       description: 'Professional sofa and carpet cleaning - stain removal, odor elimination and sanitization',
//       features: ['Stain Removal', 'Deep Vacuum Cleaning', 'Fabric Protection', 'Odor Elimination']
//     },
//     {
//       icon: Bug,
//       title: 'Pest Control Services',
//       description: 'Pest control - complete protection from cockroaches, ants, rats and other insects',
//       features: ['Cockroach Treatment', 'Ant Control', 'Rodent Control', 'Termite Treatment']
//     },
//     {
//       icon: Trash2,
//       title: 'Garbage Disposal Service',
//       description: 'Waste management service - daily waste collection and proper disposal',
//       features: ['Daily Waste Collection', 'Segregation Service', 'Eco-friendly Disposal', 'Recycling Support']
//     },
//     {
//       icon: UserCheck,
//       title: 'House Maid Service',
//       description: 'House maid service - trained workers for daily housework, cooking and maintenance',
//       features: ['Daily Housekeeping', 'Cooking Service', 'Laundry & Ironing', 'Elderly Care Support']
//     },
//     {
//       icon: Lightbulb,
//       title: 'Light & Jhumar Cleaning',
//       description: 'Light and chandelier cleaning - careful cleaning of all types of lighting fixtures',
//       features: ['Chandelier Cleaning', 'LED Light Maintenance', 'Ceiling Fan Cleaning', 'Decorative Light Care']
//     },
//     {
//       icon: FileText,
//       title: 'Sign Board Cleaning',
//       description: 'Sign board cleaning - cleaning of sign boards for shops, offices and commercial properties',
//       features: ['Acrylic Board Cleaning', 'Metal Sign Maintenance', 'LED Display Cleaning', 'Hoarding Washing']
//     },
//     {
//       icon: Sparkles,
//       title: 'Office Housekeeping',
//       description: 'Office housekeeping - daily cleaning services for commercial spaces, shops and offices',
//       features: ['Daily Office Cleaning', 'Washroom Maintenance', 'Floor Care', 'Workspace Sanitization']
//     }
//   ];

//   return (
//     <div className="py-16">
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
//           <p className="text-xl text-blue-100">All types of cleaning and housekeeping services</p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Special Services</h2>
//             <p className="text-xl text-gray-600">Professional solutions for every need</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
//                 <div className="p-6">
//                   <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
//                     <service.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

//                   <div className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-700">
//                         <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="px-6 pb-6">
//                   <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6">
//               <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-blue-600">✓</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
//               <p className="text-gray-600">If not completely satisfied with our work, free service again</p>
//             </div>

//             <div className="text-center p-6">
//               <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-green-600">⚡</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
//               <p className="text-gray-600">Book today and get service today</p>
//             </div>

//             <div className="text-center p-6">
//               <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-yellow-600">💰</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Rates</h3>
//               <p className="text-gray-600">Best quality service at affordable rates</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { Home, Sofa, Bug, Trash2, UserCheck, Lightbulb, FileText, Sparkles } from 'lucide-react';

const Services = () => {
  React.useEffect(() => {
    document.title = 'Our Services - Smart Clean Solutions';
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Full Home Deep Cleaning',
      description: 'Complete deep cleaning of entire home - kitchen, bathroom, bedroom, hall complete cleaning of all areas',
      features: ['Kitchen Deep Clean', 'Bathroom Sanitization', 'Floor Mopping & Polishing', 'Window & Glass Cleaning']
    },
    {
      icon: Sofa,
      title: 'Sofa & Carpet Cleaning',
      description: 'Professional sofa and carpet cleaning - stain removal, odor elimination and sanitization',
      features: ['Stain Removal', 'Deep Vacuum Cleaning', 'Fabric Protection', 'Odor Elimination']
    },
    {
      icon: Bug,
      title: 'Pest Control Services',
      description: 'Pest control - complete protection from cockroaches, ants, rats and other insects',
      features: ['Cockroach Treatment', 'Ant Control', 'Rodent Control', 'Termite Treatment']
    },
    {
      icon: Trash2,
      title: 'Garbage Disposal Service',
      description: 'Waste management service - daily waste collection and proper disposal',
      features: ['Daily Waste Collection', 'Segregation Service', 'Eco-friendly Disposal', 'Recycling Support']
    },
    {
      icon: UserCheck,
      title: 'House Maid Service',
      description: 'House maid service - trained workers for daily housework, cooking and maintenance',
      features: ['Daily Housekeeping', 'Cooking Service', 'Laundry & Ironing', 'Elderly Care Support']
    },
    {
      icon: Lightbulb,
      title: 'Light & Jhumar Cleaning',
      description: 'Light and chandelier cleaning - careful cleaning of all types of lighting fixtures',
      features: ['Chandelier Cleaning', 'LED Light Maintenance', 'Ceiling Fan Cleaning', 'Decorative Light Care']
    },
    {
      icon: FileText,
      title: 'Sign Board Cleaning',
      description: 'Sign board cleaning - cleaning of sign boards for shops, offices and commercial properties',
      features: ['Acrylic Board Cleaning', 'Metal Sign Maintenance', 'LED Display Cleaning', 'Hoarding Washing']
    },
    {
      icon: Sparkles,
      title: 'Office Housekeeping',
      description: 'Office housekeeping - daily cleaning services for commercial spaces, shops and offices',
      features: ['Daily Office Cleaning', 'Washroom Maintenance', 'Floor Care', 'Workspace Sanitization']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">All types of cleaning and housekeeping services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Special Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '100% Satisfaction Guarantee', icon: '✓', color: 'blue', desc: 'If not completely satisfied with our work, free service again' },
              { title: 'Same Day Service', icon: '⚡', color: 'green', desc: 'Book today and get service today' },
              { title: 'Affordable Rates', icon: '💰', color: 'yellow', desc: 'Best quality service at affordable rates' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className={`bg-${item.color}-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
                  <span className={`text-2xl font-bold text-${item.color}-600`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
