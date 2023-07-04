import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";
import img2 from "../../../assets/img2.jpg";

const data = [
  {
    heading: "समाजवाद नै किन ? अल्बर्ट आइन्स्टाइनका विचाराेत्तेजक रचना",
  },
  {
    heading: "एमसीसीकाे शल्यक्रिया: यसकारण खतरनाक छ याे !",
  },
  {
    heading:
      "के नेपाल महामन्दीकाे चपेटामा पर्दै गइरहेकाे हाे ?समाजवाद नै किन ? अल्बर्ट आइन्स्टाइनका विचाराेत्तेजक रचना",
  },
  {
    heading:
      "समाजवाद नै किछाेसेमाेसे बजेटले जनता थाङ्नामा सुत्ने ! समाजवादाेन्मुख मुलुककाे घाेर पुँजीवादी बजेट",
  },
];

const ItihasBodh = () => {
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full flex-col lg:w-lg-p xl:w-xl-p ">
        <h3 className=" title-small lg:heading-main px-px">इतिहासबाेध</h3>
        <div className="flex flex-col lg:flex-row">
          {/* left side */}
          <div className="lg:w-[548px] xl:w-[666px] px-[15px]">
            <div className="w-full py-[1rem] lg:py-0">
              <NewsCard
                img={img}
                imgStyle={"h-[256px] lg:h-[407px] object-cover"}
                heading={"मार्क्सवादसम्बन्धी केही गलत धारणा"}
                headingStyle={" text-md pt-[1rem] lg:heading-big"}
                author={"प्रा माणिकलाल श्रेष्ठ"}
                authorStyle={"text-[1.125rem] lg:leading-[1.5]"}
              />
            </div>
          </div>
          <div className="flex lg:w-[442px] xl:w-[614px] ">
            <div className="flex w-full">
              <div className="flex  overflow-x-scroll lg:overflow-auto lg:flex-wrap">
                {data.map((news, index) => (
                  <div
                    className="w-[90vw] shrink-0  px-[15px] lg:w-1/2 "
                    key={index}
                  >
                    <NewsCard
                      img={img}
                      imgStyle={
                        "h-[192px] lg:h-[130px] xl:h-[192px] object-cover"
                      }
                      heading={news.heading}
                      headingStyle={"text-sm line-clamp-3"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItihasBodh;
