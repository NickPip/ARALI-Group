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
    {
      _id: 2,
      mainImage: "/images/blog7/DJI_20250522152659_0621_D.jpg",
      title: {
        en: "Kutaisi-Baghdati-Abastumani-Benara Road Rehabilitation",
        ge: "ქუთაისი-ბაღდათი-აბასთუმანი-ბენარას დამაკავშირებელი გზის რეაბილიტაცია",
      },
      metadata: {
        en: "The rehabilitation of the road connecting Kutaisi-Baghdati-Abastumani-Benara is in active phase.",
        ge: "ქუთაისი-ბაღდათი-აბასთუმანი-ბენარას დამაკავშირებელი გზის რეაბილიტაცია აქტიურ ფაზაშია.",
      },
      location: {
        en: "Kutaisi-Baghdati-Abastumani-Benara, Georgia",
        ge: "ქუთაისი-ბაღდათი-აბასთუმანი-ბენარა, საქართველო",
      },
      path: "/ongoing/blog-details7",
    },
  ];
};

export default useOngoingData;
