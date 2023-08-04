import React, { useEffect } from "react";
import { useState } from "react";
import newsService from "../../../app/features/news/newsService";
import { nepalDate } from "../../../utilities/date";

const limit = 150;

const isBreakingNews = (breakingNewsList, news) => {
  return breakingNewsList.includes(news.newsId);
};

const NewsModal = ({
  closeModal,
  selectButtonHandler,
  breakingNewsList,
  saveButtonHandler,
}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await newsService.getAllNews(limit, 1, false, true);
        setNews(result.data);
      } catch (error) {
      }
    })();
  }, []);

  return (
    <div className="bg-white px-px h-[90vh] text-black  w-[90vw] flex flex-col py-[2rem]">
      <div className="flex justify-between ">
        <h3 className="text-[1.5rem] font-[500] pb-[1rem] ">
          Add Breaking News
        </h3>
        <span
          className=" pr-[1rem] cursor-pointer text-[1.125rem] "
          onClick={(e) => {
            closeModal();
          }}
        >
          ✕
        </span>
      </div>
      <div className="overflow-y-scroll h-[70vh] border">
        <table className=" font-[300] w-full ">
          <thead className="font-[600]">
            <tr className="">
              <td className="border p-[.5rem]">SN</td>
              <td className="border p-[.5rem] w-[400px]">Heading</td>
              <td className="border p-[.5rem]">Category</td>
              <td className="border p-[.5rem]">Sub Category</td>
              <td className="border p-[.5rem]">Author</td>

              <td className="border p-[.5rem]">Created At</td>
              <td className="border p-[.5rem]">Updated At</td>
            </tr>
          </thead>
          <tbody>
            {news.map((news, index) => (
              <tr
                className={`
                  ${index % 2 === 0 && "bg-bg-brown"}
                  ${
                    isBreakingNews(breakingNewsList, news)
                      ? "bg-heading-main text-white cursor cursor-not-allowed"
                      : "cursor-pointer"
                  }
                 hover:bg-heading-main hover:text-white `}
                key={index}
                onClick={(e) => {
                  selectButtonHandler(
                    news,
                    isBreakingNews(breakingNewsList, news)
                  );
                }}
              >
                <td className="border p-[.5rem]">{index + 1}</td>
                <td className="border p-[.5rem]">{news.heading}</td>
                <td className="border p-[.5rem]">{news.categoryName}</td>
                <td className="border p-[.5rem]">{news.subcategoryName}</td>
                <td className="border p-[.5rem]">{news.author}</td>
                <td className="border p-[.5rem]">
                  {nepalDate(news.createdAt)}
                </td>
                <td className="border p-[.5rem]">
                  {nepalDate(news.updatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-around pt-[2rem] w-full">
        <button className="btn rounded bg-red-700 " onClick={closeModal}>
          Cancel
        </button>
        <button
          className="btn bg-heading-main rounded"
          onClick={saveButtonHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewsModal;
