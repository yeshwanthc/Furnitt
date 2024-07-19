"use client";

import React, { useEffect,useState } from "react";

import { Inter } from "@next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Furnitt</title>
      </head>
      <body>
        {loading ? (
          <Preloader />
        ) : (
          <div className="">
            <Header />
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
