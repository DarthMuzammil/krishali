import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export const metadata = {
  title: "Krishali Wellness - Your Wellness Destination",
  description: "Discover luxurious wellness services at Krishali Group, located at prime landmarks in Abu Dhabi, Like Corniche, Hamdan, Du Building, Landmark Tower, Golden Falcon Tower",
  keywords: ["Krishali Wellness", "Abu Dhabi wellness", "Corniche spa", "luxury pools", "relaxation", "Krishali Zumba", "Swimming Classes Hamdan", "Swimming Corniche", "Zumba Corniche", "Landmark Building Pool", "Hamdan Pool"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "./favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
