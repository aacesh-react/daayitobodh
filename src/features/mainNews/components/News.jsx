import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import newsService from "../../../app/features/news/newsService";
import { getCategoryNews } from "../../../utilities/news";
import NewsCard from "../../main/components/NewsCard";
import defaultImgSquare from "../../../assets/defaultImgSquare.jpg";
import NepaliDate from "nepali-date-converter";
import { nepalDate, convertToNepaliDate } from "../../../utilities/date";

// const convertTimteToNepali = () => {
//   let time = " 16:43:04";
//   time= time.replaceAll("0", "०");
//   time= time.replaceAll("1", "१");
//   time= time.replaceAll("2", "२");
//   time= time.replaceAll("3", "३");
//   time= time.replaceAll("4", "४");
//   time= time.replaceAll("5", "५");
//   time= time.replaceAll("6", "६");
//   time= time.replaceAll("7", "७");
//   time= time.replaceAll("8", "८");
//   time= time.replaceAll("9", "९");
//   return time;
// };

// const convertToNepaliDate = (date) => {
//   const nepaliTime = nepalDate(date);
//   const time = nepaliTime.split(",")[1];
//   console.log("time:", time);
//   const nepaliTimeOnly = convertTimteToNepali();
//   console.log("nepaliTimeOnly:", nepaliTimeOnly);

//   const eDate = new Date(date);
//   let a = new NepaliDate(eDate);
//   NepaliDate.language = "np";
//   let neapaliDate = a.format("ddd DD, MMMM YYYY");
//   console.log("date:", neapaliDate);
//   return new NepaliDate("2051/02/01"); //
// };

const News = () => {
  const { categoryName, newsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState({});
  const { homepageNews } = useSelector((state) => state.news);
  const sambandhitNewsArray = getCategoryNews(homepageNews, categoryName, 3);
  console.log("newsArray:", sambandhitNewsArray);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      try {
        const result = await newsService.getNewsById(newsId);
        console.log("result:", result.data);
        setNews(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, [newsId]);

  if (isLoading) {
    <div></div>;
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-col font-[400] text-[1.375rem]">
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
                className="w-full h-full object-coverbg-bg-brown border rounded-full  "
                src={defaultImgSquare}
                alt=""
              />
            </div>
            <span>{news.author}</span>
            {news.createdAt && (
              <span>{convertToNepaliDate(news.createdAt)}</span>
            )}
            {/* <div>{convertToNepaliDate(new Date())}</div> */}
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
        <div className="flex">
          <div className="w-[600px] hidden lg:block "></div>
          <div
            className="px-px pt-[2rem]"
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
