import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";

const ItihasBodh = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-xl-p ">
        <div className="flex flex-col">
          <h3 className="heading-main px-[15px]">इतिहासबाेध</h3>
          <div className="flex">
            {/* left side */}
            <div className="w-[636px] px-[15px]">
              <div className="w-full">
                <NewsCard
                  img={img}
                  imgStyle={"h-[407px] object-cover"}
                  heading={"मार्क्सवादसम्बन्धी केही गलत धारणा"}
                  headingStyle={"heading-big"}
                  author={"प्रा माणिकलाल श्रेष्ठ"}
                  authorStyle={"text-[1.125rem]"}
                />
              </div>
            </div>
            <div className="flex w-[614px] px-[5px]">
              <div className="flex w-full">
                <div className="flex  flex-wrap">
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "समाजवाद नै किन ? अल्बर्ट आइन्स्टाइनका विचाराेत्तेजक रचना"
                      }
                      headingStyle={"text-sm "}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={"एमसीसीकाे शल्यक्रिया: यसकारण खतरनाक छ याे !"}
                      headingStyle={"text-sm"}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "के नेपाल महामन्दीकाे चपेटामा पर्दै गइरहेकाे हाे ?समाजवाद नै किन ? अल्बर्ट आइन्स्टाइनका विचाराेत्तेजक रचना"
                      }
                      headingStyle={"text-sm"}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "समाजवाद नै किछाेसेमाेसे बजेटले जनता थाङ्नामा सुत्ने ! समाजवादाेन्मुख मुलुककाे घाेर पुँजीवादी बजेट"
                      }
                      headingStyle={"text-sm"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItihasBodh;
