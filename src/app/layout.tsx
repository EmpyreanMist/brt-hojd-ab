import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRT Höjd AB – Industriklättring i Jämtland",
  description:
    "BRT Höjd AB är specialister på industriklättring och arbete på höjd i Jämtland. Vi erbjuder säkra och professionella lösningar för bygg, industri och fastigheter.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "BRT Höjd AB – Industriklättring i Jämtland",
    description:
      "Experter på höghöjdsarbeten i Jämtland – industriklättring, fastighetsservice och mer.",
    url: "https://www.brthojd.se",
    siteName: "BRT Höjd AB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BRT Höjd AB",
    description: "Experter på höghöjdsarbeten i Jämtland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
