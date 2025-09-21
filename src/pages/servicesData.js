
// export const servicesData = [
//     {
//         slug: 'housemaid-service',
//         title: 'Housemaid Service',
//         description: 'Housemaid service available for part time, full time and 24 hours – ladies & gents.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyimqcGuhhaDXgV4vsIeGJ8Uyi1pkRq-NxQ&s',
//         // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvzKy8raodY8KpC6IoPjP9al1yMVdKOrBOg&s',
//         features: ['Part Time / Full Time / 24 Hours', 'Ladies & Gents Available', 'Cooking, Cleaning, Laundry', 'Elderly Care Support'],
//         time: '2-8 hours',
//         price: '₹499 onwards',
//         steps: [
//             'Cleaning and tidying rooms',
//             'Laundry & ironing',
//             'Cooking and meal prep (optional)',
//             'Elderly care support if needed'
//         ],
//         faqs: [
//             {
//                 question: 'Can I book a housemaid for a single day?',
//                 answer: 'Yes, we offer part-time and one-day services as well as full-time options.'
//             }
//         ]
//     },
//     {
//         slug: 'full-home-deep-cleaning',
//         title: 'Full Home Deep Cleaning',
//         description: 'Complete deep cleaning of entire home - kitchen, bathroom, bedroom, hall complete cleaning of all areas.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT755sCfeH_-cJIFl747FR5_yi2J3jy_wVygA&s',
//         features: ['Kitchen Deep Clean', 'Bathroom Sanitization', 'Floor Mopping & Polishing', 'Window & Glass Cleaning'],
//         time: '3-6 hours',
//         price: '₹799 onwards',
//         steps: [
//             'Dust and cobweb removal',
//             'Deep cleaning of kitchen and bathrooms',
//             'Floor mopping and polishing',
//             'Window & glass cleaning',
//             'Final sanitization'
//         ],
//         faqs: [
//             {
//                 question: 'How often should I do deep cleaning at home?',
//                 answer: 'Recommended every 6-12 months depending on usage and family size.'
//             }
//         ]
//     },
//     {
//         slug: 'sofa-carpet-cleaning',
//         title: 'Sofa & Carpet Cleaning',
//         description: 'Professional sofa and carpet cleaning - stain removal, odor elimination and sanitization.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbIZnnw1wPjrllPAoXhZIwTgQn9dd-kSWIQ&s',
//         features: ['Stain Removal', 'Deep Vacuum Cleaning', 'Fabric Protection', 'Odor Elimination'],
//         time: '1-3 hours',
//         price: '₹549 onwards',
//         steps: [
//             'Dry Vacuuming to remove dust & debris',
//             'Shampooing & Scrubbing for deep cleaning',
//             'Stain Treatment using eco-friendly solutions',
//             'Wet Vacuuming to extract dirty water',
//             'Quick Drying using fans or sunlight'
//         ],
//         faqs: [
//             {
//                 question: 'How often should I clean my sofa and carpet?',
//                 answer: 'It is recommended to clean your sofa and carpet every 3-6 months depending on usage.'
//             }
//         ]
//     },
//     {
//         slug: 'pest-control-services',
//         title: 'Pest Control Services',
//         description: 'Pest control - complete protection from cockroaches, ants, rats and other insects.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3Op3sQah8xJONTA9KJtcL6jwhBD5JWIMBg&s',
//         features: ['Cockroach Treatment', 'Ant Control', 'Rodent Control', 'Termite Treatment'],
//         time: '2-4 hours',
//         price: '₹699 onwards',
//         steps: [
//             'Inspection of affected areas',
//             'Application of safe pesticides',
//             'Rodent trap & monitoring',
//             'Follow-up treatment if required'
//         ],
//         faqs: [
//             {
//                 question: 'Are the chemicals safe for pets?',
//                 answer: 'Yes, we use safe and approved pest control solutions.'
//             }
//         ]
//     },
//     {
//         slug: 'water-tank-cleaning',
//         title: 'Water Tank Cleaning',
//         description: 'Professional water tank cleaning service for overhead and underground tanks.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxa3tkhDSaq5paHi7A4fM4nonM3cCa7kusw&s',
//         features: ['Sludge Removal', 'Anti-Bacterial Treatment', 'High Pressure Jet Cleaning', 'UV Treatment'],
//         time: '2-5 hours',
//         price: '₹899 onwards',
//         steps: [
//             'Drain and remove water',
//             'Sludge & dirt removal',
//             'Disinfection with antibacterial solution',
//             'Rinse & fill clean water'
//         ],
//         faqs: [
//             {
//                 question: 'How often should tanks be cleaned?',
//                 answer: 'Every 6 months to ensure clean drinking water.'
//             }
//         ]
//     },
//     {
//         slug: 'plumbing-service',
//         title: 'Plumbing Service',
//         description: 'Expert plumbing service for all types of repair and new fittings.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iTwWE06dp5EONS0B-sgYkTLchSYT69TNUg&s',
//         features: ['Pipe Leakage Fix', 'Tap & Mixer Installation', 'Bathroom Fittings', 'Drain Cleaning'],
//         time: '1-4 hours',
//         price: '₹399 onwards',
//         steps: [
//             'Leakage detection',
//             'Pipe replacement or repair',
//             'Fitting installations',
//             'Testing and final check'
//         ],
//         faqs: [
//             {
//                 question: 'Do you provide emergency plumbing?',
//                 answer: 'Yes, we offer 24/7 emergency plumbing services.'
//             }
//         ]
//     },
//     {
//         slug: 'car-wash-service',
//         title: 'Car Wash Service',
//         description: 'Professional car washing and detailing service at home.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYjBa8dwNBY5gSCRa8ONv5ZDZETo_yjyH0Q&s',
//         features: ['Exterior Washing', 'Interior Vacuuming', 'Foam Wash & Shampoo', 'Polishing & Waxing'],
//         time: '1-2 hours',
//         price: '₹399 onwards',
//         steps: [
//             'Exterior wash and foam application',
//             'Interior vacuuming & wiping',
//             'Shampoo carpets & seats',
//             'Polish and wax'
//         ],
//         faqs: [
//             {
//                 question: 'Can I schedule a car wash at home?',
//                 answer: 'Yes, we provide home service for car wash.'
//             }
//         ]
//     },
//     {
//         slug: 'garbage-disposal-service',
//         title: 'Garbage Disposal Service',
//         description: 'Waste management service - daily waste collection and proper disposal.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlfNydw2QaIMRCeVTRDCvGIqbzojUSV4dSA&s',
//         features: ['Daily Waste Collection', 'Segregation Service', 'Eco-friendly Disposal', 'Recycling Support'],
//         time: '1-2 hours',
//         price: '₹199 onwards',
//         steps: [
//             'Collection of household waste',
//             'Segregation and recycling',
//             'Proper disposal in landfills or compost',
//             'Weekly reporting'
//         ],
//         faqs: [
//             {
//                 question: 'Do you provide daily collection?',
//                 answer: 'Yes, we offer daily waste collection services.'
//             }
//         ]
//     },
//     {
//         slug: 'light-jhumar-cleaning',
//         title: 'Light & Jhumar Cleaning',
//         description: 'Light and chandelier cleaning - careful cleaning of all types of lighting fixtures.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-RMLE7s8jZdF5EZckqS446NCmfO9nsxAkA&s',
//         features: ['Chandelier Cleaning', 'LED Light Maintenance', 'Ceiling Fan Cleaning', 'Decorative Light Care'],
//         time: '1-2 hours',
//         price: '₹299 onwards',
//         steps: [
//             'Dusting and wiping fixtures',
//             'Cleaning bulbs and shades',
//             'Polishing decorative lights',
//             'Reinstallation and safety check'
//         ],
//         faqs: [
//             {
//                 question: 'Do you handle all types of lights?',
//                 answer: 'Yes, including LED, CFL, and decorative chandeliers.'
//             }
//         ]
//     },
//     {
//         slug: 'sign-board-cleaning',
//         title: 'Sign Board Cleaning',
//         description: 'Sign board cleaning - cleaning of sign boards for shops, offices and commercial properties.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AA4YmTMawUyLklzHwhLgBf1w7sIdxENa7Q&s',
//         features: ['Acrylic Board Cleaning', 'Metal Sign Maintenance', 'LED Display Cleaning', 'Hoarding Washing'],
//         time: '1-3 hours',
//         price: '₹499 onwards',
//         steps: [
//             'Surface cleaning',
//             'Washing & polishing',
//             'LED display cleaning',
//             'Final inspection'
//         ],
//         faqs: [
//             {
//                 question: 'Can you clean large hoardings?',
//                 answer: 'Yes, we handle small to large commercial boards.'
//             }
//         ]
//     },
//     {
//         slug: 'office-housekeeping',
//         title: 'Office Housekeeping',
//         description: 'Office housekeeping - daily cleaning services for commercial spaces, shops and offices.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4CJdlB4pasV8LKUg8WgyiZBwfsZxOtXYgg&s',
//         features: ['Daily Office Cleaning', 'Washroom Maintenance', 'Floor Care', 'Workspace Sanitization'],
//         time: '2-6 hours',
//         price: '₹699 onwards',
//         steps: [
//             'Daily cleaning and dusting',
//             'Washroom maintenance',
//             'Floor cleaning and polishing',
//             'Sanitizing workspaces'
//         ],
//         faqs: [
//             {
//                 question: 'Do you provide daily office housekeeping?',
//                 answer: 'Yes, we provide daily and customized cleaning plans.'
//             }
//         ]
//     }
// ];




