import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MainContent from "../features/dashboard/components/MainContent";

const DashboardPage = () => {
  const [itemId, setItemId] = useState(null);
  const [showItems, setShowItems] = useState(false);

  // const [itemToShow, setItemToShow] = useState(undefined);

  let { contentId } = useParams();

  const selectItemsHandler = (id) => {
    console.log("id:", id);
    if (id == itemId) {
      setShowItems(false);
      return setItemId(null);
    }
    setShowItems(true);
    setItemId(id);
  };

  const itemClickHandler = (item) => {
    setItemToShow(item);
  };

  return (
    <div className="flex w-full bg-white font-[400] font-sans text-gray-500">
      {/* left */}
      <div className="border-r min-h-screen flex flex-col w-[250px] shrink-0">
        <div className="py-[1rem] px-px w-full border-b">
          <h3 className="text-md">ADMIN</h3>
        </div>
        <ul className="cursor-pointer">
          <li className="px-px pt-[1rem]" id="categories">
            <div
              className="flex justify-between items-center py-[1rem]"
              onClick={(e) => {
                selectItemsHandler(e.currentTarget.parentElement.id);
              }}
            >
              <span>CATEGORIES</span>
              <span className="text-[12px]">
                <BsChevronDown />
              </span>
            </div>
            <div className="  ">
              <div
                className={` ${
                  showItems && itemId == "categories"
                    ? "max-h-[100px] duration-1000"
                    : "max-h-0 duration-1000"
                } flex flex-col w-full text-[0.93rem]  overflow-hidden  ease-in-out px-px bg-gray-100 `}
              >
                <Link
                  className="py-[1rem]"
                  // onClick={(e) => itemClickHandler("categories")}
                  to={"/admin/dashboard/categories"}
                >
                  Categories
                </Link>
                <Link
                  className="pb-[1rem]"
                  // onClick={(e) => itemClickHandler("addCategory")}
                  to={"/admin/dashboard/addCategory"}
                >
                  Add Category
                </Link>
              </div>
            </div>
          </li>
          <li className="px-px" id="subCategories">
            <div
              className="flex justify-between items-center py-[1rem]"
              onClick={(e) => {
                selectItemsHandler(e.currentTarget.parentElement.id);
              }}
            >
              <span>SUB CATEGORIES</span>
              <span className="text-[12px]">
                <BsChevronDown />
              </span>
            </div>
            <div className="">
              <div
                className={` ${
                  showItems && itemId == "subCategories"
                    ? "max-h-[100px] duration-1000"
                    : "max-h-0 duration-1000"
                } flex flex-col w-full text-[0.93rem]  overflow-hidden  ease-in-out px-px bg-gray-100 `}
              >
                <Link
                  className="py-[1rem]"
                  // onClick={(e) => itemClickHandler("subcategories")}
                  to={"/admin/dashboard/subcategories"}
                >
                  Sub categories
                </Link>
                <Link
                  className="pb-[1rem]"
                  // onClick={(e) => itemClickHandler("addSubcategory")}
                  to={"/admin/dashboard/addSubcategory"}
                >
                  Add Sub-Category
                </Link>
              </div>
            </div>
          </li>
          <li className="px-px" id="news">
            <div
              className="flex justify-between items-center py-[1rem]"
              onClick={(e) => {
                selectItemsHandler(e.currentTarget.parentElement.id);
              }}
            >
              <span>NEWS</span>
              <span className="text-[12px]">
                <BsChevronDown />
              </span>
            </div>
            <div className="  ">
              <div
                className={` ${
                  showItems && itemId == "news"
                    ? "max-h-[100px] duration-1000"
                    : "max-h-0 duration-1000"
                } flex flex-col w-full text-[0.93rem]  overflow-hidden  ease-in-out px-px bg-gray-100 `}
              >
                <Link
                  className="py-[1rem]"
                  // onClick={(e) => itemClickHandler("news")}
                  to={"/admin/dashboard/news"}
                >
                  News
                </Link>
                <Link
                  className="pb-[1rem]"
                  // onClick={(e) => itemClickHandler("addNews")}
                  to={"/admin/dashboard/addNews"}
                >
                  Add News
                </Link>
              </div>
            </div>
          </li>
          <li className="" id="users">
            <div
              className="flex justify-between px-px items-center py-[1rem]"
              onClick={(e) => {
                selectItemsHandler(e.currentTarget.parentElement.id);
              }}
            >
              <span>USERS</span>
              <span className="text-[12px]">
                <BsChevronDown />
              </span>
            </div>
            <div className=" w-full bg-gray-100 ">
              <div
                className={` ${
                  showItems && itemId == "users"
                    ? "max-h-[100px] duration-1000"
                    : "max-h-0 duration-1000"
                } flex flex-col w-full text-[0.93rem]  overflow-hidden  ease-in-out px-[2rem]  `}
              >
                <Link
                  className="py-[1rem]"
                  // onClick={(e) => itemClickHandler("users")}
                  to={"/admin/dashboard/users"}
                >
                  Users
                </Link>
                {/* <span
                  className="pb-[1rem]"
                  onClick={(e) => itemClickHandler("addUser")}
                >
                  Add Users
                </span> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* right  */}
      <MainContent itemName={contentId} />
    </div>
  );
};

export default DashboardPage;
