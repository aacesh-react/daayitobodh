import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";

const TableAction = ({ hideEdit, editButtonHandler, deleteButtonHandler }) => {
  return (
    <td className="border  p-[.5rem]  ">
      <div className="flex justify-center">
        <MdOutlineModeEdit
        className={` ${
            hideEdit ? "hidden" : "block"
          } text-green-500 cursor-pointer`}
          onClick={(e) => {
            editButtonHandler(e);
          }}
        />
        <span className={` ${hideEdit ? "hidden" : "block"} px-[4px]`}>
          {"/"}
        </span>
        <MdOutlineDelete
          className="text-red-500 cursor-pointer"
          onClick={(e) => deleteButtonHandler(e)}
        />
      </div>
    </td>
  );
};

export default TableAction;
