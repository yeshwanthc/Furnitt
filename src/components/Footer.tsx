import React from "react";
import Link from "next/link";

const Footer = () => {
  const linkGroups = [
    {
      title: "Company",
      links: [
        { href: "/about", text: "About" },
        { href: "/services", text: "Our Services" },
        { href: "/contact", text: "Contact Us" },
        { href: "/blog", text: "Blog" },
      ],
    },
    {
      title: "Help center",
      links: [
        { href: "/", text: "LinkedIn" },
        { href: "/twitter", text: "Twitter" },
        { href: "/facebook", text: "Facebook" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", text: "Privacy Policy" },
        { href: "/licensing", text: "Licensing" },
        { href: "/terms", text: "Terms & Conditions" },
      ],
    },
    {
      title: "Other",
      links: [
        { href: "/", text: "FAQ" },
        { href: "/", text: "How we work" },
        { href: "/", text: "Own a Franchise" },
        { href: "/", text: "Cost Calculator" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray- mt-[50px]">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {group.title}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {group.links.map((link) => (
                  <li className="mb-4" key={link.text}>
                    <Link href={link.href} className="hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <div className="container-main">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="/">Furnitt</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
