import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // For now just log. Replace with emailjs or backend later.
    console.log(formData);
    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen text-white px-4 py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-gray-400 text-center mb-10">Have questions, feedback, or just want to say hello? Drop us a message!</p>

        <form className="space-y-6" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none"
            value={formData.name}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none"
            value={formData.email}
            onChange={changeHandler}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none"
            value={formData.message}
            onChange={changeHandler}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
