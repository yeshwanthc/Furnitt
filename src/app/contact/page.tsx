
import React from "react";

import Banner from "@/components/Banner"


const ContactPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Contact Us"
      >
      </Banner>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg px-8 py-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-lg">contact@example.com</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-lg">+1 234 567 890</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-lg">Bangalore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          className="rounded-lg w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.131874777432!2d77.59456271418927!3d12.971598590877871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzMwLjMiTiA3N8KwNTAnMDcuMCJF!5e0!3m2!1sen!2sin!4v1625731327053!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
