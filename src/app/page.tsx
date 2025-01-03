import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Hygiene from "@/components/Hygiene";

// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BM Start - Professional Cleaning Services",
  description:
    "Providing exceptional cleaning services tailored to your needs. Discover BM Start today!",
  openGraph: {
    title: "BM Start",
    description: "Setting New Standards in Professional Cleaning Services",
    url: "https://bmstart.com",
    images: [{ url: "https://bmstart.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bmstart",
    title: "BM Start",
    description: "Setting New Standards in Professional Cleaning Services",
    images: ["https://bmstart.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <Hygiene />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
