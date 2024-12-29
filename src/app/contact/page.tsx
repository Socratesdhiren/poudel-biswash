import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
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
