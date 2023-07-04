import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import Pagination from "../../../components/shared/Paginaton";
import TableAction from "../../../components/shared/TableAction";

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
  return (
    <div className="flex w-full bg-white p-px ">
      <div className="flex flex-col w-full py-[15px] border ">
        <h3 className=" px-px text-[1.5rem] font-[500] pb-[1rem] ">
          Categories
        </h3>
        <table className="border font-[300] w-[600px]">
          <thead className="font-[600]">
            <tr>
              <td className="border p-[.5rem]">ID</td>
              <td className="border p-[.5rem]">Name</td>
              <td className="border p-[.5rem]  w-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((category, index) => (
              <tr key={index}>
                <td className="border p-[.5rem]">{index + 1}</td>
                <td className="border p-[.5rem]">{category}</td>
                <TableAction />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[500px] py-[1rem]">
          <Pagination itemsPerPage={1} />
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;