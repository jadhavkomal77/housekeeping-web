// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Home, User, Briefcase, CreditCard, Phone, Image } from "lucide-react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();

//     const navItems = [
//         { path: "/", name: "Home", icon: Home },
//         { path: "/about", name: "About Us", icon: User },
//         { path: "/services", name: "Services", icon: Briefcase },
//         { path: "/payment", name: "Payment", icon: CreditCard },
//         { path: "/contact", name: "Contact", icon: Phone },
//         { path: "/recentwork", name: "Gallery", icon: Image },
//     ];

//     return (
//         <nav className="bg-white shadow sticky top-0 z-50 w-full">
//             <div className="px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center space-x-2">
//                         <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
//                         <span className="text-xl font-bold text-blue-600">Techno Housekeeping</span>
//                     </Link>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-6">
//                         {navItems.map((item) => {
//                             const Icon = item.icon;
//                             const isActive = location.pathname === item.path;
//                             return (
//                                 <Link
//                                     key={item.path}
//                                     to={item.path}
//                                     className={`flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium transition duration-200 ${isActive
//                                         ? "bg-blue-600 text-white shadow"
//                                         : "text-blue-600 hover:bg-blue-50 hover:shadow-sm"
//                                         }`}
//                                 >

//                                     {Icon && <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />}
//                                     <span>{item.name}</span>
//                                 </Link>
//                             );
//                         })}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden flex items-center">
//                         <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 hover:text-blue-800 focus:outline-none">
//                             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-white border-t shadow-sm w-full">
//                     <div className="px-2 pt-2 pb-3 space-y-1">
//                         {navItems.map((item) => {
//                             const Icon = item.icon;
//                             const isActive = location.pathname === item.path;
//                             return (
//                                 <Link
//                                     key={item.path}
//                                     to={item.path}
//                                     onClick={() => setIsOpen(false)}
//                                     className={`flex items-center space-x-2 px-4 py-2 rounded text-base font-medium transition duration-200 ${isActive
//                                         ? "bg-blue-600 text-white shadow"
//                                         : "text-blue-600 hover:bg-blue-50 hover:shadow-sm"
//                                         }`}
//                                 >
//                                     {Icon && <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`} />}
//                                     <span>{item.name}</span>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, CreditCard, Phone, Image } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: "/", name: "Home", icon: Home },
        { path: "/about", name: "About Us", icon: User },
        { path: "/services", name: "Services", icon: Briefcase },
        { path: "/payment", name: "Payment", icon: CreditCard },
        { path: "/contact", name: "Contact", icon: Phone },
        { path: "/recentwork", name: "Gallery", icon: Image },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 w-full border-b border-gray-100">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 
                                    ${isActive
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "text-blue-700 hover:bg-blue-50 hover:shadow-sm"
                                        }`}
                                >
                                    {Icon && (
                                        <Icon
                                            className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600 group-hover:text-blue-800"}`}
                                        />
                                    )}
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-700 hover:text-blue-900 focus:outline-none transition-transform duration-300"
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-lg w-full animate-slideDown">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 
                                    ${isActive
                                            ? "bg-blue-600 text-white shadow"
                                            : "text-blue-700 hover:bg-blue-50 hover:shadow-sm"
                                        }`}
                                >
                                    {Icon && (
                                        <Icon
                                            className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`}
                                        />
                                    )}
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
