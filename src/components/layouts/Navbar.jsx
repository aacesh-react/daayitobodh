import React from "react";
import { Link } from "react-router-dom";
import NavbarNews from "../../features/navbar/components/NavbarNews";
import { navItems } from "../../features/navbar/data/navbar";

const Navbar = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-xl  items-center">
        <div className="flex justify-center h-[160px] w-[470px] text-blue-primary  relative">
          <h3 className="text-[124px] inline-block leading-[1.5] ">दायित्वबोध</h3>
          {/* <h3 className="text-[124px]  ">tesr</h3> */}
          <span className="text-[21px]  font-[500] absolute bottom-0 right-0">
            बिचारनिर्माणको दिशामा सार्थक पहल
          </span>
        </div>
        <div className="flex w-full">
          <div className="flex w-full h-[3rem]  border-y-[3px] border-blue-secondary">
            <ul className=" w-full flex items-center justify-between">
              {navItems.map((value, index) => (
                <li key={index} className="flex">
                  <Link className="text-[17px] font-bold">{value}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* content */}
        <NavbarNews />
      </div>
    </div>
  );
};

export default Navbar;
