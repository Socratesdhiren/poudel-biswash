import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

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

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch today and let us help you create a cleaner, safer space!"
        desc_info="We’d love to hear from you! Whether you have questions about our services, need a quote, or want to provide feedback, feel free to reach out. Our team is here to assist you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
