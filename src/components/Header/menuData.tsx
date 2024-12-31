// types
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "House cleaning services",
        path: "/services/house",
        newTab: false,
      },
      {
        id: 42,
        title: "Office & Commercial cleaning services",
        path: "/services/office",
        newTab: false,
      },
      {
        id: 43,
        title: "Commercial floor cleaning",
        path: "/services/commercial",
        newTab: false,
      },
      {
        id: 44,
        title: "Outdoor cleaning services",
        path: "/services/outdoor",
        newTab: false,
      },
      {
        id: 45,
        title: "Retail cleaning services",
        path: "/services/retail",
        newTab: false,
      },
      {
        id: 46,
        title: "Hotel clearing services",
        path: "/services/hotel",
        newTab: false,
      },
      {
        id: 47,
        title: "Restaurant cleaning services",
        path: "/services/restaurant",
        newTab: false,
      },
    ],
  },

  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 44,
  //   title: "Laundry",
  //   path: "/laundry",
  //   newTab: false,
  // },
];
export default menuData;
