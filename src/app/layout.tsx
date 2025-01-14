
import { Manrope } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import "node_modules/react-modal-video/css/modal-video.css";

import "../styles/index.css";

const manrope = Manrope({ subsets: ["latin"] });

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export const metadata: Metadata = {
  title: "BM Start - Professional Cleaning Services",
  description:
    "Setting new standards in professional cleaning  and roofing services.",
  openGraph: {
    title: "BM Start",
    description:
      "Exceptional cleaning and roofing services tailored to your needs.",
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

        <Analytics />


        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Script from "next/script";
