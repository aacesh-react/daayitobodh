import { useEffect, useState } from "react";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";
import newsService from "../../../app/features/news/newsService";
import DeleteModal from "../../../components/shared/DeleteModal";
import Modal from "../../../components/shared/Modal";
import MyPagination from "../../../components/shared/MyPagination";
import Pagination from "../../../components/shared/Paginaton";
import TableAction from "../../../components/shared/TableAction";
import { nepalDate } from "../../../utilities/date";
import UpdateNewsModal from "./UpdateNewsModal";

const pageToShow = 4;
const limit = 10;
const AdminNews = () => {
  const [showModal, setShowModal] = useState(false);
  const [news, setNews] = useState([]);
  const [activeNews, setActiveNews] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [totalNoOfPage, setTotalNoOfPage] = useState(0);
  const [message, setMessage] = useState(undefined);
  const [btnText, setBtnText] = useState(undefined);

  const closeModal = () => {
    setActiveNews(null);
    setModalType(null);
    setMessage(undefined);
    setBtnText(undefined);
    setShowModal(false);
  };

  const editIconHandler = (news) => {
    setShowModal(true);
    setModalType("edit");
    setActiveNews(news);
  };

  // const updateButtonHandler = async (hasEmptyData, subcategoryName) => {
  //   if (!hasEmptyData) {
  //     let data = {
  //       subcategoryName,
  //       id: activeNews.id.toString(),
  //     };
  //     try {
  //       const result = await dispatch(updateSubcategory(data)).unwrap();
  //     } catch (error) {
  //       console.log("err:", error);
  //     } finally {
  //       closeModal();
  //     }
  //   }
  // };

  const deletIconHandler = (subcategory) => {
    setShowModal(true);
    setModalType("delete");
    setActiveNews(subcategory);
  };

  const deleteButtonHandler = async () => {
    try {
      await newsService.deleteNews(activeNews.newsId);
      toast.success("News successfully deleted!");
    } catch (error) {
      console.log("error:", error);
      toast.error("Error occured!");
    } finally {
      closeModal();
    }
  };

  const publishButtonHandler = (news) => {
    setActiveNews(news);
    setModalType("publish");
    setMessage(news.isPublished ? "Unpublish News ?" : "Publish News ?");
    setBtnText(news.isPublished ? "Unpublish" : "Publish");
    setShowModal(true);
  };

  const publishDoneHandler = async () => {
    const data = {
      newsId: activeNews.newsId,
      isPublished: !activeNews.isPublished,
    };
    try {
      const result = await newsService.updatePublishNews(data);
      closeModal();
    } catch (error) {
      console.log("err:", error);
    }
  };

  const pageHandler = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await newsService.getAllNews(
          limit,
          activePage,
          true,
          false
        );
        // console.log("result:", result.data);
        setNews(result.data);
        const totalLength = result.totalLength;
        const totalNoOfPage = Math.ceil(totalLength / limit);
        setTotalNoOfPage(totalNoOfPage);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, [activePage, showModal]);

  return (
    <div className="flex w-full bg-white p-px text-black">
      <div className="flex flex-col w-full py-[15px] border ">
        <h3 className=" px-px text-[1.5rem] font-[500] pb-[1rem] ">News</h3>
        <table className="border font-[300] w-full">
          <thead className="font-[600]">
            <tr>
              <td className="border p-[.5rem]">SN</td>
              <td className="border p-[.5rem] w-[400px]">Heading</td>
              <td className="border p-[.5rem] w-[400px]">Sub Heading</td>
              <td className="border p-[.5rem]">Category</td>
              <td className="border p-[.5rem]">Sub Category</td>
              <td className="border p-[.5rem]">Author</td>
              <td className="border p-[.5rem]">Published</td>
              <td className="border p-[.5rem]">Created By</td>
              <td className="border p-[.5rem]">Updated By</td>
              <td className="border p-[.5rem]">Created At</td>
              <td className="border p-[.5rem]">Updated At</td>
              <td className="border p-[.5rem]  w-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {news.map((news, index) => (
              <tr
                className={`  ${index % 2 === 0 && "bg-bg-brown"}`}
                key={index}
              >
                <td className="border p-[.5rem]">
                  {(activePage - 1) * 10 + index + 1}
                </td>
                <td className="border p-[.5rem]">{news.heading}</td>
                <td className="border p-[.5rem]">{news.subheading}</td>
                <td className="border p-[.5rem]">{news.categoryName}</td>
                <td className="border p-[.5rem]">{news.subcategoryName}</td>
                <td className="border p-[.5rem]">{news.author}</td>
                <td className="border p-[.5rem]">
                  <button
                    className={` ${
                      news.isPublished ? "bg-green-500" : "bg-red-700"
                    } border  rounded px-[12px] py-[2px] text-white `}
                    onClick={(e) => publishButtonHandler(news)}
                  >
                    {news.isPublished ? "Yes" : "No"}
                  </button>
                </td>
                <td className="border p-[.5rem]">{news.createdBy}</td>
                <td className="border p-[.5rem]">{news.updatedBy}</td>
                <td className="border p-[.5rem]">
                  {nepalDate(news.createdAt)}
                </td>
                <td className="border p-[.5rem]">
                  {nepalDate(news.updatedAt)}
                </td>
                <TableAction
                  editButtonHandler={(e) => {
                    editIconHandler(news);
                  }}
                  deleteButtonHandler={(e) => {
                    deletIconHandler(news);
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[500px] py-[1rem]">
          <MyPagination
            pageToShow={pageToShow}
            totalNoOfPage={totalNoOfPage}
            pageClickHandler={pageHandler}
          />
        </div>
      </div>
      <Modal showModal={showModal}>
        {modalType == "edit" && (
          <UpdateNewsModal
            news={activeNews}
            closeModal={closeModal}
            setActivePage={setActivePage}
          />
        )}
        {modalType == "delete" && (
          <DeleteModal
            closeModal={closeModal}
            okButtonHandler={deleteButtonHandler}
          />
        )}
        {modalType == "publish" && (
          <DeleteModal
            closeModal={closeModal}
            okButtonHandler={publishDoneHandler}
            message={message}
            btnText={btnText}
          />
        )}
      </Modal>
    </div>
  );
};

export default AdminNews;
