import { useState } from "react";
import { PiUserThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import logo from "../../assets/logo.png";
import { navItems } from "../../data/navbar";

const Title = ({}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = (e) => {
    setShowMobileNav((prev) => !prev);
  };
  return (
    <div className="flex w-full  font-[700]">
      <div className="flex px-px pt-[12px] lg:pt-[2rem]  justify-between border-b border-heading-main  lg:border-0 items-center w-full text-blue-primary  relative lg:justify-center">
        <Link className="lg:hidden w-[32px] pt-[10px]" to={"/login"}>
          {/* <PiUserThin className="h-[32px] text-heading-main w-[32px] border rounded-full border-heading-main p-[2px]  text-bg-secondary xl:hidden" /> */}
        </Link>
        <Link to={"/"}>
          <div className="flex w-[200px]    lg:w-[460px] justify-center">
            <img className="object-cover w-full " src={logo} alt="" />
          </div>
        </Link>

        <div
          className="flex lg:hidden pt-[10px] "
          onClick={showMobileNavHandler}
        >
          <div className="flex flex-col w-[28px] ">
            <hr className="w-full border-heading-main py-[4px]" />
            <hr className="w-full border-heading-main py-[4px]" />
            <hr className="w-full border-heading-main py-[4px]" />
          </div>
        </div>
      </div>
      <MobileNav
        showMenuItems={showMobileNav}
        menuItems={navItems}
        closeMenuItems={showMobileNavHandler}
      />
    </div>
  );
};

export default Title;
