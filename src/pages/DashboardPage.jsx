import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import MainContent from "../features/dashboard/components/MainContent";

const DashboardPage = () => {
  const [itemId, setItemId] = useState(null);
  const [showItems, setShowItems] = useState(false);
  const [itemToShow, setItemToShow] = useState(undefined);

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
                <span
                  className="py-[1rem]"
                  onClick={(e) => itemClickHandler("categories")}
                >
                  Categories
                </span>
                <span
                  className="pb-[1rem]"
                  onClick={(e) => itemClickHandler("addCategory")}
                >
                  Add Category
                </span>
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
                <span
                  className="py-[1rem]"
                  onClick={(e) => itemClickHandler("subcategories")}
                >
                  Sub categories
                </span>
                <span
                  className="pb-[1rem]"
                  onClick={(e) => itemClickHandler("addSubcategory")}
                >
                  Add Sub-Category
                </span>
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
                <span
                  className="py-[1rem]"
                  onClick={(e) => itemClickHandler("news")}
                >
                  News
                </span>
                <span
                  className="pb-[1rem]"
                  onClick={(e) => itemClickHandler("addNews")}
                >
                  Add News
                </span>
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
                <span
                  className="py-[1rem]"
                  onClick={(e) => itemClickHandler("users")}
                >
                  Users
                </span>
                <span
                  className="pb-[1rem]"
                  onClick={(e) => itemClickHandler("addUser")}
                >
                  Add Users
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* right  */}
      <MainContent itemName={itemToShow} />
    </div>
  );
};

export default DashboardPage;
