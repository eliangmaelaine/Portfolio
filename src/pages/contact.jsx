import { useState } from "react";
import PageWrapper from "../components/transition";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <PageWrapper>
            <div className="min-h-screen flex items-center justify-center px-6 pt-24">
                <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                        Contact Me
                    </h1>
                    <p className="text-gray-600 text-center mb-8">
                        Fill out the form below and I’ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Contact;
