import logo from "../../assets/logo.png";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import tiktok from "../../assets/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-[2rem] pt-[1rem] w-full bg-bg-brown">
      <div className="flex flex-col items-center lg:flex-row lg:items-center  justify-between lg:w-lg  xl:w-xl">
        <div className="w-[250px] h-[86px] my-[.5rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center lg:items-start pb-[1rem] ">
          <h3> {"मन्थन प्रकाशन प्रा. लि."} </h3>
          <span className="font-[300]">{"बालकुमारी– ९, ललितपुर नेपाल ।"}</span>
          <span className="font-[300]">
            {"फोन: ९८४३४८४८४०, ९८५१०९१२९२, ९८४३४७४५४२"}
          </span>
          <span className="font-[300]">{"Email: dayitwabodh@gmail.com"}</span>
        </div>
        <div className="flex font-[300] ">
          <div className="flex flex-col items-center px-px lg:border-l lg:border-l-[4px] border-heading-main">
            <span className="">{"सम्पादक"}</span>
            <span className="font-[700]">{"चन्द्र खाकी"}</span>
          </div>
          <div className="flex flex-col items-center px-px lg:border-l lg:border-l-[4px] border-heading-main">
            <span>
              <Link to={"/page/हाम्रो-टीम"}>हाम्राे टीम</Link>
            </span>
            <span>
              <Link to={"/page/हाम्राे-बारेमा"}>हाम्राे बारेमा</Link>
            </span>
          </div>
          <div className="flex flex-col items-center px-px lg:border-l lg:border-l-[4px] border-heading-main">
            <span>{"सूचना विभाग "}</span>
            <span>{"दर्ता न‌ं. ८८/ /२०८०–८१"}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[1rem] pt-[1rem] lg:pt-[0]">
            <div className="h-[30px] w-[30px] ">
              <Link>
                <img className="h-full w-full" src={fb} alt="" />
              </Link>
            </div>
            <div className="h-[30px] w-[30px] ">
              <Link>
                <img className="h-full w-full" src={twitter} alt="" />
              </Link>
            </div>
            <div className="h-[30px] w-[30px] ">
              <Link>
                <img className="h-full" src={youtube} alt="" />
              </Link>
            </div>
            <div className="h-[30px] w-[30px]">
              <Link>
                <img className="h-full" src={tiktok} alt="" />
              </Link>
            </div>
          </div>
          <span className="font-[300] text-[.875rem] py-[.5rem] lg:pb-[0]">
            &copy;{new Date().getFullYear()} {"Dayitwabodh.com"}
          </span>
        </div>
      </div>
      <div className="flex justify-center py-[.5rem] bg-heading-main w-full text-neutral-200">
        <div className="flex flex-col lg:flex-row w-full items-center lg:justify-end lg:w-lg  xl:w-xl">
          <span>Designed and developed by:</span>
          <div className="flex items-center justify-center gap-[.5rem] h-[40px]">
            {/* <div className="h-full w-[40px] border rounded-full bg-red-200 lg:hidden">
              <img src={bitsolutionnepal} alt="" />
            </div> */}
            <span>
              <Link target="_blank" to={"https://bitsolutionnepal.com/"}>
                &nbsp;BIT SOLUTION NEPAL
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
