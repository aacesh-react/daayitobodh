import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import CardRow from "../../../components/shared/CardRow";
import { useSelector } from "react-redux";
import {
  getCategoryNews,
  getCategorySubcategoryNews,
  getNews,
} from "../../../utilities/news";

const Khabar = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const khabarArray = getCategoryNews(homepageNews, "खबर", 3);
  const arthaJagatArray = getCategorySubcategoryNews(
    homepageNews,
    "अर्थजगत्",
    1
  );

  return (
    <div className="flex w-full bg-bg-brown justify-center">
      <div className=" w-full flex-col lg:flex-row lg:w-lg-p xl:w-xl-p  flex">
        {/* khabar */}
        <div className="flex flex-col lg:w-[578px] xl:w-[820px]">
          <h3 className="  px-px w-full heading-main  py-[1rem] lg:px-px">
            <Link to={"news/खबर"}>खबर</Link>
          </h3>
          <div className="flex px-px">
            {khabarArray[0] && (
              <NewsCard
                img={khabarArray[0].coverImage}
                imgStyle={"h-[285px] object-fit"}
                heading={khabarArray[0].heading}
                headingStyle={" text-md py-[1rem] lg:py-0 lg:heading-big"}
                categoryName={khabarArray[0].categoryName}
                newsId={khabarArray[0].newsId}
              />
            )}
          </div>
          <div className="flex overflow-x-scroll lg:overflow-auto  w-full py-[1rem]">
            <div className="flex shrink-0 pl-px w-[90vw]  lg:w-1/2 lg:px-px">
              {khabarArray[1] && (
                <NewsCard
                  img={khabarArray[1].coverImage}
                  imgStyle={"h-[256px] object-fit"}
                  heading={khabarArray[1].heading}
                  headingStyle={" text-md"}
                  categoryName={khabarArray[1].categoryName}
                  newsId={khabarArray[1].newsId}
                />
              )}
            </div>
            <div className="flex shrink-0 pl-px w-[90vw] lg:w-1/2 lg:px-px">
              {khabarArray[2] && (
                <NewsCard
                  img={khabarArray[2].coverImage}
                  imgStyle={"h-[256px] object-fit"}
                  heading={khabarArray[2].heading}
                  headingStyle={"text-md"}
                  categoryName={khabarArray[2].categoryName}
                  newsId={khabarArray[2].newsId}
                />
              )}
            </div>
          </div>
        </div>

        {/* artha jagat */}
        <div className="flex flex-col w-full lg:w-[412px] xl:w-[470px] ">
          <h3 className="heading-main py-[1rem] px-[15px]">
            <Link to={"news/अर्थजगत्"}>अर्थजगत्</Link>
          </h3>
          <div className="flex  flex-col">
            <ul>
              {arthaJagatArray.map((value, index) => (
                <li
                  className="px-px h-[86.667px] lg:h-[150px] mb-[1rem] lg:mb-[2rem]"
                  key={index}
                >
                  <CardRow
                    img={value.newsArray[0].coverImage}
                    imgStyle={"w-[130px] lg:w-[189px] h-full object-cover"}
                    title={value.subcategoryName}
                    titleStyle={"text-heading-main  text-[1.5rem]"}
                    heading={value.newsArray[0].heading}
                    headingStyle={
                      "heading-big font-[300] text-sm lg:text-[1.5rem] line-clamp-2 lg:line-clamp-3"
                    }
                    newsId={value.newsArray[0].newsId}
                    categoryName={value.newsArray[0].categoryName}
                  />
                </li>
              ))}
            </ul>

            {/* <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"अर्थतन्त्र"}
                titleStyle={"text-red-primary  text-[18px]"}
                heading={`प्रचण्डका भारत भ्रमण: एजेण्डा बन्न नसकेका केही अनुत्तरित
                सवालहरु !`}
                headingStyle={
                  "heading-big font-[300] text-sm lg:text-md line-clamp-3"
                }
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"बहस"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`नयाँ बजेटले जर्जर अर्थतन्त्रलाई त्राण दिन सक्ला ?`}
                headingStyle={
                  "heading-big font-[300] text-sm lg:text-md line-clamp-3"
                }
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"जलस्राेत"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`
                भारतलाई बिजुली बेचेर धनी बन्ने सपना: कति यथार्थवादी ?`}
                headingStyle={
                  "heading-big font-[300]  text-sm lg:text-md line-clamp-3"
                }
              />
            </div>
            <div className="px-px h-[130px] lg:h-[164px] mb-[1rem]">
              <CardRow
                img={img}
                imgStyle={"w-[189px] h-full object-cover"}
                title={"न्यायालय"}
                titleStyle={"text-red-primary text-[18px]"}
                heading={`रुस–युक्रेन युद्ध: के विश्व फेरि भयानक महामन्दीतिर जाँदैछ ?`}
                headingStyle={
                  "heading-big font-[300] text-sm lg:text-md line-clamp-3"
                }
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khabar;
