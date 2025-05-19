import { useTranslation } from "react-i18next";

const useOngoingData = () => {
  const { t } = useTranslation();

  return [
    {
      _id: 1,
      mainImage: "/images/blog6/DJI_20250517160053_0394_D.jpg",
      title: {
        en: "Akhaltsikhe Sports Complex Nears Completion",
        ge: "ახალციხის სპორტული კომპლექსის მშენებლობა",
      },
      metadata: {
        en: "The construction works of the Akhaltsikhe Sports Complex are in their final stages. The complex is being built by Arali Group.",
        ge: "კომპლექსს აშენებს არალი ჯგუფი.",
      },
      location: {
        en: "Akhaltsikhe, Georgia",
        ge: "ახალციხე, საქართველო",
      },
      path: "/ongoing/blog-details6",
    },
  ];
};

export default useOngoingData;
