"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
// import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          {pathname !== "/hire" && (
            <SectionTitle
              title="Roof Services"
              paragraph="BM Start ensures best when it comes to  roof restoration, maintenance, tile repairs, and other roofing services"
              center
            />
          )}

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 flex aspect-[77/40] max-w-[600px] items-center justify-center text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/services/hire-01.jpg"
                  alt="hire image"
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Temporary Staff Hire
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Skilled professionals available for short-term roles to meet
                    seasonal or urgent demands.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Specialized Roles
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Access to trained personnel for industry-specific
                    requirements, ensuring expertise and efficiency.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Event Staffing
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    On-demand staff for events, including setup, management, and
                    post-event support.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Maintenance and Cleaning Teams
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Dedicated teams for property maintenance and cleaning,
                    ensuring consistent service quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="overflow-hidden py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
              "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Hire? Message us
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData?.name}
                          placeholder="Enter your name"
                          onChange={handleChange}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData?.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="description"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <input
                          onChange={handleChange}
                          name="description"
                          value={formData?.description}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        Submit Ticket
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
