import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Hire";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry - BM Start",
  description:
    "Learn more about BM Start and our professional cleaning services.",
  openGraph: {
    title: "Laundry BM Start",
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
        description="Get in touch with BM Start for all your cleaning, maintenance, and property care needs. Our team is here to provide expert solutions and exceptional service. Let’s create a cleaner, safer environment together!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