export const servicesData = [
    {
        slug: 'housemaid-service',
        title: 'Housemaid Service',
        description: 'Housemaid service available for part time, full time and 24 hours – ladies & gents.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyimqcGuhhaDXgV4vsIeGJ8Uyi1pkRq-NxQ&s',
        features: ['Part Time / Full Time / 24 Hours', 'Ladies & Gents Available', 'Cooking, Cleaning, Laundry', 'Elderly Care Support'],
        time: '2-8 hours',
        price: '₹499 onwards',
        steps: [
            'Cleaning and tidying rooms',
            'Laundry & ironing',
            'Cooking and meal prep (optional)',
            'Elderly care support if needed'
        ],
        faqs: [
            {
                question: 'Can I book a housemaid for a single day?',
                answer: 'Yes, we offer part-time and one-day services as well as full-time options.'
            }
        ]
    },
    {
        slug: 'full-home-deep-cleaning',
        title: 'Full Home Deep Cleaning',
        description: 'Complete deep cleaning of entire home - kitchen, bathroom, bedroom, hall complete cleaning of all areas.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT755sCfeH_-cJIFl747FR5_yi2J3jy_wVygA&s',
        features: ['Kitchen Deep Clean', 'Bathroom Sanitization', 'Floor Mopping & Polishing', 'Window & Glass Cleaning'],
        time: '3-6 hours',
        price: '₹799 onwards',
        steps: [
            'Dust and cobweb removal',
            'Deep cleaning of kitchen and bathrooms',
            'Floor mopping and polishing',
            'Window & glass cleaning',
            'Final sanitization'
        ],
        faqs: [
            {
                question: 'How often should I do deep cleaning at home?',
                answer: 'Recommended every 6-12 months depending on usage and family size.'
            }
        ]
    },
    {
        slug: 'sofa-carpet-cleaning',
        title: 'Sofa & Carpet Cleaning',
        description: 'Professional sofa and carpet cleaning - stain removal, odor elimination and sanitization.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbIZnnw1wPjrllPAoXhZIwTgQn9dd-kSWIQ&s',
        features: ['Stain Removal', 'Deep Vacuum Cleaning', 'Fabric Protection', 'Odor Elimination'],
        time: '1-3 hours',
        price: '₹549 onwards',
        steps: [
            'Dry Vacuuming to remove dust & debris',
            'Shampooing & Scrubbing for deep cleaning',
            'Stain Treatment using eco-friendly solutions',
            'Wet Vacuuming to extract dirty water',
            'Quick Drying using fans or sunlight'
        ],
        faqs: [
            {
                question: 'How often should I clean my sofa and carpet?',
                answer: 'It is recommended to clean your sofa and carpet every 3-6 months depending on usage.'
            }
        ]
    },
    {
        slug: 'pest-control-services',
        title: 'Pest Control Services',
        description: 'Pest control - complete protection from cockroaches, ants, rats and other insects.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3Op3sQah8xJONTA9KJtcL6jwhBD5JWIMBg&s',
        features: ['Cockroach Treatment', 'Ant Control', 'Rodent Control', 'Termite Treatment'],
        time: '2-4 hours',
        price: '₹699 onwards',
        steps: [
            'Inspection of affected areas',
            'Application of safe pesticides',
            'Rodent trap & monitoring',
            'Follow-up treatment if required'
        ],
        faqs: [
            {
                question: 'Are the chemicals safe for pets?',
                answer: 'Yes, we use safe and approved pest control solutions.'
            }
        ]
    },
    {
        slug: 'event-housekeeping',
        title: 'Event Housekeeping',
        description: 'Professional housekeeping staff for weddings, parties, exhibitions and corporate events.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN5HU0b91DqwXerhtjGlVp7y_jb8YiT_IFneDKO4b51Y1BYomPykdL9jn_4g4ELrbFkA&usqp=CAU',
        features: ['Pre-event cleaning', 'During-event support', 'Post-event deep cleaning', 'Waste disposal management'],
        time: '4-12 hours',
        price: '₹1499 onwards',
        steps: [
            'Pre-event setup and cleaning',
            'On-site housekeeping staff during event',
            'Continuous waste collection and disposal',
            'Final post-event deep cleaning'
        ],
        faqs: [
            {
                question: 'Do you provide staff for overnight events?',
                answer: 'Yes, we provide full-time and overnight staff for events as per requirement.'
            }
        ]
    },
    {
        slug: 'hotel-deep-cleaning',
        title: 'Hotel Deep Cleaning',
        description: 'Complete deep cleaning and sanitization for hotels, restaurants and resorts.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLgR_qtjC-SUXFvAZbjA3JXskcDbIJYCrzw&s',
        features: ['Kitchen Deep Cleaning', 'Guest Room Sanitization', 'Lobby & Reception Cleaning', 'Washroom Deep Clean'],
        time: '6-12 hours',
        price: '₹2999 onwards',
        steps: [
            'Thorough cleaning of all guest rooms',
            'Deep cleaning of restaurant & kitchen area',
            'Washroom sanitization',
            'Reception & common area cleaning',
            'Final inspection & sanitization'
        ],
        faqs: [
            {
                question: 'Do you provide regular cleaning contracts for hotels?',
                answer: 'Yes, we provide one-time deep cleaning as well as regular AMC contracts for hotels.'
            }
        ]
    },
    {
        slug: 'car-wash-service',
        title: 'Car Wash Service',
        description: 'Professional car washing and detailing service at home.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYjBa8dwNBY5gSCRa8ONv5ZDZETo_yjyH0Q&s',
        features: ['Exterior Washing', 'Interior Vacuuming', 'Foam Wash & Shampoo', 'Polishing & Waxing'],
        time: '1-2 hours',
        price: '₹399 onwards',
        steps: [
            'Exterior wash and foam application',
            'Interior vacuuming & wiping',
            'Shampoo carpets & seats',
            'Polish and wax'
        ],
        faqs: [
            {
                question: 'Can I schedule a car wash at home?',
                answer: 'Yes, we provide home service for car wash.'
            }
        ]
    },
    {
        slug: 'garbage-disposal-service',
        title: 'Garbage Disposal Service',
        description: 'Waste management service - daily waste collection and proper disposal.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlfNydw2QaIMRCeVTRDCvGIqbzojUSV4dSA&s',
        features: ['Daily Waste Collection', 'Segregation Service', 'Eco-friendly Disposal', 'Recycling Support'],
        time: '1-2 hours',
        price: '₹199 onwards',
        steps: [
            'Collection of household waste',
            'Segregation and recycling',
            'Proper disposal in landfills or compost',
            'Weekly reporting'
        ],
        faqs: [
            {
                question: 'Do you provide daily collection?',
                answer: 'Yes, we offer daily waste collection services.'
            }
        ]
    },
    {
        slug: 'light-jhumar-cleaning',
        title: 'Light & Jhumar Cleaning',
        description: 'Light and chandelier cleaning - careful cleaning of all types of lighting fixtures.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-RMLE7s8jZdF5EZckqS446NCmfO9nsxAkA&s',
        features: ['Chandelier Cleaning', 'LED Light Maintenance', 'Ceiling Fan Cleaning', 'Decorative Light Care'],
        time: '1-2 hours',
        price: '₹299 onwards',
        steps: [
            'Dusting and wiping fixtures',
            'Cleaning bulbs and shades',
            'Polishing decorative lights',
            'Reinstallation and safety check'
        ],
        faqs: [
            {
                question: 'Do you handle all types of lights?',
                answer: 'Yes, including LED, CFL, and decorative chandeliers.'
            }
        ]
    },
    {
        slug: 'sign-board-cleaning',
        title: 'Sign Board Cleaning',
        description: 'Sign board cleaning - cleaning of sign boards for shops, offices and commercial properties.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AA4YmTMawUyLklzHwhLgBf1w7sIdxENa7Q&s',
        features: ['Acrylic Board Cleaning', 'Metal Sign Maintenance', 'LED Display Cleaning', 'Hoarding Washing'],
        time: '1-3 hours',
        price: '₹499 onwards',
        steps: [
            'Surface cleaning',
            'Washing & polishing',
            'LED display cleaning',
            'Final inspection'
        ],
        faqs: [
            {
                question: 'Can you clean large hoardings?',
                answer: 'Yes, we handle small to large commercial boards.'
            }
        ]
    },
    {
        slug: 'office-housekeeping',
        title: 'Office Housekeeping',
        description: 'Office housekeeping - daily cleaning services for commercial spaces, shops and offices.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4CJdlB4pasV8LKUg8WgyiZBwfsZxOtXYgg&s',
        features: ['Daily Office Cleaning', 'Washroom Maintenance', 'Floor Care', 'Workspace Sanitization'],
        time: '2-6 hours',
        price: '₹699 onwards',
        steps: [
            'Daily cleaning and dusting',
            'Washroom maintenance',
            'Floor cleaning and polishing',
            'Sanitizing workspaces'
        ],
        faqs: [
            {
                question: 'Do you provide daily office housekeeping?',
                answer: 'Yes, we provide daily and customized cleaning plans.'
            }
        ]
    }
];
