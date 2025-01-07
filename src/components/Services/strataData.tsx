import { Service } from "@/types/service";

const serviceData: Service[] = [
  {
    id: "commonArea",
    title: "Regular common area cleaning",
    paragraph:
      "Regular common area cleaning ensures shared spaces like lobbies, hallways, and stairwells remain clean, hygienic, and inviting for residents and visitors.",
    image: "/images/strata/area-01.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-01.png",
      designation: "Cleaning Experts",
    },
    tags: ["common area", "strata"],
    publishDate: "Dec 13, 2024",
  },
  {
    id: "hardFloor",
    title: "Hard floor maintenance",
    paragraph:
      "Hard floor maintenance keeps floors clean, polished, and durable while ensuring safety.",
    image: "/images/strata/floor-01.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-01.png",
      designation: "Cleaning Experts",
    },
    tags: ["floor", "strata"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "foyer",
    title: "Overall foyer cleaning",
    paragraph:
      "Overall foyer cleaning ensures a spotless, welcoming entrance by maintaining cleanliness and tidiness in high-traffic areas.",
    image: "/images/strata/foyer-01.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["foyer", "strata"],
    publishDate: "Dec 13, 2024",
  },
  {
    id: "lift",
    title: "Lift cleaning",
    paragraph:
      "Lift cleaning ensures elevators remain hygienic, spotless, and safe, providing a pleasant experience for all users.",
    image: "/images/strata/lift-01.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["lift", "strata"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "glass",
    title: "Glass cleaning",
    paragraph:
      "We offer professional outdoor cleaning services, including pressure washing, exterior building cleaning, and more, ensuring your property looks its best.",
    image: "/images/strata/glass-01.jpg",
    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",
      designation: "Cleaning Experts",
    },
    tags: ["glass", "strata"],
    publishDate: "Dec 13, 2024",
  },

  {
    id: "staircase",
    title: "Staircase cleaning ",
    paragraph:
      "Staircase cleaning keeps stairs spotless, safe, and hygienic, enhancing the overall appeal and safety of shared spaces.",
    image: "/images/strata/staircase-01.jpg",

    author: {
      name: "BM Start Team",
      image: "/images/blog/author-02.png",

      designation: "Cleaning Experts",
    },
    tags: ["staircase", "strata"],
    publishDate: "Dec 13, 2024",
  },
];

export default serviceData;
