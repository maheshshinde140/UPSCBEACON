import React from 'react';
import logo from './upscweb.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                <div className="w-full md:w-1/3 ">
                        <h3 className="font-bold mb-4">Subscribe to Our Newsletter</h3>
                        <p>Sign up now for our exclusive newsletter and be the first to know about our latest updates, discounts, and more.</p>
                        <form className="mt-4 space-y-2">
                            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
                            <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded" />
                            <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Yes! I want to Subscribe.</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            <li>UPSC Online Coaching</li>
                            <li>UPSC Offline Coaching</li>
                            <li>UPSC Hybrid Coaching</li>
                            <li>UPSC Optional Coaching</li>
                            <li>State PSC Online Coaching</li>
                            <li>State PSC Offline Coaching</li>
                            <li>UPSC Mock Interview 2023</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Our Initiatives</h3>
                        <ul className="space-y-2">
                            <li>UPSC PYQs</li>
                            <li>Prelims Test Series</li>
                            <li>Mains Answer Booklet</li>
                            <li>Monthly Current Affairs</li>
                            <li>Mains Mocks (MBA Bank)</li>
                            <li>Prelims Mocks (MBA Bank)</li>
                            <li>LOKMAT (Hindi)</li>
                            <li>Udaan SDG (Current)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Beginner's Roadmap</h3>
                        <ul className="space-y-2">
                            <li>UPSC Syllabus</li>
                            <li>NCERT Book List</li>
                            <li>Prelims Book List</li>
                            <li>Mains Book List</li>
                            <li>Prelims Strategy</li>
                            <li>Mains Strategy</li>
                            <li>Optional Strategy</li>
                            <li>Prelims Mock Test Strategy</li>
                            <li>Mains Answer Writing Strategy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>All Courses</li>
                            <li>UPSC Materials</li>
                            <li>Downloads</li>
                            <li>UPSC Prelims</li>
                            <li>UPSC Mains</li>
                            <li>UPSC Interview</li>
                            <li>UPSC Toppers</li>
                            <li>UPSC Current Affairs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-16 space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/3 m-2">
                        <img src={logo} alt="UPSCBEACON Logo" className="mb-4 w-30 h-20" />
                        <p>UPSCBEACON is dedicated to providing free resources and notes for UPSC aspirants. Our mission is to make quality education accessible to everyone, helping students achieve their dreams of becoming civil servants.</p>
                    </div>
                    
                    <div className="w-full md:w-1/3 ">
                        <h3 className="font-bold mb-4">Contact Details</h3>
                        <p>4th Floor, 48 Pas Road, New Delhi, 110060</p>
                        <p>+91 99999+</p>
                        <p>info@upscbeacon.com</p>
                        <div className="mt-4 space-y-2">
                            <button className="bg-black text-white px-4 py-2 rounded mr-2 w-full md:w-auto">
                                <i className="fab fa-google-play"></i> Google Play
                            </button>
                            <button className="bg-black text-white px-4 py-2 rounded w-full md:w-auto">
                                <i className="fab fa-apple"></i> App Store
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="text-center md:text-left mt-2">
                        <p>Copyright © 2023 UPSCBEACON</p>
                        <p className='text-xs'>Privacy Policy | Refund And Cancellation Policy | FAQ | Terms & Conditions | Sitemap</p>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
