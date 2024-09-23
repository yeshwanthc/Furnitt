import ContactForm from '@/app/contact/ContactForm';
import React from 'react';

const ContactSection = () => {
  const contactTest = false
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
       <ContactForm contactTest={contactTest} />
      </div>
    </div>
  );
};

export default ContactSection;
