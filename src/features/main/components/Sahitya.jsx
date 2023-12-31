import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategorySubcategoryNews, getNews } from "../../../utilities/news";

const Sahitya = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const sahityaData = getCategorySubcategoryNews(homepageNews, "साहित्य", 2);
  const leftNews = sahityaData[0]?.newsArray[1];
  const baalSansaarNewsArray = getNews(homepageNews, true, "बालसंसार", 5);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p">
        {/* left */}
        <div className="flex flex-col lg:w-[660px] xl:w-[941px]">
          <h3 className="heading-main py-[1rem] px-px">
            <Link to={`news/साहित्य`}>साहित्य</Link>
          </h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex lg:w-[330px]  xl:w-[588px] ">
              <div className="flex  w-full px-px ">
                {leftNews && (
                  <NewsCard
                    img={leftNews.coverImage}
                    imgStyle={"w-full  h-[256px] lg:h-[422px] object-cover"}
                    heading={leftNews.heading}
                    headingStyle={
                      " text-md lg:heading-big text-30 line-clamp-4"
                    }
                    newsId={leftNews.newsId}
                    categoryName={leftNews.categoryName}
                  />
                )}
              </div>
            </div>
            <div className="flex w-full lg:w-[330px] xl:w-[353px]  p-px lg:p-0">
              <ul className="w-full ">
                {sahityaData.map((value, index) => (
                  <li
                    className={`my-[1rem] ${index == 0 && "mt-0 "} 
                    ${index == sahityaData.length - 1 && "mb-0"} 
                    ${value.subcategoryName == "समालोचना" && "hidden"} 
                    flex h-[113px] justify-between`}
                    key={index}
                  >
                    <div className="flex flex-col w-full pr-[10px]">
                      <h3 className="heading-main text-sm p-0 border-b  border-b-heading-main border-b-[2px] line-clamp-2">
                        {value.subcategoryName}
                      </h3>
                      <h3 className=" text-end text-sm pt-[.5rem] line-clamp-2">
                        <Link
                          to={`news/${value.newsArray[0].categoryName}/${value.newsArray[0].newsId}`}
                        >
                          {value.newsArray[0].heading}
                        </Link>
                      </h3>
                      <h3 className="text-end font-[400]">
                        {value.newsArray[0].author}
                      </h3>
                    </div>
                    <div className="h-full shrink-0">
                      <Link
                        to={`news/${value.newsArray[0].categoryName}/${value.newsArray[0].newsId}`}
                      >
                        <img
                          className="h-full w-[143px] object-cover rounded"
                          src={value.newsArray[0].coverImage}
                          alt="img"
                        />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex w-full lg:w-[330px] xl:w-[339px]">
          <div className="flex px-px w-full ">
            <div className=" w-full px-px border border-heading-main rounded border-[2px] flex flex-col">
              <h3 className="heading-main py-[1rem]">बालसंसार</h3>

              <div className="flex">
                <ul>
                  {baalSansaarNewsArray?.map((news, index) =>
                    index == 0 ? (
                      <NewsCard
                        img={news.coverImage}
                        imgStyle={"w-full h-[165px] "}
                        heading={news.heading}
                        headingStyle={
                          "heading-big text-[1.5rem] pb-[0px] line-clamp-3"
                        }
                        author={news.author}
                        authorStyle={"font-[400]"}
                        newsId={news.newsId}
                        categoryName={news.categoryName}
                        key={index}
                      />
                    ) : (
                      <li className="my-[1rem]" key={index}>
                        <h3 className="heading-big text-sm py-[4px]">
                          <Link to={`news/${news.categoryName}/${news.newsId}`}>
                            {news.heading}
                          </Link>
                        </h3>

                        <h3 className="font-[400]">{news.author}</h3>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:block lg:w-lg mt-[2rem] xl:w-xl border border-[2px]" />
    </div>
  );
};

export default Sahitya;
