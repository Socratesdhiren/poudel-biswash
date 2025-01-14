import AboutSectionOne from "@/components/Roofing/AboutSectionOne";
import RoofingDetails from "@/components/Roofing/RoofingServices";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing - BM Start",
  description:
    "Learn more about BM Start and our professional cleaning and roofing services.",
  openGraph: {
    title: "About BM Start",
    description:
      "Discover our journey and mission to provide the best cleaning and roofing services.",
    url: "https://bmstart.com/about",
    images: [{ url: "https://bmstart.com/images/services/hotelabout-01.jpg" }],
  },
};

const RoofingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Roofing services"
        description="BM Start provides expert roof cleaning, maintenance, and water management to protect your property. We remove debris and prevent water damage, ensuring a durable, leak-free roof."
      />
      <RoofingDetails />
    </>
  );
};

export default RoofingPage;
