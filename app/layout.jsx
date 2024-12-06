import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        <Header />
        {children}
        <Analytics/>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RH54034QRQ" />
      <GoogleAnalytics gtmId="GT-WBZWHK34" />
    </html>
  );
}
