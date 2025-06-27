import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#f8f8ec] py-40 w-8/12 mx-auto px-5 lg:px-20 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Your Message</h2>
            <p className="text-gray-600 mb-10 max-w-xl">
                Whether you have a question, a suggestion, or just want to say hello, this is the place to do it.
                Please fill out the form below with your details and message, and we’ll get back to you as soon as possible.
            </p>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Info Box */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <img
                        src="https://i.ibb.co/N68JV0qn/1.webp"
                        alt="Contact"
                        className="rounded-lg mb-6"
                    />
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <span className="font-semibold">🕒 We’re Open:</span><br />
                            Monday - Friday 08:00 - 18:00
                        </div>
                        <div>
                            <span className="font-semibold">📍 Office Location:</span><br />
                            100 S Main St, New York, NY
                        </div>
                        <div>
                            <span className="font-semibold">📞 Call Us Directly:</span><br />
                            +1 123 456 789
                        </div>
                        <div>
                            <span className="font-semibold">✉️ Send a Message:</span><br />
                            contact@gardyn.com
                        </div>
                    </div>
                </div>

                {/* Right Form Box */}
                <form className="space-y-5 bg-white p-8 rounded-xl shadow-sm">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Your Phone"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full h-32"
                    ></textarea>
                    <button className="btn bg-green-800 text-white hover:bg-green-700 w-fit">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
