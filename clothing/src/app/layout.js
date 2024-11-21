"use client";  
import { usePathname } from "next/navigation";  
import localFont from "next/font/local";
import "./globals.css";
import ClientHeader from "../../components/header/header";
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
  const showHeader = !["/frontend/login","/frontend/signup"].includes(pathname);

  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {showHeader && <ClientHeader />}  
      {children}
    </body>
  </html>
  );
}
