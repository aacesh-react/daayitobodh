import logo from "../../assets/logo.png";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import tiktok from "../../assets/tiktok.svg";
import { Link } from "react-router-dom";

const text =
  "दायित्वबोध प्रकाशन प्रा‍‍.लि. बालकुमारी– ९, ललितपुर नेपाल । फोन: ९८४३४८४८४०, ९८५१०९१२९२, ९८४३४७४५४२ Email: dayitwabodh@gmail.com";
const Footer = () => {
  return (
    <div className="flex justify-center mt-[2rem] p-[1rem] w-full bg-bg-brown">
      <div className="flex flex-col items-center lg:flex-row lg:items-center  justify-between lg:w-lg  xl:w-xl">
        <div className="w-[250px] h-[86px] my-[.5rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center lg:items-start pb-[1rem] ">
          <h3> {"दायित्वबोध प्रकाशन प्रा‍‍.लि."} </h3>
          <span className="font-[300]">{"बालकुमारी– ९, ललितपुर नेपाल ।"}</span>
          <span className="font-[300]">
            {"फोन: ९८४३४८४८४०, ९८५१०९१२९२, ९८४३४७४५४२"}
          </span>
          <span className="font-[300]">{"Email: dayitwabodh@gmail.com"}</span>
        </div>
        <div className="flex font-[300] ">
          <div className="flex flex-col items-center px-px border-l border-l-[4px] border-heading-main">
            <span className="">{"सम्पादक"}</span>
            <span className="font-[700]">{"चन्द्र खाकी"}</span>
          </div>
          <div className="flex flex-col items-center px-px border-l border-l-[4px] border-heading-main">
            <span>{"हाम्राे टीम"}</span>
            <span>{"हाम्राे बारेमा"}</span>
          </div>
          <div className="flex flex-col items-center px-px border-l border-l-[4px] border-heading-main">
            <span>{"सूचना विभाग "}</span>
            <span>{"दर्ता न‌ं. ८८/ /२०८०–८१"}</span>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Footer;
