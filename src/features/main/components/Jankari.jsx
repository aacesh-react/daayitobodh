import React from "react";
import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNews } from "../../../utilities/news";
const jankari = [
  {
    heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
  },
  {
    heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
  },
  {
    heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
  },
  {
    heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
  },
];

const bichitraSansar = [
  {
    title: `संसारमा सबैभन्दा निडर काे ?`,
    heading: `अकबर–वीरबलकाे किस्सा`,
  },
  {
    title: `संसारमा सबैभन्दा निडर काे ?`,
    heading: `चिनियाँ नीतिकथा`,
  },
  {
    title: `संसारमा सबैभन्दा निडर काे ?`,
    heading: `नसरुद्दिन हाेजाकाे किस्सा`,
  },
  {
    title: `रमिलाकाे खैलाैना`,
    heading: `बालकथा`,
  },
];
const Jankari = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const rajneetiNewsArray = getNews(homepageNews, false, "राजनीति", 5);
  const bichitraNewsArray = getNews(homepageNews, true, "विचित्र संसार", 5);
  const leftNews = rajneetiNewsArray[0];
  const middleNewsArray = rajneetiNewsArray.slice(1, 5);
  return (
    <div className="flex w-full bg-white justify-center pt-[1rem]">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p ">
        {/* left */}
        <div className="flex flex-col lg:w-[660px] xl:w-[930px]">
          <h3 className="heading-main py-[1rem] px-px">राजनीति</h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[360px] xl:w-[560px] px-px">
              <NewsCard
                img={leftNews.coverImage}
                imgStyle={"w-full h-[256px] lg:h-[422px]"}
                heading={leftNews.heading}
                headingStyle={"text-md py-[1rem]  lg:heading-big"}
              />
            </div>
            <div className="flex">
              <ul className=" px-px pb-[1rem] lg:px-0 lg:w-[300px] xl:w-[370px]">
                {middleNewsArray.map((news, index) => (
                  <li
                    className={`my-[1rem] ${index == 0 && "mt-0"} 
                    ${index == jankari.length - 1 && "mb-0"} 
                    flex h-[98px] lg:h-[125px] justify-between  `}
                    key={index}
                  >
                    <CardRow
                      img={news.coverImage}
                      imgStyle={"w-[140px] lg:w-[143px] h-full object-cover"}
                      heading={news.heading}
                      headingStyle={
                        "text-sm font-[300] line-clamp-3 lg:line-clamp-5"
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex w-full">
          <div className="flex  px-px w-full  lg:w-[330px] xl:w-[350px]">
            <div className=" w-full px-px border border-black border-[2px] flex flex-col">
              <h3 className="heading-main py-[1rem] lg:text-sm">
                विचित्र संसार
              </h3>

              <div className="flex">
                <ul>
                  {bichitraNewsArray.map((news, index) =>
                    index == 0 ? (
                      <NewsCard
                        img={news.coverImage}
                        imgStyle={"w-full h-[165px] "}
                        heading={news.heading}
                        headingStyle={"heading-big text-[1.5rem] pb-[0px]"}
                        author={news.createdBy}
                        authorStyle={"font-[400] pt-[.5rem]"}
                        key={index}
                      />
                    ) : (
                      <li className="my-[1rem] h-[4rem]" key={index}>
                        <CardRow
                          img={news.coverImage}
                          imgStyle={"w-[6rem] h-[4rem]"}
                          heading={news.heading}
                          headingStyle={"font-[700] line-clamp-2"}
                          author={news.createdBy}
                          authorStyle={"font-[300] pt-[4px]"}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jankari;
