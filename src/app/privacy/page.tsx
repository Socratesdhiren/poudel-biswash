import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy - BM Start",
  description:
    "Learn more about privacy of BM Start and our professional cleaning services.",
  openGraph: {
    title: "Privacy BM Start",
    description:
      "Discover our journey and mission to provide the best cleaning services.",
    url: "https://bmstart.com/about",
    images: [{ url: "https://bmstart.com/images/services/hotelabout-01.jpg" }],
  },
};
const TOS = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <PrivacyPolicy />
    </section>
  );
};

export default TOS;
