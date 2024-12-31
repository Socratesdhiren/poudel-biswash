import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy | BM start",
  description: "",
  // other metadata
};

const TOS = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <PrivacyPolicy />
    </section>
  );
};

export default TOS;
