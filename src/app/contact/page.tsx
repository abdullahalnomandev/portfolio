"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    console.log("Submitted:", formData);
  };

  return (
    <section className='bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 py-16 px-4 sm:px-6 md:px-12'>
      <div className='w-full max-w-2xl mx-auto bg-white border border-gray-200 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-10'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>
            Let’s Connect
          </h2>
          <p className='text-gray-600 text-base'>
            I’m available for freelance, collaborations or just a good chat.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='you@example.com'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell me about your project or idea...'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
