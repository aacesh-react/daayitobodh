import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { navItems } from "../../data/navbar";

const Navbar = () => {
  // const [showMobileNav, setShowMobileNav] = useState(false);
  // const auth = useSelector((state) => state.auth);

  // const showMobileNavHandler = (e) => {
  //   setShowMobileNav((prev) => !prev);
  // };
  return (
    <div className="flex w-full bg-white justify-center sticky top-0 z-10">
      <div className=" hidden lg:block   flex  w-full lg:w-lg-p  xl:w-xl-p px-px   items-center justify-center">
        <ul className=" w-full flex items-center  h-[3rem]  border-y-[3px] border-heading-main justify-between ">
          <li className="pb-[4px]">
            <Link
              className="text-[1.125rem] pb-[4px] text-heading-main "
              to={`/`}
            >
              <AiFillHome />
            </Link>
          </li>
          {navItems.map((value, index) => (
            <li key={index} className="flex">
              <Link
                className="text-[1.0625rem] font-bold"
                to={`/news/${value}`}
              >
                {value}
              </Link>
            </li>
          ))}
          {/* <Link
            className=" text-heading-main"
            to={`${auth.loggedIn ? "/user/profile" : "/login"}`}
          >
            <PiUserThin className="h-[32px]  w-[32px] border rounded-full border-heading-main p-[2px]  text-bg-secondary cursor-pointer " />
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
