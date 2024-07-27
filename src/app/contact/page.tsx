import React from "react";

import Banner from "@/components/Banner";

const contactDetails = [
  { title: "Email", value: "contact@example.com" },
  { title: "Phone", value: "+1 234 567 890" },
  { title: "Location", value: "Bangalore" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>`,
    alt: "Facebook",
  },
  {
    href: "https://www.twitter.com",
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716h.325c.233 3.289.233 6.578.233 9.876 0 100.71-76.701 216.55-216.548 216.55-43.037 0-83.116-12.573-116.462-34.114 6.078.708 12.155 1.097 18.41 1.097 35.706 0 68.498-12.155 94.596-32.53-33.464-.707-61.527-22.614-71.184-52.78 4.668.707 9.345 1.304 14.197 1.304 6.78 0 13.56-.929 19.886-2.572-34.995-7.03-61.313-37.815-61.313-74.91v-.707c10.132 5.625 21.884 9.094 34.293 9.478-20.282-13.584-33.464-36.729-33.464-62.934 0-13.949 3.724-26.95 10.304-38.105 37.24 45.66 92.74 75.548 155.274 78.689-1.178-5.625-1.78-11.562-1.78-17.499 0-42.464 34.527-76.991 77.01-76.991 22.155 0 42.134 9.345 56.242 24.45 17.499-3.41 34.004-9.878 48.748-18.624-5.625 17.812-17.498 32.574-33.002 42.036 15.542-1.877 30.355-5.97 44.151-11.784-10.435 15.355-23.599 28.978-38.547 39.952z"></path></svg>`,
    alt: "Twitter",
  },
  {
    href: "https://www.linkedin.com",
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zm-46.14-329.17a53.31 53.31 0 1 1 53.32-53.31 53.24 53.24 0 0 1-53.32 53.31zm384.6 329.17h-92.68V302.4c0-34.74-1.25-79.41-48.39-79.41-48.39 0-55.76 37.8-55.76 76.87v148.16H151.51V148.9h89V191h1.28c12.42-23.51 42.63-48.39 87.74-48.39 93.82 0 111.14 61.75 111.14 141.99z"></path></svg>`,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com",
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 188.1c-40.4 0-73.2-32.8-73.2-73.2s32.8-73.2 73.2-73.2 73.2 32.8 73.2 73.2-32.8 73.2-73.2 73.2zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27 0-14.9 12.1-27 27-27 14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-35.9-92.4-26-26-56.7-34.2-92.4-35.9-36.4-2.1-144.8-2.1-181.2 0-35.7 1.7-67.3 9.9-92.4 35.9-26 26-34.2 56.7-35.9 92.4-2.1 36.4-2.1 144.8 0 181.2 1.7 35.7 9.9 67.3 35.9 92.4 26 26 56.7 34.2 92.4 35.9 36.4 2.1 144.8 2.1 181.2 0 35.7-1.7 67.3-9.9 92.4-35.9 26-26 34.2-56.7 35.9-92.4 2.1-36.4 2.1-144.8 0-181.2zm-48.2 222.3c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.1 9s-102.7 2.6-132.1-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.1s-2.6-102.7 9-132.1c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.1-9s102.7-2.6 132.1 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.1s2.6 102.7-9 132.1z"></path></svg>`,
    alt: "Instagram",
  },
];

const ContactPage = () => {
  return (
    <>
      <Banner
        backgroundImage="images/banner.jpg"
        overlayColor="gray"
        overlayOpacity={0.5}
        heading="Contact Us"
      ></Banner>

      <div className="container-main mx-auto px-4 py-8">
        <div className="shadow-lg rounded-lg px-8 py-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactDetails.map((detail, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{detail.title}</h3>
                <p className="text-lg">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="p-3 border rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="p-3 border rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-2 font-semibold">Message</label>
                <textarea
                  className="p-3 border rounded-lg"
                  rows={5}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <h2 className="text-3xl text-white font-bold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span dangerouslySetInnerHTML={{ __html: link.svg }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          className="rounded-lg w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.131874777432!2d77.59456271418927!3d12.971598590877871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzMwLjMiTiA3N8KwNTAnMDcuMCJF!5e0!3m2!1sen!2sin!4v1625731327053!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
