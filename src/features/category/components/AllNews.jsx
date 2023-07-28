import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import NewsCard from "../../main/components/NewsCard";
import Pagination from "../../../components/shared/Paginaton";
import MyPagination from "../../../components/shared/MyPagination";
import newsService from "../../../app/features/news/newsService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const limit = 12;
const pageToShow = 4;
const AllNews = () => {
  const [activePage, setActivePage] = useState(1);
  const { categoryName } = useParams();
  const { homepageNews } = useSelector((state) => state.news);
  const [totalNoOfPage, setTotalNoOfPage] = useState(0);
  const [newsArray, setNewsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = homepageNews.find(
    (news) => news.categoryName == categoryName
  );

  const pageHandler = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await newsService.getCategoryNews(
          limit,
          activePage,
          category.categoryId,
          false,
          true
        );
        console.log("result:", result);
        setNewsArray(result.data);
        const totalLength = result.totalLength;
        const totalNoOfPage = Math.ceil(totalLength / limit);
        setTotalNoOfPage(totalNoOfPage);
        setIsLoading(false);
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, [activePage]);

  if (isLoading) {
    <div></div>;
  }
  return (
    <div className="flex bg-white justify-center w-full py-[1rem]">
      <div className="flex w-full flex-col lg:w-lg-p xl:w-xl-p  ">
        <ul className="flex flex-col lg:flex-row w-full flex-wrap ">
          {newsArray.map((news, index) => (
            <li key={index} className="w-full lg:w-1/3  px-px pb-[1rem]">
              <NewsCard
                img={news.coverImage}
                imgStyle={"h-[186px] w-full"}
                heading={news.heading}
                headingStyle={"text-sm py-[.5rem]"}
                newsStyle={"text-xs font-[300] leading-[1.5] clamp-custom"}
                newsId={news.newsId}
                categoryName={categoryName}
              />
            </li>
          ))}
        </ul>
        {/* Pagination */}
        <div className="w-[500px] py-[1rem]">
          <MyPagination
            pageToShow={pageToShow}
            totalNoOfPage={totalNoOfPage}
            pageClickHandler={pageHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AllNews;
