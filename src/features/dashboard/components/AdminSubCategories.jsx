import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSubcategory,
  getSubcategories,
  updateSubcategory,
} from "../../../app/features/subcategory/subcategorySlice";
import DeleteModal from "../../../components/shared/DeleteModal";
import Modal from "../../../components/shared/Modal";
import MyPagination from "../../../components/shared/MyPagination";
import Pagination from "../../../components/shared/Paginaton";
import TableAction from "../../../components/shared/TableAction";
import UpdateModal from "../../../components/shared/UpdateModal";
import { nepalDate } from "../../../utilities/date";

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

const pageToShow = 4;
const limit = 10;

const AdminSubcategories = () => {
  const { subcategories } = useSelector((state) => state.subcategory);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [totalNoOfPage, settTotalNoOfPage] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const editIconHandler = (subcategory) => {
    setShowModal(true);
    setModalType("edit");
    setActiveSubcategory(subcategory);
  };

  const updateButtonHandler = async (hasEmptyData, subcategoryName) => {
    if (!hasEmptyData) {
      let data = {
        subcategoryName,
        id: activeSubcategory.id.toString(),
      };
      try {
        const result = await dispatch(updateSubcategory(data)).unwrap();
      } catch (error) {
        console.log("err:", error);
      } finally {
        closeModal();
      }
    }
  };

  const deletIconHandler = (subcategory) => {
    setShowModal(true);
    setModalType("delete");
    setActiveSubcategory(subcategory);
  };

  const deleteButtonHandler = async () => {
    try {
      const result = await dispatch(
        deleteSubcategory(activeSubcategory.id)
      ).unwrap();
    } catch (error) {
      console.log("error:", error);
    } finally {
      closeModal();
    }
  };

  const pageHandler = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await dispatch(
          getSubcategories({ limit, page: activePage })
        ).unwrap();
        const totalLength = result.totalLength;
        const totalNoOfPage = Math.ceil(totalLength / limit);
        settTotalNoOfPage(totalNoOfPage);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, [activePage]);

  return (
    <div className="flex w-full bg-white p-px text-black">
      <div className="flex flex-col w-full py-[15px] border ">
        <h3 className=" px-px text-[1.5rem] font-[500] pb-[1rem] ">
          Sub Categories
        </h3>
        <div className="lg:min-h-[650px] xl:min-h-[420px]">
          <table className="border font-[300] w-full ">
            <thead className="font-[600]">
              <tr>
                <td className="border p-[.5rem]">SN</td>
                <td className="border p-[.5rem]">Name</td>
                <td className="border p-[.5rem]">Category</td>
                <td className="border p-[.5rem]">Created By</td>
                <td className="border p-[.5rem]">Updated By</td>
                <td className="border p-[.5rem]">Created At</td>
                <td className="border p-[.5rem]">Updated At</td>
                <td className="border p-[.5rem]  w-[10px]">Action</td>
              </tr>
            </thead>
            <tbody>
              {subcategories.map((subcategory, index) => (
                <tr
                  className={`  ${index % 2 === 0 && "bg-bg-brown"}`}
                  key={index}
                >
                  <td className="border p-[.5rem]">
                    {(activePage - 1) * 10 + index + 1}
                  </td>
                  <td className="border p-[.5rem]">{subcategory.name}</td>
                  <td className="border p-[.5rem]">
                    {subcategory.categoryName}
                  </td>
                  <td className="border p-[.5rem]">{subcategory.createdBy}</td>
                  <td className="border p-[.5rem]">{subcategory.updatedBy}</td>
                  <td className="border p-[.5rem]">
                    {nepalDate(subcategory.createdAt)}
                  </td>
                  <td className="border p-[.5rem]">
                    {nepalDate(subcategory.updatedAt)}
                  </td>
                  <TableAction
                    editButtonHandler={(e) => {
                      editIconHandler(subcategory);
                    }}
                    deleteButtonHandler={(e) => {
                      deletIconHandler(subcategory);
                    }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
          <UpdateModal
            closeModal={closeModal}
            updateButtonHandler={updateButtonHandler}
            inputFieldData={{
              name: "subcategory",
              label: "Subcategory Name",
              placeholder: "Enter subcategory name",
              errorMessage: "Subcategory is required",
              value: `${activeSubcategory.name}`,
            }}
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

export default AdminSubcategories;
