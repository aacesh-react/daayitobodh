import React, { useState } from "react";
import { PiUserThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { navItems } from "../../features/navbar/data/navbar";
import MobileNav from "./MobileNav";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.jpg";

const Title = ({}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = (e) => {
    setShowMobileNav((prev) => !prev);
  };
  return (
    <div className="flex w-full  font-[700]">
      <div className="flex px-px justify-between  border-b items-center h-[72px] w-full text-blue-primary  relative lg:justify-center lg:h-[160px]">
        <Link className="lg:hidden" to={"/login"}>
          <PiUserThin className="h-[32px] text-heading-main w-[32px] border rounded-full border-heading-main p-[2px]  text-bg-secondary xl:hidden" />
        </Link>
        <Link
          className="flex w-[200px]  my-[1rem]  lg:w-[460px] justify-center"
          to={"/"}
        >
          {/* <h3 className=" text-[30px] lg:text-[124px] inline-block ">
            दायित्वबोध
          </h3> */}
          <img className="object-cover h-full w-full " src={logo} alt="" />
        </Link>

        <div className="flex lg:hidden " onClick={showMobileNavHandler}>
          <div className="flex flex-col w-[28px] ">
            <hr className="w-full border-heading-main py-[4px]" />
            <hr className="w-full border-heading-main py-[4px]" />
            <hr className="w-full border-heading-main py-[4px]" />
          </div>
        </div>
        {/* <span className=" hidden lg:block lg:text-[21px]  font-[500] absolute  lg:bottom-[0px] lg:right-[222px] xl:right-[368px]">
          बिचारनिर्माणको दिशामा सार्थक पहल
        </span> */}
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
