import { Service } from "@/types/service";

const serviceData: Service[] = [
  {
    id: "house",
    title: "House cleaning",
    paragraph:
      "We provide thorough house cleaning services to maintain a clean, safe, and welcoming environment for your home. From regular cleaning to deep cleaning, we've got you covered.",
    image: "/images/blog/home-04.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-01.png",
      designation: "Cleaning Experts",
    },
    tags: ["residential", "cleaning"],
    publishDate: "Dec 13, 2024",
  },
  {
    id: "office",
    title: "Office & Commercial cleaning ",
    paragraph:
      "Our office and commercial cleaning services ensure your workspace is spotless and productive. We specialize in cleaning offices, commercial buildings, and facilities.",
    image: "/images/blog/comm-01.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-01.png",
      designation: "Cleaning Experts",
    },
    tags: ["commercial", "office"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "outdoor",
    title: "Outdoor cleaning",
    paragraph:
      "We offer professional outdoor cleaning services, including pressure washing, exterior building cleaning, and more, ensuring your property looks its best.",
    image: "/images/blog/outdoor-04.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["outdoor", "cleaning"],
    publishDate: "Dec 13, 2024",
  },
  {
    id: "retail",
    title: "Retail cleaning",
    paragraph:
      "Our retail cleaning services are designed to keep your store spotless, creating a pleasant shopping experience for your customers and a clean environment for your staff.",
    image: "/images/blog/blog-02.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["retail", "cleaning"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "industry",
    title: "Industry cleaning",
    paragraph:
      "We offer professional outdoor cleaning services, including pressure washing, exterior building cleaning, and more, ensuring your property looks its best.",
    image: "/images/blog/outdoor-04.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["outdoor", "cleaning"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "restaurant",
    title: "Restaurant cleaning ",
    paragraph:
      "Our restaurant cleaning services guarantee a hygienic and inviting environment, ensuring your patrons enjoy their dining experience in a clean space.",
    image: "/images/blog/restaurant-02.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-01.png",

      designation: "Cleaning Experts",
    },
    tags: ["restaurant", "cleaning"],
    publishDate: "Dec 13, 2024",
  },
];

export default serviceData;
