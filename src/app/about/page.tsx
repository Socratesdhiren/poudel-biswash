import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - BM Start",
  description:
    "Learn more about BM Start and our professional cleaning services.",
  openGraph: {
    title: "About BM Start",
    description:
      "Discover our journey and mission to provide the best cleaning services.",
    url: "https://bmstart.com/about",
    images: [{ url: "https://bmstart.com/images/services/hotelabout-01.jpg" }],
  },
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
    </>
  );
};

export default AboutPage;
