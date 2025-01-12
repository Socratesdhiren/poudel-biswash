import Image from "next/image";
import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  return (
    <>
      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Hygiene and Sanitation"
            paragraph="BM Start, an Australian company, specializes in hygiene and sanitation services. We provide tailored cleaning solutions for homes, offices, and commercial spaces, ensuring safe and healthy environments across the country."
            center
          />
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
                  <source src="/videos/hygiene.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Hygiene and Sanitation
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    BM Start is dedicated to maintaining high standards of
                    hygiene and sanitation. We ensures safe and clean
                    environments through strict hygienic and sanitary practices.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Chemical Cleaning
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We specialize in chemical cleaning solutions using advanced
                    cleaning agents to tackle tough contaminants. Our processes
                    ensure superior hygiene while being eco-conscious.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Supplies for Hygiene
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    BM Start offers a range of hygiene supplies, including
                    sanitizers, cleaning chemicals, masks, and PPE. These
                    essentials help individuals and businesses maintain optimal
                    cleanliness and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
