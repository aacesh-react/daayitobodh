import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../../app/features/category/categorySlice";
import DeleteModal from "../../../components/shared/DeleteModal";
import Modal from "../../../components/shared/Modal";
import MyPagination from "../../../components/shared/MyPagination";
import Pagination from "../../../components/shared/Paginaton";
import TableAction from "../../../components/shared/TableAction";
import { getCookie } from "../../../pkg/universalCookies";
import { nepalDate } from "../../../utilities/date";
import { validateForm } from "../../../utilities/formValidaton";
import UpdateCategoryModal from "./UpdateCategoryModal";

const data = [
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  "Bigyan",
  "Sahitye",
  "Argha",
  // "Bigyan",
  // "Sahitye",
  // "Argha",
  // "Bigyan",
  // "Sahitye",
  // "Argha",
  // "Bigyan",
];

const AdminCategories = () => {
  const { categories } = useSelector((state) => state.category);
  const [activeCategory, setActiveCategory] = useState(null);
  const [totalNoOfPage, setTotalNoOfPage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const limit = 10;

  const pageClickHandler = async (page) => {
    setPage(page);
    // const limit = 10;
    try {
      const result = await dispatch(getCategories({ limit, page })).unwrap();
      setTotalNoOfPage(Math.ceil(result.totalLength / limit));
    } catch (error) {
      console.log("error:", error);
    }
  };

  const editButtonHandler = (category) => {
    setShowModal(true);
    setActiveCategory(category);
    setModalType("edit");
  };

  const deleteIconHandler = (category) => {
    setShowModal(true);
    setActiveCategory(category);
    setModalType("delete");
  };

  const updateButtonHandler = async (hasEmptyData, categoryName) => {
    const data = {
      id: activeCategory.id,
      categoryName,
    };
    if (!hasEmptyData) {
      try {
        const result = await dispatch(updateCategory(data)).unwrap();
      } catch (error) {
        console.log("err:", error);
      } finally {
        closeModal();
      }
    }
  };

  const deleteButtonHandler = async () => {
    try {
      const result = await dispatch(deleteCategory(activeCategory.id)).unwrap();
    } catch (error) {
      console.log("err:", error);
    } finally {
      closeModal();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await dispatch(getCategories({ limit, page })).unwrap();
        setTotalNoOfPage(Math.ceil(result.totalLength / limit));
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, []);

  return (
    <div className="flex w-full bg-white p-px ">
      <div className="flex flex-col w-full py-[15px] border ">
        <h3 className=" px-px text-[1.5rem] font-[500] pb-[1rem] ">
          Categories
        </h3>
        <table className="border font-[300] ">
          <thead className="font-[600]">
            <tr>
              <td className="border p-[.5rem]">SN</td>
              {/* <td className="border p-[.5rem]">Id</td> */}
              <td className="border p-[.5rem]">Name</td>
              <td className="border p-[.5rem]">Created By</td>
              <td className="border p-[.5rem]">Updated By</td>
              <td className="border p-[.5rem]">Created At</td>
              <td className="border p-[.5rem]">Updated At</td>
              <td className="border p-[.5rem]  w-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="border p-[.5rem]">
                  {(page - 1) * limit + index + 1}
                </td>
                {/* <td className="border p-[.5rem]">{category.id}</td> */}
                <td className="border p-[.5rem]">{category.name}</td>
                <td className="border p-[.5rem]">{category.createdBy}</td>
                <td className="border p-[.5rem]">{category.updatedBy}</td>
                <td className="border p-[.5rem]">
                  {nepalDate(category.createdAt)}
                </td>
                <td className="border p-[.5rem]">
                  {nepalDate(category.updatedAt)}
                </td>
                <TableAction
                  editButtonHandler={(e) => {
                    editButtonHandler(category);
                  }}
                  deleteButtonHandler={(e) => {
                    deleteIconHandler(category);
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[500px] py-[1rem]">
          <MyPagination
            totalNoOfPage={totalNoOfPage}
            pageToShow={4}
            pageClickHandler={pageClickHandler}
          />
        </div>
      </div>
      <Modal showModal={showModal}>
        {modalType == "edit" && (
          <UpdateCategoryModal
            closeModal={closeModal}
            updateButtonHandler={updateButtonHandler}
            defaultInputValue={activeCategory.name}
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

export default AdminCategories;
