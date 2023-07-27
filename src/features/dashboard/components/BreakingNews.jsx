import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import newsService from "../../../app/features/news/newsService";
import DeleteModal from "../../../components/shared/DeleteModal";
import Modal from "../../../components/shared/Modal";
import { nepalDate } from "../../../utilities/date";
import NewsModal from "./NewsModal";

const BreakingNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [breakingNews, setBreakingNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [activeNews, setActiveNews] = useState(undefined);
  const [totalBreakingNews, setTotalBreakingNews] = useState(0);
  const [newsToAdd, setNewsToAdd] = useState([]);
  const [breakingNewsId, setBreakingNewsId] = useState([]);

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };
  const addButtonHandler = (e) => {
    setShowModal(true);
    setModalType("add");
  };

  const crossIconHandler = (news) => {
    setActiveNews(news);
    setShowModal(true);
    setModalType("delete");
  };

  const selectButtonHandler = (newBreakingNews, isBreakingNews) => {
    if (isBreakingNews) {
      toast.error("Already added in breaking news, Select another");
      return;
    }
    if (breakingNewsId.length > 9) {
      toast.error("Already 10 news added. Save changes");
      return;
    }
    setBreakingNewsId((prev) => [...prev, newBreakingNews.newsId]);
    setNewsToAdd((prev) => [...prev, newBreakingNews.newsId]);
  };

  const deleteButtonHandler = async (e) => {
    try {
      const result = await newsService.deleteBreakingNews(activeNews.id);
      toast.success("Breaking news deleted!");
      setShowModal(false);
    } catch (error) {
      console.log("err:", error);
    }
  };

  const saveButtonHandler = async () => {
    const promises = [];
    newsToAdd.map(async (id) => {
      const data = {
        newsId: id,
      };
      promises.push(newsService.addBreakingNews(data));
    });
    try {
      const results = await Promise.all(promises);
    } catch (error) {
      console.log("err:", error);
    } finally {
      closeModal();
      // setIsLoading(true);
    }
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await newsService.getBreakingNews();
        setBreakingNews(result.data);
        setTotalBreakingNews(result.data.length);
        const newsIdList = result.data.map((news) => news.newsId);
        setBreakingNewsId(newsIdList);
        setNewsToAdd([]);
        setIsLoading(false);
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, [showModal]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="flex w-full bg-white p-px ">
      <div className="flex flex-col w-full py-[15px] border leading-[3rem] ">
        <div className="border flex justify-between items-center px-px">
          <h3 className="text-[1.5rem] font-[500] ">Breaking News</h3>
          <button
            className={` ${
              breakingNews.length == 10 ? "hidden" : "block "
            } h-[25px] p-[1rem] bg-heading-main flex items-center justify-center  rounded text-white`}
            onClick={addButtonHandler}
          >
            Add
          </button>
        </div>

        {/* for breadking news */}
        <div className="px-px py-[1rem]">
          <table className="w-full border-separate border-spacing-y-[1rem] ">
            <tbody className="w-full font-[700]">
              {breakingNews.map((news, index) => (
                <tr className="" key={index}>
                  <td className={`border-y border-l pl-[1rem] rounded`}>
                    {news.heading}
                  </td>
                  <td className="border-y pr-[1rem]">{news.categoryName}</td>
                  <td className="border-y pr-[1rem] ">
                    {news.subcategoryName}
                  </td>
                  <td className="border-y pr-[1rem]">
                    {nepalDate(news.createdAt)}
                  </td>
                  <td className="border-y border-r pr-[1rem] rounded">
                    <button
                      className="h-[25px] w-[25px] bg-red-500 flex items-center justify-center  rounded text-white"
                      onClick={(e) => crossIconHandler(news)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal showModal={showModal}>
        {modalType == "add" && (
          <NewsModal
            closeModal={closeModal}
            selectButtonHandler={selectButtonHandler}
            breakingNewsList={breakingNewsId}
            saveButtonHandler={saveButtonHandler}
          />
        )}
        {modalType == "delete" && (
          <DeleteModal
            closeModal={closeModal}
            okButtonHandler={deleteButtonHandler}
          />
        )}
      </Modal>
    </div>
  );
};

export default BreakingNews;
