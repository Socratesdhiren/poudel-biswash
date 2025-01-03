import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Hire";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - BM Start",
  description:
    "Learn more about BM Start and our professional cleaning services.",
  openGraph: {
    title: "Contact us BM Start",
    description:
      "Discover our journey and mission to provide the best cleaning services.",
    url: "https://bmstart.com/about",
    images: [{ url: "https://bmstart.com/images/services/hotelabout-01.jpg" }],
  },
};

const HirePage = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <Contact />
    </section>
  );
};

export default HirePage;
