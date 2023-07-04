import React from "react";
import NewsCard from "../../main/components/NewsCard";

import img from "../../../assets/img.jpg";

const Hero = () => {
  const data = [
    "समाजवाद नै किन ? अल्बर्ट आइन्स्टाइनका विचाराेत्तेजक रचना",
    "एमसीसीकाे शल्यक्रिया: यसकारण खतरनाक छ याे !",
    "के नेपाल महामन्दीकाे चपेटामा पर्दै गइरहेकाे हाे ?",
    "छाेसेमाेसे बजेटले जनता थाङ्नामा सुत्ने ! समाजवादाेन्मुख मुलुककाे घाेर पुँजीवादी बजेट",
  ];
  return (
    <div className="flex w-full  justify-center bg-white">
      <div className="flex w-full flex-col lg:w-lg-p xl:w-xl-p  items-center">
        <h3 className="text-md lg:text-[3rem] lg:py-[1rem] text-brown-heading">
          स्वास्थ्य–जीवनशैली
        </h3>
        <div className="flex flex-col w-full lg:flex-row">
          {/* left */}
          <div className="flex w-full py-[1rem] lg:w-[495px] xl:w-[666px] px-px">
            <NewsCard
              img={img}
              imgStyle={"w-full h-[256px] lg:h-[407px]"}
              heading={"मार्क्सवादसम्बन्धी केही गलत धारणा"}
              headingStyle={"text-md lg:text-lg pt-[1rem]"}
              author={"प्रा माणिकलाल श्रेष्ठ"}
              authorStyle={"text-sm"}
            />
          </div>
          {/* right */}
          <div className="flex py-[1rem]">
            <ul className="flex flex-wrap lg:w-[495px] xl:w-[614px] pr-px">
              {data.map((item, index) => (
                <li key={index} className="w-1/2 pb-[1rem] pl-px">
                  <NewsCard
                    img={img}
                    imgStyle={"w-full"}
                    heading={item}
                    headingStyle={"text-sm pt-[.5rem] line-clamp-2"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
