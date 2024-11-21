import "./globals.css";

export const metadata = {
  title: "OTPless Demo",
  description: "OTPless NextJS Demo",
};

export default function RootLayout({ children }) {
  const geistSans = {
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  };

  const geistMono = {
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
