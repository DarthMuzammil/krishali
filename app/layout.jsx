import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

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
  description:
    "Discover luxurious wellness services at Krishali Group, located at prime landmarks in Abu Dhabi, Like Corniche, Hamdan, Du Building, Landmark Tower, Golden Falcon Tower, Al bustan complex",
  keywords:
    "Krishali Wellness, Abu Dhabi wellness, Corniche spa, Al Bustan Complex gym services, Al Bustan Complex, luxury pools, relaxation, Krishali Zumba, Swimming Classes Hamdan, Swimming Corniche, Zumba Corniche, Landmark Building Pool, Fitness classes near Landmark Tower, Hamdan Pool",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "./favicon.ico",
  },
};
const jsonld = 
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Krishali Wellness - Landmark Tower",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Corniche Street, Landmark Tower",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.4851,
        "longitude": 54.3508
      },
      "telephone": "+971 50 371 4039",
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "LocalBusiness",
      "name": "Krishali Wellness - Golden Falcon Tower",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Golden Falcon Tower, Hamdan Street",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.470902,
        "longitude": 54.372226
      },
      "telephone": "+971 50 371 4039",
      "openingHours": "Mo-Su 08:00-20:00"
    },
    {
      "@type": "LocalBusiness",
      "name": "Krishali Wellness - Al Bustan Complex",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Bustan Complex",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.463902,
        "longitude": 54.387226
      },
      "telephone": "+971 50 371 4039",
      "openingHours": "Mo-Su 08:00-20:00"
    }
  ]
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <Head>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta name="icons" content={metadata.icons} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Abu Dhabi, United Arab Emirates" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content="Krishali Wellness - Abu Dhabi" />
        <meta
          property="og:description"
          content={metadata.description}
        />
        <meta property="og:url" content="https://krishaligroup.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <GoogleAnalytics gtmId="GTM-RH54034QRQ" />
        <GoogleAnalytics gtmId="GTM-16802529719" />
        <Footer />
      </body>
    </html>
  );
}
