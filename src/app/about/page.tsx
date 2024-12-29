import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About us"
        description="BM Start is a reliable name in professional cleaning services across Australia. We offer customized solutions for homes, offices, and commercial properties, including deep cleaning and beyond. As a proud Australian company, we prioritize hygiene, quality, and customer satisfaction to make every space we clean safe, inviting, and immaculate."
        desc_info="Let BM Start transform your space with exceptional cleaning services that you can trust."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
