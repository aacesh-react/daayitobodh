import { useEffect, useState, useRef } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { PiUserThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, redirect } from "react-router-dom";
import { logout } from "../../../app/features/auth/authSlice";
import AddCategory from "./AddCategory";
import AddNews from "./AddNewsPage";
import AddSubCategory from "./AddSubCategory";
import AddUser from "./AddUser";
import AdminCategories from "./AdminCategories";
import AdminNews from "./AdminNews";
import AdminSubcategories from "./AdminSubCategories";
import AdminUsers from "./AdminUsers";
const MainContent = ({ itemName }) => {
  const [showProfile, setShowProfile] = useState(false);
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileRef = useRef();

  let mainElement;
  switch (itemName) {
    case "categories":
      mainElement = <AdminCategories />;
      break;
    case "addCategory":
      mainElement = <AddCategory />;
      break;
    case "subcategories":
      mainElement = <AdminSubcategories />;
      break;
    case "addSubcategory":
      mainElement = <AddSubCategory />;
      break;
    case "news":
      mainElement = <AdminNews />;
      break;
    case "addNews":
      mainElement = <AddNews />;
      break;
    case "users":
      mainElement = <AdminUsers />;
      break;
    case "addUser":
      mainElement = <AddUser />;
      break;

    default:
      mainElement = <AdminCategories />;
      break;
  }

  const toggleProfileModal = (e) => {
    setShowProfile((prev) => !prev);
  };

  const closeProfileModal = (e) => {
    if (!profileRef.current?.contains(e.target)) {
      setShowProfile(false);
      document.removeEventListener("mousedown", closeProfileModal);
    }
  };

  const logoutHandler = async (e) => {
    try {
      const result = await dispatch(logout()).unwrap();
      navigate("/");
    } catch (error) {
      console.log("error:", error);
    }
  };

  const profileHandler = (e) => {
    navigate("/user/profile");
  };

  useEffect(() => {
    if (showProfile) {
      document.addEventListener("mousedown", closeProfileModal);
    }
  }, [showProfile]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="flex  flex-col w-full font-[300]">
      <div className="flex  w-full justify-end h-[63px] border-b">
        <div
          className="flex relative justify-end  items-center cursor-pointer px-px "
          ref={profileRef}
        >
          <div className="flex items-center " onClick={toggleProfileModal}>
            <div className="  text-[2rem] border border-gray-500 rounded-full">
              <PiUserThin />
            </div>
            <span className="px-px font-[400] uppercase">
              {user?.firstName} &nbsp; {user?.lastName}
            </span>
          </div>

          {/* Modal */}
          <div
            className={` ${
              showProfile ? "block" : "hidden"
            } absolute border rounded-lg flex flex-col top-[63px]  bg-gray-100 `}
            onClick={(e) => profileHandler(e)}
          >
            <div className="flex border-b p-px w-full justify-center ">
              <div className=" h-[2rem] w-[2rem] flex items-center justify-center text-[2rem] border border-gray-500 rounded-full">
                <PiUserThin />
              </div>
              <div className="flex flex-col">
                <span className="px-px text-[0.875rem] font-[400] capitalize">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="px-px text-[0.75rem]">{user?.email}</span>
              </div>
            </div>
            <div
              className="flex p-px flex items-center col"
              onClick={(e) => {
                logoutHandler(e);
              }}
            >
              <span className=" text-[1.2rem] ">
                <MdOutlineLogout className="" />
              </span>
              <span className="px-px text-[0.875rem]">Log Out</span>
            </div>
          </div>
        </div>
      </div>
      {/* <AdminNews /> */}
      <div>{mainElement}</div>
    </div>
  );
};

export default MainContent;
