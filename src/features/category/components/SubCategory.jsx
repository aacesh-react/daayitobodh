import React from "react";
import NewsCard from "../../main/components/NewsCard";
import img from "../../../assets/img.jpg";

const SubCategory = () => {
  const data = [
    {
      subCategory: "फूलबारी",
      heading:
        "सुन्दर तर नाजुक फूल विगाेनिया: राेप्नेदेखि हुर्काउने कसरी ? सम्पूर्ण जानकारी",
    },
    {
      subCategory: "स्वास्थ्य",
      heading: `भिटामीन र सप्लिमेेन्टहरु: फाइदाजनक मात्रै हैन, भाँती नपुर्‍याए खतरनाक पनि हुन सक्छ`,
    },
    {
      subCategory: "जीवनशैली",
      heading:
        "उफ के उत्पात गर्मी ! प्रशस्तै पानी पिउनाेस् है नत्र यी समस्याहरुले तपाईंलाई सताउला नि !",
    },
    {
      subCategory: "साैन्दर्य",
      heading:
        "गर्मी महिनामा छालामा देखापर्न सक्ने समस्याहरु, जसले तपाईंलाई कुरुप बनाउन सक्छ !",
    },
    {
      subCategory: "खानपान",
      heading:
        "नियमित खानुहाेस् यी फलफूलहरु, जसले तपाईंलाई प्रचण्ड गर्मीबाट राहत दिन सक्छ !",
    },
  ];
  return (
    <div className="flex w-full bg-bg-brown w-full justify-center">
      <div className="flex flex-col w-full lg:w-lg-p xl:w-xl-p items-center py-[1rem]">
        <h3 className="text-brown-heading text-md lg:text-lg py-[1rem]">
          स्वास्थ्य–जीवनशैली
        </h3>
        <div className="flex w-full ">
          <ul className="flex flex-col lg:flex-row  w-full  pb-[1rem]">
            {data.map((item, index) => (
              <li className={`flex px-px w-full`} key={index}>
                <NewsCard
                  img={img}
                  imgStyle={"h-[256px] lg:h-[122px] w-full"}
                  title={item.subCategory}
                  titleStyle={"text-sm text-brown-heading py-[.5rem]"}
                  heading={item.heading}
                  headingStyle= {"pb-[1rem] line-clamp-3"}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
