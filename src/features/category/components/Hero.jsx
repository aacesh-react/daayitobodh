import React from "react";
import NewsCard from "../../main/components/NewsCard";
import { useSelector } from "react-redux";
import { getCategoryNews, getNews } from "../../../utilities/news";

const Hero = ({ categoryName }) => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsArray = getCategoryNews(homepageNews, categoryName, 5);
  const leftNews = newsArray[0];
  const rightNewsArray = newsArray.slice(1, 5);

  return (
    <div className="flex w-full  justify-center bg-white">
      <div className="flex w-full flex-col lg:w-lg-p xl:w-xl-p  items-center">
        <h3 className="text-md lg:text-[3rem] lg:py-[1rem] text-brown-heading">
          {categoryName}
        </h3>
        <div className="flex flex-col w-full lg:flex-row">
          {/* left */}
          <div className="flex w-full py-[1rem] lg:w-[495px] xl:w-[666px] px-px">
            {leftNews && (
              <NewsCard
                img={leftNews.coverImage}
                imgStyle={"w-full h-[256px] lg:h-[407px]"}
                heading={leftNews.heading}
                headingStyle={"text-md lg:text-lg pt-[1rem]"}
                author={leftNews.author}
                authorStyle={"text-sm font-[300]"}
                newsId={leftNews.newsId}
                categoryName={leftNews.categoryName}
              />
            )}
          </div>
          {/* right */}
          <div className="flex py-[1rem]">
            <ul className="flex flex-wrap lg:w-[495px] xl:w-[614px] pr-px">
              {rightNewsArray.map((news, index) => (
                <li key={index} className="w-1/2 pb-[1rem] pl-px">
                  <NewsCard
                    img={news.coverImage}
                    imgStyle={"aspect-[3/2]"}
                    heading={news.heading}
                    headingStyle={"text-sm pt-[.5rem] line-clamp-2"}
                    newsId={news.newsId}
                    categoryName={news.categoryName}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
