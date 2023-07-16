// import EditProfile from "../features/profile/components/EditProfile";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  MdOutlineShoppingBag,
  MdOutlinePerson,
  MdOutlineLock,
} from "react-icons/md";
// import Password from "../features/profile/components/Password";
import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
import EditProfile from "../features/profile/components/EditProfile";
import Password from "../features/profile/components/Password";
import Title from "../components/shared/Title";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/auth/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../app/features/auth/authSlice";
// import { toast } from "react-toastify";

const Profile = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [activeNavItem, setActiveNavItem] = useState(id);
  const [role, setRole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItemClickHandler = (e) => {
    setActiveNavItem(e.currentTarget.id);
  };

  let navItemComponent;
  if (id == "profile") {
    navItemComponent = <EditProfile />;
  }
  if (id == "password") {
    navItemComponent = <Password />;
  }
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(logout()).unwrap();
      navigate("/");
    } catch (err) {}
  };

  const dashboardHandler = (e) => {
    if (user.roles.includes("admin")) {
      navigate("/admin/dashboard/home");
    }
    if (user.roles.includes("editor")) {
    }
  };

  return (
    <div className="flex flex-col w-full font-[300] items-center">
      <div className="flex flex-col w-full lg:w-lg-p  xl:w-xl-p px-px  items-center ">
        <Title />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <div className="flex  w-full   sm:w-[540px]  md:w-[480px] lg:w-[640px] xl:w-[760px]">
            <div
              className={`flex w-full py-[1rem] items-center border-b justify-center   `}
            >
              <div className="flex w-2/3 ">
                <h3 className="w-full text-[1.25rem] heading-big mb-0 px-[15px] sm:w-[540px] sm:text-[2.5rem]  md:w-[720px]  lg:w-[960px] xl:w-[1140px]">
                  {"Account Settings"}
                </h3>
              </div>
              <div className="flex px-[15px] justify-end  w-1/3 ">
                <button className="btn " onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-[1rem] justify-center w-full ">
          <div className="flex flex-col w-full  items-center md:w-[720px] lg:w-[960px] xl:w-[1140px]">
            <div className="flex w-full    px-[15px]   text-gray-secondary   md:w-[480px] lg:w-[640px] xl:w-[760px]">
              <ul
                className={`flex w-full  items-center py-[.5rem]  text-center  border-b   text-gray-500 sm:border-b-0 `}
              >
                <li className="w-[100px] flex justify-center items-center  lg:w-[120px]">
                  <Link
                    id="profile"
                    className={` ${
                      activeNavItem == "profile" && "text-red-secondary"
                    } w-[2.7rem] flex flex-col md:flex-row  md:w-full items-end flex flex-col md:flex-row  md:w-full items-end`}
                    onClick={navItemClickHandler}
                    to={"/user/profile"}
                  >
                    <MdOutlinePerson className="text-[1.5rem] w-[43.2px] leading-[1] md:w-[24px]" />
                    <span className="text-[10px] text-center  leading-[1.5] inline-block md:text-[0.875rem] md:text-gray-action">
                      &nbsp;My Profile
                    </span>
                  </Link>
                </li>
                <li className="w-[100px] flex justify-center items-center  lg:w-[120px]">
                  <Link
                    id={"password"}
                    className={` ${
                      activeNavItem == "password" && "text-red-secondary"
                    } w-[2.7rem] flex flex-col md:flex-row  md:w-full items-end flex flex-col md:flex-row  md:w-full items-end`}
                    onClick={navItemClickHandler}
                    to={"/user/password"}
                  >
                    <MdOutlineLock className="text-[1.5rem] w-[43.2px] leading-[1] md:w-[24px]" />
                    <span className="text-[10px] text-center  leading-[1.5] inline-block md:text-[0.875rem] md:text-gray-action">
                      &nbsp;Password
                    </span>
                  </Link>
                </li>
                <li
                  className={`${
                    user?.roles.includes("admin") ||
                    user?.roles.includes("author")
                      ? "block"
                      : "hidden"
                  } flex justify-end flex-1 w-full`}
                >
                  <button
                    className="btn  "
                    onClick={(e) => dashboardHandler(e)}
                  >{`Goto dashboard`}</button>
                </li>
              </ul>
            </div>

            {/* import here */}
            {navItemComponent}
            {/* <div className="flex w-full  justify-center">
        
              <Password />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
