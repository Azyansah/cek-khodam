import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Check Khodam",
  description: "Website untuk mengecek khodam anda berdasarkan nama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10 fade-in">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-6 slide-up">
            <div className="flex items-center">

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
