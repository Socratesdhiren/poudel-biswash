import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Services from "@/components/Services";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BM Start",
  description: "Setting New Standards in Professional Cleaning Services",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
