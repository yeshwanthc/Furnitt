import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "/",
      icon: (
        <svg width="8" height="16" viewBox="0 0 8 16" className="fill-current">
          <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
        </svg>
      ),
    },
    {
      href: "/",
      icon: (
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          className="fill-current"
        >
          <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
        </svg>
      ),
    },
    {
      href: "/",
      icon: (
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          className="fill-current"
        >
          <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
        </svg>
      ),
    },
    {
      href: "/",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="fill-current"
        >
          <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.509 5.08065 11.9779 6.35806 11.9779 8.15484V11.9Z" />
        </svg>
      ),
    },
  ];

  const links = [
    {
      name: "About Us",
      link: "/about",
    },

    { name: "Our Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Contact Us", link: "/contact" },
  ];

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091204827814!2d144.95373631531898!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771e214e66eab5!2sEnvato!5e0!3m2!1sen!2sus!4v1593993640656!5m2!1sen!2sus";

  return (
    <footer className="pt-8 md:mt-[30px] sm:pt-16 lg:pt-24 bg-gray-100  text-black relative pb-10">
      <div className="container-main mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <img src="/images/logo-black.png" alt="Logo" className="h-10" />
            </div>
            <p className="text-base">
              Furnitt is a professional interior design firm dedicated to
              creating artistic and personalized living spaces. Our designs are
              a perfect blend of creativity, functionality, and luxury, ensuring
              that every space we craft is not only beautiful but also
              practical.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <ul className="flex flex-col md:flex-row gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <iframe
              src={mapSrc}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-gray-400">
          &copy; 2024 Furnitt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
