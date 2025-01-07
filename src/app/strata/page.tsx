import SingleBlog from "@/components/Services/SingleBlog";
import strataData from "@/components/Services/strataData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strata cleaning services - BM Start",
  description:
    "Learn more services of BM Start and our professional cleaning services.",
  openGraph: {
    title: "Strata cleaning services of BM Start",
    description:
      "Discover our journey and mission to provide the best strata cleaning services.",
    url: "https://bmstart.com/services",
    images: [{ url: "https://bmstart.com/images/services/home-01.jpg" }],
  },
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Strata cleaning services"
        description="BM Start provides expert strata cleaning services tailored to maintain the cleanliness and appeal of shared spaces in strata buildings. From lobbies to gardens, our skilled team ensures high-quality, reliable cleaning to keep your property welcoming and well-maintained."
      />

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {strataData.map((service) => (
              <div
                key={service.id}
                className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/3"
              >
                <SingleBlog service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
