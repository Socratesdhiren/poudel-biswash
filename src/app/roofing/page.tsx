import AboutSectionOne from "@/components/Roofing/AboutSectionOne";
import RoofingDetails from "@/components/Roofing/RoofingDetails";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing - BM Start",
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

const RoofingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Roofing services"
        description="BM Start offers expert roof cleaning, maintenance, and water management services to safeguard and enhance your property. We remove debris, moss, and dirt to prevent water buildup and damage, ensuring your roof remains durable and functional. Our team focuses on effective water control to eliminate leaks and drainage problems."
      />
      <RoofingDetails />
    </>
  );
};

export default RoofingPage;
