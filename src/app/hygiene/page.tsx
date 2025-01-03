import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hygiene - BM Start",
  description:
    "Learn more about BM Start and our professional cleaning services.",
  openGraph: {
    title: "Hygiene BM Start",
    description:
      "Discover our journey and mission to provide the best cleaning services.",
    url: "https://bmstart.com/about",
    images: [{ url: "https://bmstart.com/images/services/hotelabout-01.jpg" }],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
