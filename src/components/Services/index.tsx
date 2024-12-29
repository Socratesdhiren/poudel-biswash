import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import serviceData from "./servicesData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our services"
          paragraph="Our mission at BM Start is to provide exceptional cleaning services that enhance the quality of living and working spaces. Whether it's your home, office, or commercial property, we offer reliable and tailored solutions to meet your needs."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {serviceData.map((service) => (
            <div
              key={service.id}
              style={{ margin: "12px 0" }}
              className="w-full"
            >
              <SingleBlog service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
