"use client";  
import { usePathname } from "next/navigation"; 
import { useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import ClientHeader from "../../components/header/header";
import { Inter } from 'next/font/google';  // Import the font from next/font
import Modal from 'react-modal';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showHeader = !["/", "/frontend/login", "/frontend/signup"].includes(pathname);


  useEffect(() => {
    // Ensure __next exists before setting the app element
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
      Modal.setAppElement('#__next');
    }
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {showHeader && <ClientHeader />}  
        {children}
      </body>
    </html>
  );
}

