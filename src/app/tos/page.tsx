import TermsOfService from "@/components/TOS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOS | BM start",
  description: "",
  // other metadata
};

const TOS = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <TermsOfService />
    </section>
  );
};

export default TOS;
