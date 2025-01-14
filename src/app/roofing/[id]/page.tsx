import ServiceDetail from "@/components/Roofing/RoofingServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof service | detail",
  description: "BM start roof service page",
};

const Detail = () => {
  return (
    <>
      <ServiceDetail />
    </>
  );
};

export default Detail;
