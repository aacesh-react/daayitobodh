import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";
import { getNewsData } from "../../../utilities/news";
import { Link } from "react-router-dom";

const Golardha = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsData = getNewsData(homepageNews, false, "गाेलार्द्ध");
  const newsArray = newsData?.newsArray.slice(0, 5) || [];

  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full lg:w-lg-p xl:w-xl-p ">
        <div className="flex w-full flex-col">
          <h3 className="heading-main py-[1rem]  px-[15px]">
            <Link to={"news/गाेलार्द्ध"}>गाेलार्द्ध</Link>
          </h3>
          <div className=" w-full flex flex-col lg:flex-row">
            {/* left side */}
            <div className="w-full lg:w-[495px] xl:w-[666px] px-[15px]">
              <div className="w-full">
                {newsArray[0] && (
                  <NewsCard
                    img={newsArray[0].coverImage}
                    imgStyle={"w-full h-[256px] xl:h-[407px] object-cover"}
                    heading={newsArray[0].heading}
                    headingStyle={" text-md py-[.4rem] xl:heading-big"}
                    newsId={newsArray[0].newsId}
                    categoryName={newsArray[0].categoryName}
                  />
                )}
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col lg:flex-row  lg:w-[495px] xl:w-[614px] px-[5px]">
              <div className="flex w-full">
                <div className="flex">
                  <ul className="flex flex-wrap">
                    {newsArray.map((news, index) => (
                      <li
                        className={`${
                          index == 0 ? "hidden" : "block"
                        } w-1/2 px-[10px] pb-[1rem]`}
                        key={index}
                      >
                        <NewsCard
                          img={news.coverImage}
                          imgStyle={" h-[120px] xl:h-[192px] object-cover"}
                          heading={news.heading}
                          headingStyle={"text-sm font-[300] line-clamp-3"}
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
      </div>
    </div>
  );
};

export default Golardha;
