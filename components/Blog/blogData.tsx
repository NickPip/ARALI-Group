import { Blog } from "@/types/blog";
import { useTranslation } from "react-i18next";

const useBlogData = () => {
  const { t } = useTranslation();

  const BlogData: Blog[] = [
    {
      _id: 1,
      mainImage: "/images/blog/feature2.jpg",
      title: t("blog.items.rustaviSportsComplex.title"),
      metadata: t("blog.items.rustaviSportsComplex.metadata"),
      location: t("blog.items.rustaviSportsComplex.location"),
    },
    {
      _id: 2,
      mainImage: "/images/blog/feature3.jpg",
      title: t("blog.items.roadRehabilitation.title"),
      metadata: t("blog.items.roadRehabilitation.metadata"),
      location: t("blog.items.roadRehabilitation.location"),
    },
    {
      _id: 3,
      mainImage: "/images/blog/feature4.jpg",
      title: t("blog.items.roadCleaning.title"),
      metadata: t("blog.items.roadCleaning.metadata"),
      location: t("blog.items.roadCleaning.location"),
    },
    {
      _id: 4,
      mainImage: "/images/blog4/blog4-1.jpg",
      title: t("blog.items.solarPowerPlant.title"),
      metadata: t("blog.items.solarPowerPlant.metadata"),
      location: t("blog.items.solarPowerPlant.location"),
    },
    {
      _id: 5,
      mainImage: "/images/blog5/blog5-1.jpg",
      title: t("blog.items.gasStation.title"),
      metadata: t("blog.items.gasStation.metadata"),
      location: t("blog.items.gasStation.location"),
    },
    // {
    //   _id: 6,
    //   mainImage: "/images/blog6/blog6-1.jpg",
    //   title: t("blog.items.industrialComplex.title"),
    //   metadata: t("blog.items.industrialComplex.metadata"),
    //   location: t("blog.items.industrialComplex.location"),
    // },
    {
      _id: 7,
      mainImage: "/blog9/DJI_20250519170823_0629_D.jpg",
      title: t("blogNine.title"),
      metadata: t("blogNine.categoryName"),
      location: "Abastumani, Georgia",
      path: "/blog/blog-details9",
    },
  ];

  return BlogData;
};

export default useBlogData;
