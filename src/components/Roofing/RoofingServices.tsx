import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "../Services/SingleBlog";
import roofingData from "./roofing";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 pb-[120px] pt-[180px] dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <SectionTitle
        title="Roofing services"
        paragraph="BM Start provides expert roofing services, including installation, painting, waterproofing, and repairs. We specialize in durable, stylish solutions like modern, tile, and Colorbond roofing, ensuring quality and protection for your property."
        center
      />

      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {roofingData.map((roof) => (
            <div key={roof.id} style={{ margin: "8px 0" }} className="w-full">
              <SingleBlog service={roof} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
