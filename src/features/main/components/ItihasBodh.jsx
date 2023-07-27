import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";
import img2 from "../../../assets/img2.jpg";
import { useSelector } from "react-redux";
import { getCategoryNews } from "../../../utilities/news";
import { Link } from "react-router-dom";

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
  const { homepageNews } = useSelector((state) => state.news);
  const itihasbodhNewsArray = getCategoryNews(homepageNews, "इतिहासबाेध", 5);
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full flex-col lg:w-lg-p xl:w-xl-p ">
        <h3 className=" heading-main py-[1rem] px-px">
          <Link to={"news/इतिहासबाेध"}>इतिहासबाेध</Link>
        </h3>
        <div className="flex flex-col lg:flex-row">
          {/* left side */}
          <div className="lg:w-[548px] xl:w-[666px] px-[15px]">
            <div className="w-full py-[1rem] lg:py-0">
              {itihasbodhNewsArray[0] && (
                <NewsCard
                  img={itihasbodhNewsArray[0].coverImage}
                  imgStyle={"h-[256px] lg:h-[407px] object-cover"}
                  heading={itihasbodhNewsArray[0].heading}
                  headingStyle={" text-md pt-[1rem] lg:heading-big"}
                  author={itihasbodhNewsArray[0].createdBy}
                  authorStyle={"text-[1.125rem] lg:leading-[1.5]"}
                  newsId={itihasbodhNewsArray[0].newsId}
                  categoryName={itihasbodhNewsArray[0].categoryName}
                />
              )}
            </div>
          </div>
          <div className="flex lg:w-[442px] xl:w-[614px]  ">
            <div className="flex w-full">
              <div className="flex  overflow-x-scroll lg:overflow-auto lg:flex-wrap">
                {itihasbodhNewsArray.map((news, index) => (
                  <div
                    className={`${
                      index == 0 ? "hidden" : "block"
                    }  w-[90vw] shrink-0  px-[15px] lg:w-1/2`}
                    key={index}
                  >
                    <NewsCard
                      img={news.coverImage}
                      imgStyle={
                        "h-[192px] lg:h-[130px] xl:h-[192px] object-cover"
                      }
                      heading={news.heading}
                      headingStyle={"text-sm  font-[300] line-clamp-3"}
                      newsId={news.newsId}
                      categoryName={news.categoryName}
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
