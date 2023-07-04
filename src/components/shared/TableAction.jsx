import React from "react";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";

const TableAction = () => {
  return (
    <td className="border p-[.5rem] flex ">
      <MdOutlineModeEdit className="text-green-500 cursor-pointer" />
      <span className="px-[4px]">{"/"}</span>
      <MdOutlineDelete className="text-red-500 cursor-pointer" />
    </td>
  );
};

export default TableAction;
