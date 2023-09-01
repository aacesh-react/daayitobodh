import { Link } from "react-router-dom";

const MobileNav = ({ showMenuItems, closeMenuItems, menuItems }) => {
  return (
    <div className={`${showMenuItems ? "block" : "hidden"} z-[10] w-full`}>
      <span
        className="absolute top-3 right-6 z-[6] text-[2.5rem] text-heading-main cursor-pointer"
        onClick={closeMenuItems}
      >
        &times;
      </span>
      <div
        id="side-menu"
        className="w-full h-screen  border bg-white absolute top-0 right-0 z-[5] p-[40px]"
      >
        <div className="h-[94vh]  overflow-y-scroll">
          <ul className="">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="py-[.5rem] flex items-center ">
                  <Link
                    className=" text-[1.4rem] font-[500]"
                    to={`/news/${item}`}
                    onClick={closeMenuItems}
                  >
                    {item}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
