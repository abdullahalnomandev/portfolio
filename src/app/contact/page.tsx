"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic front-end validation (optional, browser validation covers most)
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // You can add more advanced validation here if needed

    console.log("Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <>
      <section className="min-h-screen bg-[#f0f5ff] flex flex-col md:flex-row gap-12 p-8 md:p-16 font-sans text-gray-900">
        {/* Left Form Section */}
        <div className="flex-1 bg-[#e8efff] rounded-xl p-10 max-w-lg">
          <h2 className="text-3xl font-semibold mb-8">Let&apos;s contact</h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-gray-800"
            // Removed noValidate to allow browser validation
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message here"
              className="rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3 resize-none"
              required
            />

            <button
              type="submit"
              className="mt-6 bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-2 text-lg font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Contact Info Section */}
        <div className="flex flex-col gap-8 w-full max-w-sm">
          {/* Phone */}
          <div className="bg-[#e8efff] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <FaPhone className="text-blue-600 w-6 h-6" />
            </div>
            <p className="font-semibold mb-1">Phone Number</p>
            <a
              href="tel:+8801741581512"
              className="text-blue-700 hover:underline transition"
            >
              +8801741581512
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#e8efff] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <FaEnvelope className="text-blue-600 w-6 h-6" />
            </div>
            <p className="font-semibold mb-1">Email Address</p>
            <a
              href="mailto:abdullahalnoman1512@gmail.com"
              className="text-blue-700 hover:underline transition"
            >
              abdullahalnoman1512@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#e8efff] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
            </div>
            <p className="font-semibold mb-1">Location</p>
            <address className="not-italic text-gray-700 text-sm leading-relaxed">
              Mirpur-1,
              <br />
              Dhaka, Bangladesh
            </address>
          </div>
        </div>
      </section>

      {/* Google Map Full Width */}
      <div className="w-full h-[300px] md:h-[400px] mb-10">
        <iframe
          title="Google Map - Mirpur-1 Dhaka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.578356451677!2d90.35655181540004!3d23.810332284573265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754d5ebd69b%3A0x2d79608d9a16429f!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698866563220!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactPage;
