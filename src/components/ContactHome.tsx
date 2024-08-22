import React from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaBook,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="container-main mx-auto py-16 lg:px-10 md:px-8 bg-white border-black border-1 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="flex-shrink-0 lg:w-1/2">
          <Image
            src="/images/logo-black.png"
            alt="Furnitt Logo"
            width={300}
            height={100}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-black"></div>

        <div className="lg:w-1/2 flex flex-col space-y-4 md:text-left md:pl-8">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <p className="text-2xl font-semibold">Call Us:</p>
          </div>
          <p className="text-gray-700 text-2xl">+91 97399 99739</p>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaWhatsapp className="text-2xl" />
            <p className="text-2xl font-semibold">WhatsApp:</p>
          </div>
          <p className="text-gray-700 text-2xl">+91 868 666 2666</p>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaEnvelope className="text-2xl" />
            <p className="text-2xl font-semibold">Email Us:</p>
          </div>
          <p className="text-gray-700 text-2xl">connect@furnitt.in</p>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaMapMarkerAlt className="text-2xl" />
            <p className="text-2xl font-semibold">Address:</p>
          </div>
          <p className="text-gray-700 text-2xl">
            Shed No 04 & 05, 1st Cross Hosahalli,
            <br />
            Gollarapalya Village, Magadi Road,
            <br />
            Bangalore - 560091, India
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaWhatsapp className="text-2xl text-black hover:text-green-500" />
            <FaLinkedin className="text-2xl text-black hover:text-blue-600" />
            <FaInstagram className="text-2xl text-black hover:text-pink-500" />
            <FaFacebookF className="text-2xl text-black hover:text-blue-600" />
            <FaTwitter className="text-2xl text-black hover:text-blue-400" />
            <FaYoutube className="text-2xl text-black hover:text-red-600" />
            <FaBook className="text-2xl text-black hover:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
