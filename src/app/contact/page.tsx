import React from "react";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import Banner from "@/components/Banner";

import ContactForm from "./ContactForm";

const contactDetails = [
  { title: "Email", value: "reachus@furnitt.in", icon: Mail },
  {
    title: "Phone / Landline",
    value: "+91 8884377000 / 080 987654321",
    icon: Phone,
  },
  {
    title: "Address",
    value:
      "Shed No. 04 & 05, 1st Cross Hosahalli Gollarapalya Village, Magadi Main Rd, Bengaluru, Karnataka 560091",
    icon: MapPin,
  },
];

const socialLinks = [
  { href: "https://www.facebook.com", icon: Facebook, alt: "Facebook" },
  { href: "https://www.twitter.com", icon: Twitter, alt: "Twitter" },
  { href: "https://www.linkedin.com", icon: Linkedin, alt: "LinkedIn" },
  { href: "https://www.instagram.com", icon: Instagram, alt: "Instagram" },
];

export default function ContactPage() {
  const contactTest = true;

  return (
    <div className="">
      <Banner
        backgroundImage="/images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Cost Calculator"
      />

      <div className="container-main shadow-xl relative mx-auto mar-top px-4 py-12 z-150 bg-white">
        <div className="rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <detail.icon className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-gray-600">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <ContactForm contactTest={contactTest} />

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="sr-only">{link.alt}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

     
      </div>
      <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.639304275931!2d77.4768641!3d12.9949067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dec1a4dd35f%3A0xc37645f0ffcb4cf6!2sViswa%20Panelcrafts%3A%20Modular%20Furniture%20Factory!5e0!3m2!1sen!2sin!4v1727077399250!5m2!1sen!2sin"
            className="w-full h-96 rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
    </div>
  );
}
