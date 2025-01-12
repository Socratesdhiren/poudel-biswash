"use client";
import { usePathname } from "next/navigation";

import SectionTitle from "../Common/SectionTitle";

const RoofingDetails = () => {
  const pathname = usePathname();

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        {pathname !== "/roofing" && (
          <SectionTitle
            title="Roof Cleaning and Maintenance"
            paragraph="Roof cleaning and maintenance by BM Start ensures your roof stays clean, durable, and free from water damage"
            center
          />
        )}

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 flex aspect-[25/24] max-w-[600px] items-center justify-center text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <video
                controls
                autoPlay
                muted
                loop={true}
                style={{ maxWidth: "100%", borderRadius: "6px" }}
              >
                <source src="/videos/roofing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Comprehensive Cleaning
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Removal of debris, moss, and grime to maintain a spotless and
                  durable roof.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Water Management
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Effective solutions to prevent water buildup, leaks, and
                  drainage issues.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Proactive Maintenance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Regular inspections and upkeep to extend your roof's lifespan
                  and ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingDetails;
