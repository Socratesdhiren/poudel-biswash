import ServiceDetail from "@/components/Services/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | detail",
  description: "BM start service page",
};

const Detail = () => {
  return (
    <>
      <>
        <ServiceDetail />
      </>
    </>
  );
};

export default Detail;
