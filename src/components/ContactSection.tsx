import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-16 px-8 lg:px-24">
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <img
          src="/images/4.png"
          alt="Decorative workspace"
          className="w-full sm:h-auto md:h-[600px] rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-12">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
          Do You Need Our Help For The Next Project? Get In Touch!
        </h2>
        <p className="text-gray-700 mb-8">
          We specialize in comprehensive interior services that transform your home into a beautiful, uniquely personalized, and comfortable space. From design to execution, our end-to-end solutions cater to your distinct needs.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Project Name / Location"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
