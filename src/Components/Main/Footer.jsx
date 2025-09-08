import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '/src/Components/styles/style.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} text-black pt-12 pb-6`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Velora</h3>
                        <p className="text-black-400">
                            Your one-stop destination for the latest fashion trends and accessories.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Home</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Shop</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">My Account</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Order Tracking</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Wishlist</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-black" />
                                <span className="text-black">123 Fashion Street, Style City, 10001</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-black" />
                                <a href="tel:+1234567890" className="text-black hover:text-blue-500 transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-black" />
                                <a href="mailto:info@velora.com" className="text-black hover:text-blue-500 transition-colors">info@velora.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-black">
                    <p>&copy; {new Date().getFullYear()} Velora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;