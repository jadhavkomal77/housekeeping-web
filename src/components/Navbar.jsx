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
        { path: "/recentwork", name: "Recent Work", icon: Image },
    ];

    return (
        <nav className="bg-white shadow sticky top-0 z-50 w-full">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                        <span className="text-xl font-bold text-blue-600">Smart Clean Solutions</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium transition duration-200 ${isActive
                                        ? "bg-blue-600 text-white shadow"
                                        : "text-blue-600 hover:bg-blue-50 hover:shadow-sm"
                                        }`}
                                >
                                 
                                    {Icon && <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />}
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 hover:text-blue-800 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-sm w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded text-base font-medium transition duration-200 ${isActive
                                        ? "bg-blue-600 text-white shadow"
                                        : "text-blue-600 hover:bg-blue-50 hover:shadow-sm"
                                        }`}
                                >
                                    {Icon && <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`} />}
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
