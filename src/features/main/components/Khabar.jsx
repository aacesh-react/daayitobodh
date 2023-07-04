import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";
import { Link } from "react-router-dom";
import CardRow from "../../../components/shared/CardRow";

const Khabar = () => {
  return (
    <div className="flex w-full bg-[#CFD6E4] justify-center">
      <div className=" w-full flex-col lg:flex-row lg:w-lg-p xl:w-xl-p  flex">
        {/* khabar */}
        <div className="flex flex-col lg:w-[578px] xl:w-[820px]">
          <h3 className=" title-small px-px w-full  lg:heading-main lg:px-px">खबर</h3>
          <div className="flex px-px">
            <NewsCard
              img={img}
              imgStyle={"h-[285px] object-fit"}
              heading={
                "प्रचण्डकाे धार्मिक तीर्थाटन: धार्मिक तटस्थता कि सत्ताकाे दाउपेचमा नयाँ अस्त्र ?"
              }
              headingStyle={" text-md py-[1rem] lg:py-0 lg:heading-big"}
            />
          </div>
          <div className="flex overflow-x-scroll lg:overflow-auto  w-full py-[1rem]">
            <div className="flex shrink-0 pl-px w-[90vw]  lg:w-1/2 lg:px-px">
              <NewsCard
                img={img}
                imgStyle={"h-[256px] object-fit"}
                heading={
                  "गरिमा र ओज गुमाउँदै गएकाे सदन: किन हुन्न गम्भीर बहस ?"
                }
                headingStyle={" text-md"}
              />
            </div>
            <div className="flex shrink-0 pl-px w-[90vw] lg:w-1/2 lg:px-px">
              <NewsCard
                img={img}
                imgStyle={"h-[256px] object-fit"}
                heading={"प्रचण्डका भारत भ्रमण: केही अनुत्तरित सवालहरु !"}
                headingStyle={"text-md"}
              />
            </div>
          </div>
        </div>

        {/* artha jagat */}
        <div className="flex flex-col w-full lg:w-[412px] xl:w-[470px] ">
          <h3 className=" title-small lg:heading-main px-[15px]">अर्थजगत्</h3>
          <div className="flex  flex-col">
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              {/* card */}
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"अर्थतन्त्र"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`प्रचण्डका भारत भ्रमण: एजेण्डा बन्न नसकेका केही अनुत्तरित
                सवालहरु !`}
                headingStyle={"heading-big  text-sm lg:text-md line-clamp-3"}
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              {/* card */}
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"बहस"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`नयाँ बजेटले जर्जर अर्थतन्त्रलाई त्राण दिन सक्ला ?`}
                headingStyle={"heading-big  text-sm lg:text-md line-clamp-3"}
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              {/* card */}
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"जलस्राेत"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`
                भारतलाई बिजुली बेचेर धनी बन्ने सपना: कति यथार्थवादी ?`}
                headingStyle={"heading-big  text-sm lg:text-md line-clamp-3"}
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              {/* card */}
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"न्यायालय"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`रुस–युक्रेन युद्ध: के विश्व फेरि भयानक महामन्दीतिर जाँदैछ ?`}
                headingStyle={"heading-big  text-sm lg:text-md line-clamp-3"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khabar;
