import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import LogoBlack from "../../public/images/logo-black.png";
import LogoWhite from "../../public/images/logo-white.png";
import { menuItems, navItems } from "../data/menuData";

import "@/styles/Header.scss";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navigationMain = document.querySelector(".navigation-main");
      if (navigationMain) {
        if (window.scrollY > 0) {
          navigationMain.classList.add("fixed-top", "bg-white");
        } else {
          navigationMain.classList.remove("fixed-top", "bg-white");
        }
      }
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="navbar-fixed relative">
      <div className="container-fluid p-0 absolute">
        <div className="navigation navigation-top md:block hidden bg-[#28282886]">
          <ul className="flex justify-end header-container gap-8">
            {navItems.map((item, index) => (
              <li key={index} className="mt-0 mb-0 mt-md-1 mb-md-1">
                <Link className="flex items-center" href={item.link || "#"}>
                  {item.iconSVG && (
                    <span
                      className="icon mr-1 rotate-90"
                      dangerouslySetInnerHTML={{ __html: item.iconSVG }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navigation-main py-2">
          <div className="md:px-0 flex justify-between items-center header-container header">
            <Link href="/" className="logo">
              <Image
                src={isScrolled ? LogoBlack : LogoWhite}
                alt="Logo"
                height="150"
                width="150"
              />
            </Link>

            <div className="menu md:block hidden">
              <ul className="flex gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link href={item.link}>{item.label}</Link>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mobile-menu">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </SheetTrigger>
                <SheetTitle></SheetTitle>
                <SheetContent className="bg-black text-white">
                  <ul className="flex gap-4 row mobile-links">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        {item.link ? (
                          <Link href={item.link} onClick={handleMenuItemClick}>
                            {item.label}
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
