// "use client";

import { Manrope } from "next/font/google";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import "node_modules/react-modal-video/css/modal-video.css";

import "../styles/index.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BM Start - Professional Cleaning Services",
  description: "Setting new standards in professional cleaning services.",
  openGraph: {
    title: "BM Start",
    description: "Exceptional cleaning services tailored to your needs.",
    url: "https://bmstart.com",
    images: [{ url: "https://bmstart.com/default-og.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${manrope.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
