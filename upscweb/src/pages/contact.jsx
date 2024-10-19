import React from 'react';
import contact from '../components/contact.png';

const Contact = () => {
    return (
        <div className="p-4 justify-center items-center flex fade-in flex-col">
            <section className="bg-gradient-to-r from-gray-500 space-y-4 w-full to-gray-800 justify-between space-x-20 flex flex-row items-end text-white p-6 rounded-md">
              <div className=' justify-center hidden lg:flex md:flex items-center'>
                <img src={contact} alt="contact us" className='p-2 h-[400px]'/>
              </div>
               <div className='flex flex-col items-end'>
               <h1 className="text-6xl font-bold p-3">Contact Us</h1>
                <p className="mt-2 text-xs">Have a question? Need help? Or just want to say hello? We would love to hear from you.</p>
                <div className="mt-4 items-end flex flex-col">
                    <p className="font-bold">Our Offices:</p>
                    <p className='pt-2 text-xs'>Delhi NCR: 1st Floor, Tewari House, Block 11, Pusa Road Area, Old Rajendra Nagar, New Delhi, Delhi, 110005</p>
                    <p className='pb-2 text-xs'>Pune: Purva Plaza, Chhatrapati Sambhaji Maharaj Rd, Pantnath Gate, Sadashiv Peth, Pune, Maharashtra 411030</p>
                </div>
                <div className="mt-4 flex flex-col items-end">
                    <p className="font-bold">Email us at:</p>
                    <p className='text-xs'><a href="mailto:contact@haritsolution.com" className="text-white underline">contact@haritsolution.com</a></p>
                </div>
                <div className="mt-4 flex flex-col items-end">
                    <p className="font-bold">Call or WhatsApp us:</p>
                    <p className='text-xs'>Delhi: +91 9289130503</p>
                    <p className='text-xs'>Pune: +91 9319939314</p>
                </div>
               </div>
               
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold">Our Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src="https://placehold.co/300x200" alt="Foundation Course" className="rounded-md"/>
                        <h3 className="mt-2 font-bold">UPSC 2025 Foundation Course</h3>
                        <p>Personalized mentorship for one-to-one guidance.</p>
                        <button className="mt-4 bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-400 hover:border-gray-800 text-white py-2 px-4 rounded-md">View Details</button>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src="https://placehold.co/300x200" alt="ELEVATE Mentorship Program" className="rounded-md"/>
                        <h3 className="mt-2 font-bold">ELEVATE: UPSC CSE Mentorship</h3>
                        <p>For UPSC 2025/26/27 aspirants (Online/Offline).</p>
                        <button className="mt-4 bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-400 hover:border-gray-800 text-white py-2 px-4 rounded-md">View Details</button>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src="https://placehold.co/300x200" alt="Mains Test Series" className="rounded-md"/>
                        <h3 className="mt-2 font-bold">Mains Test Series</h3>
                        <p>Extensive test series for UPSC CSE 2025.</p>
                        <button className="mt-4 bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-400 hover:border-gray-800 text-white py-2 px-4 rounded-md">View Details</button>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <img src="https://placehold.co/300x200" alt="Optional Mentorship" className="rounded-md"/>
                        <h3 className="mt-2 font-bold">Optional Mentorship Program</h3>
                        <p>Personalized guidance for optional subjects.</p>
                        <button className="mt-4 bg-gradient-to-r from-gray-400 to-purple-500 hover:from-purple-500 hover:to-gray-400 hover:border-gray-800 text-white py-2 px-4 rounded-md">View Details</button>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-md">
                        <p className=' italic font-bold p-4 hover:text-gray-900 text-gray-700'>"The Foundation Course helped me understand the exam structure. Highly recommend for beginners!"</p>
                        <p className="mt-2 font-bold">Tejaswini Iyer</p>
                        <p>New Delhi, NCR</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-md">
                        <p  className=' italic font-bold p-4 hover:text-gray-900 text-gray-700'>"ELEVATE Program provided excellent mentorship. The personalized feedback was invaluable."</p>
                        <p className="mt-2 font-bold">Sonali Sharan</p>
                        <p>Gurugram</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-md">
                        <p className=' italic font-bold p-4 hover:text-gray-900 text-gray-700'>"Detailed test feedback helped me improve my answer-writing skills significantly."</p>
                        <p className="mt-2 font-bold">Suman</p>
                        <p>Gurugram</p>
                    </div>
                </div>
            </section>

            <section className="mt-8 w-full">
                <h2 className="text-xl font-bold">FAQs</h2>
                <div className="mt-4 font-semibold text-gray-500 ">
                    <details className="mb-2 py-2 px-4 border hover:text-black border-gray-400 rounded-md">
                        <summary className="cursor-pointer">How can I enroll in a course?</summary>
                        <p className="mt-2 text-black">Visit the course details page and click 'Enroll Now' to start your journey.</p>
                    </details>
                    <details className="mb-2 py-2 px-4 border hover:text-black border-gray-400 rounded-md">
                        <summary className="cursor-pointer">What is the eligibility for the IAS exam?</summary>
                        <p className="mt-2 text-black">A graduate degree from a recognized university is required.</p>
                    </details>
                    <details className="mb-2 py-2 px-4 border hover:text-black border-gray-400 rounded-md">
                        <summary className="cursor-pointer">Why choose UPSCBEACON courses?</summary>
                        <p className="mt-2 text-black">Our courses offer structured learning with expert guidance at no cost.</p>
                    </details>
                </div>
            </section>
        </div>
    );
};

export default Contact;
