import { Metadata } from "next";

import Hygiene from "@/components/Hygiene";

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
      <section className="pb-[120px] pt-[120px]">
        <Hygiene />
      </section>
    </>
  );
};

export default ContactPage;
