import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Top from "@/components/common/header/Top";

import Footer from "@/components/common/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSB Hospital",
  description: "SSB Heart And Multispecialty Hospital, Faridabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Top />
        {children}
        <Footer />
      </body>
    </html>
  );
}
