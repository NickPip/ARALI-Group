import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "მთავარი",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "ჩვენ შესახებ",
    newTab: false,
    path: "/docs",
  },
  {
    id: 2.1,
    title: "შესრულებული პროექტები",
    newTab: false,
    path: "/blog",
  },

  {
    id: 3,
    title: "მიმართულებები",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "საგზაო მშენებლობა",
        newTab: false,
        path: "/road-construction",
      },
      {
        id: 34,
        title: "სამოქალაქო მშენებლობა",
        newTab: false,
        path: "/buildings",
      },
      {
        id: 35,
        title: "ბეტონის წარმოება",
        newTab: false,
        path: "/concrete-production",
      },
      {
        id: 35,
        title: "კარიერები",
        newTab: false,
        path: "/quarries",
      },
      {
        id: 35.1,
        title: "გაზ-გასამართი სადგური",
        newTab: false,
        path: "/gas-station",
      },
      {
        id: 36,
        title: "ენერგეტიკა",
        newTab: false,
        path: "/solar",
      },
    ],
  },

  {
    id: 4,
    title: "დაგვიკავშირდით",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
