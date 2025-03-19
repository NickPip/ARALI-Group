import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "menu.home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "menu.about",
    newTab: false,
    path: "/docs",
  },
  {
    id: 2.1,
    title: "menu.completedProjects",
    newTab: false,
    path: "/blog",
  },

  {
    id: 3,
    title: "menu.directions",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "menu.roadConstruction",
        newTab: false,
        path: "/road-construction",
      },
      {
        id: 34,
        title: "menu.civilConstruction",
        newTab: false,
        path: "/buildings",
      },
      {
        id: 35,
        title: "menu.concreteProduction",
        newTab: false,
        path: "/concrete-production",
      },
      {
        id: 35,
        title: "menu.quarries",
        newTab: false,
        path: "/quarries",
      },
      {
        id: 35.1,
        title: "menu.gasFillingStation",
        newTab: false,
        path: "/gas-station",
      },
      {
        id: 36,
        title: "menu.energy",
        newTab: false,
        path: "/solar",
      },
    ],
  },

  {
    id: 4,
    title: "menu.contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
