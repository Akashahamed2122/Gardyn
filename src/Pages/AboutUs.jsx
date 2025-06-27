import React from 'react';
import { FaLeaf, FaMobileAlt, FaUsers, FaStar, FaSeedling, FaClock, FaHeart, FaTools } from 'react-icons/fa';
import TeamSection from '../AboutUsallPages/TeamSection';

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-900 w-8/12 mx-auto px-6 md:px-20 py-32 font-sans">
            {/* Title Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-green-800 mb-2">About Gardyn</h2>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    <span className="font-semibold text-green-700">Gardyn</span> is your gateway to a greener, more sustainable lifestyle. Whether you're a seasoned horticulturist or a curious beginner, we provide the tools, tips, and community you need to thrive.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="flex items-start gap-5 p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
                    <FaLeaf className="text-green-600 text-3xl mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-green-800">Diverse Plant Knowledge</h4>
                        <p className="text-gray-600">Comprehensive guides and tips for growing various plants suited to all environments.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
                    <FaMobileAlt className="text-green-600 text-3xl mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-green-800">Smart Responsive Tools</h4>
                        <p className="text-gray-600">Design and manage your garden easily across all devices.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
                    <FaUsers className="text-green-600 text-3xl mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-green-800">Vibrant Community</h4>
                        <p className="text-gray-600">Connect with fellow gardeners, share your progress, and get feedback.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
                    <FaStar className="text-green-600 text-3xl mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-green-800">Trusted by Experts</h4>
                        <p className="text-gray-600">Gardening tips recommended by professionals and enthusiasts alike.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-green-50 p-8 md:p-12 rounded-2xl mb-20 shadow-inner">
                <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <FaSeedling className="text-green-600" />
                    Why Choose Gardyn?
                </h3>
                <ul className="space-y-3 text-base text-gray-700 pl-6">
                    <li className="flex items-center"><FaLeaf className="text-green-600 mr-2" /> 100% Organic Gardening Practices</li>
                    <li className="flex items-center"><FaClock className="text-green-600 mr-2" /> Real-Time Seasonal Reminders</li>
                    <li className="flex items-center"><FaHeart className="text-green-600 mr-2" /> Passionate Community Support</li>
                    <li className="flex items-center"><FaTools className="text-green-600 mr-2" /> DIY Garden Project Plans</li>
                </ul>
            </div>

            {/* Team Section */}
            <TeamSection />
        </div>
    );
};

export default AboutUs;
