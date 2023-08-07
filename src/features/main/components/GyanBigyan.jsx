import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../../utilities/news";

import NewsCard from "./NewsCard";
const GyanBigyan = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsArray = getCategoryNews(homepageNews, "ज्ञान–विज्ञान", 10);
  const leftNewsArray = newsArray.slice(0, 4);
  const rightNewsArray = newsArray.slice(5, 10);
  return (
    <div className="flex justify-center">
      <div className=" w-full  flex flex-col lg:w-lg-p xl:w-xl-p">
        <h1 className="heading-main py-[1rem] px-[15px]">
          <Link to={"news/ज्ञान–विज्ञान"}>ज्ञान–विज्ञान</Link>
        </h1>
        <div className="flex flex-col lg:flex-row ">
          {/*left  */}
          <div className="flex w-full pb-[1rem]  lg:w-[240px] xl:w-[278px]">
            <div className="flex flex-col ">
              <ul>
                {leftNewsArray.map((news, index) =>
                  index == 0 ? (
                    <div className="w-full pb-[12px] px-[15px]" key={index}>
                      <NewsCard
                        img={news.coverImage}
                        imgStyle={" h-[256px] lg:h-[146px] object-cover"}
                        heading={news.heading}
                        headingStyle={"text-md ] line-clamp-3 "}
                        newsId={news.newsId}
                        categoryName={news.categoryName}
                      />
                    </div>
                  ) : (
                    <li className="px-px" key={index}>
                      <Link to={`/news/${news.categoryName}/${news.newsId}`}>
                        <h3 className="text-sm line-clamp-3 font-[300] py-[10px]">
                          {news.heading}
                        </h3>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/*middle  */}
          <div className="flex lg:w-[400px] xl:w-[536px] px-[15px]">
            <div className="flex">
              {newsArray[4] && (
                <NewsCard
                  img={newsArray[4].coverImage}
                  imgStyle={"h-[256px] lg:h-[364px] object-cover"}
                  heading={newsArray[4].heading}
                  headingStyle={
                    "text-md line-clamp-3 lg:leading-[1.4] lg:heading-big"
                  }
                  newsId={newsArray[4].newsId}
                  categoryName={newsArray[4].categoryName}
                />
              )}
            </div>
          </div>

          {/*right  */}
          <div className="flex w-full lg:w-[350px] xl:w-[466px]  ">
            <div className="flex flex-col">
              <ul>
                {rightNewsArray.map((news, index) => (
                  <li
                    className="flex  px-px h-[86.667px]  xl:h-[100px] w-full mb-[1rem]"
                    key={index}
                  >
                    <NewsCard
                      type={"row"}
                      img={news.coverImage}
                      imgStyle={
                        "h-full w-[130px] lg:w-[100px] xl:w-[150px] object-cover"
                      }
                      heading={news.heading}
                      headingStyle={
                        "text-sm w-full line-clamp-3 font-[300]  lg:leading-[1.4] "
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
      </div>
    </div>
  );
};

export default GyanBigyan;
