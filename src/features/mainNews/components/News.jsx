import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import newsService from "../../../app/features/news/newsService";
import { getCategoryNews } from "../../../utilities/news";
import NewsCard from "../../main/components/NewsCard";
import defaultImgSquare from "../../../assets/defaultImgSquare.jpg";
import { convertToNepaliDate } from "../../../utilities/date";

import fb from "../../../assets/fb.svg";
import twitter from "../../../assets/twitter.svg";

const News = () => {
  const { categoryName, newsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState({});
  const { homepageNews } = useSelector((state) => state.news);
  const sambandhitNewsArray = getCategoryNews(homepageNews, categoryName, 3);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      try {
        const result = await newsService.getNewsById(newsId);
        setNews(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, [newsId]);

  if (isLoading) {
    return <div className="h-screen bg-white w-full"></div>;
  }
  const shareOnFacebook = () => {
    let actualUrl = decodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${actualUrl}`,
      "_blank",
      "width=800,height=570"
    );
  };
  const shareOnTwitter = () => {
    let actualUrl = decodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${news.heading}&url=${actualUrl}`,
      "_blank",
      "width=800,height=570"
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-col font-[400] text-[1.375rem]  ">
        <div className="flex flex-col">
          <h3 className="text-[2rem] lg:text-xxl px-px py-[1rem] font-[700]">
            {news.heading}
          </h3>
          <hr className=" border-heading-main  mx-px" />
          {news.subheading && (
            <span className="px-px pt-[1rem] text-slate-700 ">
              {news.subheading}
            </span>
          )}

          <div className="flex px-px gap-[1rem] items-center text-[1rem] py-[1rem]">
            <div className="h-[45px] w-[45px]   ">
              <img
                className="w-full h-full object-cover bg-bg-brown border rounded-full  "
                src={defaultImgSquare}
                alt=""
              />
            </div>
            <span>{news.author}</span>
            {/* {news.createdAt && (
              <span>{convertToNepaliDate(news.createdAt)}</span>
            )} */}
          </div>
          <hr className=" border-heading-main mx-px" />

          {news.coverImage && (
            <div className="pt-[2rem] px-px">
              <div className="w-full aspect-[3/2] bg-bg-brown rounded">
                <img
                  className="h-full w-full rounded object-cover"
                  src={news.coverImage}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* share */}
          <div className="w-full flex px-px py-[1rem] gap-[1rem] top-[40px] lg:sticky lg:flex-col lg:items-center lg:w-[100px] lg:h-[500px] lg:pt-[3rem] shrink-0    ">
            <div
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer"
              onClick={shareOnFacebook}
            >
              <img src={fb} alt="" />
            </div>
            <div
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer"
              onClick={shareOnTwitter}
            >
              <img src={twitter} alt="" />
            </div>
          </div>
          <div
            className="px-px lg:pt-[2rem]"
            id="news-content-container"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </div>

      {/* sambandhit news */}
      <div className="flex flex-col w-full ">
        <h3 className="heading-main  py-[1rem] px-px">सम्बन्धित खबर</h3>
        <ul className=" w-full flex">
          {sambandhitNewsArray.map((news, index) => (
            <li
              className="inline w-1/3 px-px"
              key={index}
              onClick={scrollToTop}
            >
              <NewsCard
                img={news.coverImage}
                imgStyle={"w-full aspect-[3/2]"}
                heading={news.heading}
                headingStyle={"line-clamp-3"}
                newsId={news.newsId}
                categoryName={news.categoryName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
