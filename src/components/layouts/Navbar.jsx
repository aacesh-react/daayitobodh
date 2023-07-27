import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../features/navbar/data/navbar";
import Caraousel from "../shared/Caraousel";
import CarouselCard from "../shared/CarouselCard";
import MobileNav from "../shared/MobileNav";
import { PiUserThin } from "react-icons/pi";
import Title from "../shared/Title";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";

import { getMe } from "../../app/features/auth/authSlice";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const showMobileNavHandler = (e) => {
    setShowMobileNav((prev) => !prev);
  };
  return (
    <div className="flex w-full bg-white justify-center ">
      <div className="flex flex-col w-full lg:w-lg-p  xl:w-xl-p px-px  items-center ">
        <div className="w-full mt-[2rem]">
          <Title />
        </div>
        <div className={`hidden lg:block flex w-full bg `}>
          <div className="flex w-full h-[3rem]  border-y-[3px] border-heading-main">
            <ul className=" w-full flex items-center justify-between ">
              {navItems.map((value, index) => (
                <li key={index} className="flex">
                  <Link className="text-[17px] font-bold" to={`/news/${value}`}>
                    {value}
                  </Link>
                </li>
              ))}
              <Link
                className=" text-heading-main"
                to={`${auth.loggedIn ? "/user/profile" : "/login"}`}
              >
                <PiUserThin className="h-[32px]  w-[32px] border rounded-full border-heading-main p-[2px]  text-bg-secondary cursor-pointer " />
              </Link>
            </ul>
          </div>
        </div>

        {/* Carausel */}
        <div className="w-full  py-[1rem]">
          <Caraousel />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
