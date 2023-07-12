import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../features/navbar/data/navbar";
import Caraousel from "../shared/Caraousel";
import CarouselCard from "../shared/CarouselCard";
import MobileNav from "../shared/MobileNav";
import { PiUserThin } from "react-icons/pi";
import Title from "../shared/Title";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showMobileNavHandler = (e) => {
    setShowMobileNav((prev) => !prev);
  };
  return (
    <div className="flex w-full bg-white justify-center ">
      <div className="flex flex-col w-full lg:w-lg-p  xl:w-xl-p px-px  items-center ">
        {/* <MobileNav  showMenuItems= {true}/> */}
        {/* <div className="flex w-full">
          <div className="flex justify-between  border-b items-center h-[72px] w-full text-blue-primary  relative lg:justify-center lg:h-[160px]">
            <div className="lg:hidden">
              <PiUserThin className="h-[32px]  w-[32px] border rounded-full border-blue-secondary p-[2px]  text-bg-secondary xl:hidden" />
            </div>
            <h3 className=" text-[30px] lg:text-[124px] inline-block ">
              दायित्वबोध
            </h3>
            <div className="flex lg:hidden " onClick={showMobileNavHandler}>
              <div className="flex flex-col w-[28px] ">
                <hr className="w-full border-blue-secondary py-[4px]" />
                <hr className="w-full border-blue-secondary py-[4px]" />
                <hr className="w-full border-blue-secondary py-[4px]" />
              </div>
            </div>
            <span className=" hidden lg:block lg:text-[21px]  font-[500] absolute  lg:bottom-[10px] lg:right-[222px] xl:right-[368px]">
              बिचारनिर्माणको दिशामा सार्थक पहल
            </span>
          </div>
          <MobileNav
            showMenuItems={showMobileNav}
            menuItems={navItems}
            closeMenuItems={showMobileNavHandler}
          />
          
        </div> */}
        {/* <Title /> */}
        <Link className="flex h-[175px] w-full  justify-center" to={"/"}>
          <img className="h-[] object-cover" src={logo} alt="" />
        </Link>
        <div className={`hidden lg:block flex w-full`}>
          <div className="flex w-full h-[3rem]  border-y-[3px] border-heading-main">
            <ul className=" w-full flex items-center justify-between ">
              {navItems.map((value, index) => (
                <li key={index} className="flex">
                  <Link className="text-[17px] font-bold" to={`/news/${value}`}>
                    {value}
                  </Link>
                </li>
              ))}
              <Link className=" text-heading-main" to={"/login"}>
                <PiUserThin className="h-[32px]  w-[32px] border rounded-full border-heading-main p-[2px]  text-bg-secondary cursor-pointer " />
              </Link>
            </ul>
          </div>
        </div>

        {/* Carausel */}
        <div className="w-full  py-[1rem]">
          <Caraousel>
            <CarouselCard />
          </Caraousel>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
