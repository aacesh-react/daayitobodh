import logo from "../../assets/logo.png";

const text =
  "दायित्वबोध प्रकाशन प्रा‍‍.लि. बालकुमारी– ९, ललितपुर नेपाल । फोन: ९८४३४८४८४०, ९८५१०९१२९२, ९८४३४७४५४२ Email: dayitwabodh@gmail.com";
const Footer = () => {
  return (
    <div className="flex justify-center w-full bg-bg-brown">
      <div className="flex flex-col items-center lg:flex-row lg:py-[1rem]">
        <div className="w-[250px] h-[86px] my-[.5rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center pb-[1rem] lg:px-[1rem]">
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
      </div>
    </div>
  );
};

export default Footer;
