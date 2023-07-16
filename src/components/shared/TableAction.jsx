import React from "react";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";

const TableAction = ({ showEdit, editButtonHandler, deleteButtonHandler }) => {
  return (
    <td className="border  p-[.5rem]  ">
      <div className="flex justify-center">
        <MdOutlineModeEdit
          className={` ${
            showEdit ? "block" : "hidden"
          } text-green-500 cursor-pointer`}
        />
        <span className={` ${showEdit ? "block" : "hidden"} px-[4px]`}>
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
