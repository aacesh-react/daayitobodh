import React from "react";
import NewsCard from "./NewsCard";
import CardRow from "../../../components/shared/CardRow";
import { useSelector } from "react-redux";
import { getNews } from "../../../utilities/news";

const Jankari = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const rochakNewsArray = getNews(homepageNews, true, "रोचक", 5);
  const bichitraNewsArray = getNews(homepageNews, true, "विचित्र संसार", 5);
  const leftNews = rochakNewsArray && rochakNewsArray[0];
  const middleNewsArray = rochakNewsArray?.slice(1, 5);
  return (
    <div className="flex w-full bg-white justify-center pt-[1rem]">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p ">
        {/* left */}
        <div className="flex flex-col lg:w-[660px] xl:w-[930px]">
          <h3 className="heading-main py-[1rem] px-px">रोचक</h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[360px] xl:w-[560px] px-px">
              {leftNews && (
                <NewsCard
                  img={leftNews.coverImage}
                  imgStyle={"w-full h-[256px] lg:h-[422px]"}
                  heading={leftNews.heading}
                  headingStyle={
                    "text-md py-[1rem]  lg:heading-big line-clamp-3"
                  }
                  newsId={leftNews.newsId}
                  categoryName={leftNews.categoryName}
                />
              )}
            </div>
            <div className="flex">
              <ul className=" px-px pb-[1rem] lg:px-0 lg:w-[300px] xl:w-[370px]">
                {middleNewsArray?.map((news, index) => (
                  <li
                    className={`my-[1rem] ${index == 0 && "mt-0"} 
                     ${index == middleNewsArray.length - 1 && "mb-0"} 
                    flex h-[86.667px] lg:h-[125px] justify-between  `}
                    key={index}
                  >
                    <CardRow
                      img={news.coverImage}
                      imgStyle={"w-[130px] lg:w-[143px] h-full object-cover"}
                      heading={news.heading}
                      headingStyle={
                        "text-sm font-[300] line-clamp-3 lg:line-clamp-5"
                      }
                      newsId={news.newsId}
                      categoryName={news.categoryName}
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
            <div className=" w-full px-px border border-heading-main rounded border-[2px] flex flex-col">
              <h3 className="heading-main py-[1rem] lg:text-sm">
                विचित्र संसार
              </h3>

              <div className="flex">
                <ul>
                  {bichitraNewsArray?.map((news, index) =>
                    index == 0 ? (
                      <NewsCard
                        img={news.coverImage}
                        imgStyle={"w-full h-[165px] "}
                        heading={news.heading}
                        headingStyle={"heading-big text-[1.5rem] pb-[0px]"}
                        author={news.author}
                        authorStyle={"font-[400] pt-[.5rem]"}
                        key={index}
                        newsId={news.newsId}
                        categoryName={news.categoryName}
                      />
                    ) : (
                      <li className="my-[1rem] h-[4rem]" key={index}>
                        <CardRow
                          img={news.coverImage}
                          imgStyle={"w-[6rem] h-[4rem]"}
                          heading={news.heading}
                          headingStyle={"font-[700] line-clamp-2"}
                          author={news.author}
                          authorStyle={"font-[300] pt-[4px]"}
                          newsId={news.newsId}
                          categoryName={news.categoryName}
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
