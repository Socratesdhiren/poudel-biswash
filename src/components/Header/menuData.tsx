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
    title: "Cleaning",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "House cleaning",
        path: "/services/house",
        newTab: false,
      },
      {
        id: 42,
        title: "Office & Commercial cleaning",
        path: "/services/office",
        newTab: false,
      },
      {
        id: 44,
        title: "Outdoor cleaning",
        path: "/services/outdoor",
        newTab: false,
      },
      {
        id: 45,
        title: "Retail cleaning",
        path: "/services/retail",
        newTab: false,
      },
      {
        id: 46,
        title: "Industry cleaning",
        path: "/services/industry",
        newTab: false,
      },
      {
        id: 47,
        title: "Restaurant cleaning",
        path: "/services/restaurant",
        newTab: false,
      },
      {
        id: 48,
        title: "Strata cleaning",
        path: "/strata",
        newTab: false,
      },
    ],
  },
  {
    id: 98,
    title: "Roof Restoration",
    path: "/roofing",
    newTab: false,
  },

  {
    id: 3,
    title: "Labour Hire Services",
    path: "/hire",
    newTab: false,
  },

  {
    id: 99,
    title: "Supplies",
    newTab: false,
    path: "/hygiene",
  },

  {
    id: 2,
    title: "About us",
    path: "/about",
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
