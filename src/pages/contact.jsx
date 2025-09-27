import { useState } from "react";
import PageWrapper from "../components/transition";
import { FaFacebook, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 pt-24 pb-16">
        <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
          
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-purple-700">Touch</span>
          </h1>

          {/* Social Icons under header */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
              <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://m.me/yourprofile" target="_blank" rel="noreferrer">
              <FaFacebookMessenger className="w-8 h-8 text-purple-600 hover:text-purple-800 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900 transition-colors" />
            </a>
          </div>

          <p className="text-gray-600 mb-2">or</p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Fill out the form below and I’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="juan@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-700 text-white font-medium rounded-xl shadow-md hover:bg-purple-800 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Find Me Here</h2>
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.89970877441!2d124.5048494157986!3d9.829882926421834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa93c8e84c5c89%3A0x4a0e9d2f4e55c63b!2sAguipo%2C%20Mabini%2C%20Bohol!5e0!3m2!1sen!2sph!4v1695837180123!5m2!1sen!2sph"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
