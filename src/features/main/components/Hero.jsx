import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { getNews } from "../../../utilities/news";
// import { baicharik } from "../data/heroData";
import { mukhya, baicharik } from "../data/heroData";
import NewsCard from "./NewsCard";

const Hero = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const mukhyaNewsArray = getNews(homepageNews, true, "मुख्य", 3);
  const aparadhNewsArray = getNews(homepageNews, true, "अपराध", 1);
  const baicharikiNewsArray = getNews(homepageNews, true, "वैचारिकी", 3);
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full lg:w-lg-p flex-col lg:flex-row  xl:w-xl-p">
        {/* <div className="flex flex-col"> */}
        {/* <div className="flex "> */}
        {/* MUKHYA */}
        <div className="flex w-full flex-col px-[15px] lg:w-[320px] xl:w-[360px]">
          <h3 className="heading-main py-[1rem]">मुख्य</h3>
          <div className="flex w-full">
            <ul>
              {mukhyaNewsArray.map((news, index) =>
                index == 0 ? (
                  <li key={index}>
                    <div className="flex w-full  ">
                      <NewsCard
                        img={news.coverImage}
                        heading={news.heading}
                        headingStyle={"text-md lg:text-md line-clamp-3"}
                        imgStyle={"h-[200px] w-full lg:w-[330px] "}
                      />
                    </div>
                  </li>
                ) : (
                  <li className=" py-[.5rem] leading-[1.5]" key={index}>
                    <Link className="text-sm lg:text-[1.5rem] font-[300] line-clamp-3">
                      {news.heading}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="flex w-full lg:w-[400px] xl:w-[590px] px-px">
          <div className="flex w-full  flex-col ">
            <h3 className="heading-main  py-[1rem]">अपराध</h3>
            <div className="flex w-full flex-col ">
              <div className=" w-full ">
                <NewsCard
                  heading={aparadhNewsArray[0].heading}
                  img={aparadhNewsArray[0].coverImage}
                  headingStyle={" text-md lg:text-[3rem]"}
                  imgStyle={" w-full aspect-[1.65]"}
                  author={aparadhNewsArray[0].createdBy}
                  authorStyle={"font-[300] text-[1.5rem] "}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Baicharik */}
        <div className="flex w-full lg:w-[270px] xl:w-[330px] px-px">
          <div className="flex w-full  flex-col">
            <h3 className="heading-main lg:py-[1rem]">वैचारिकी</h3>
            <div className="flex flex-col">
              <div className="flex w-full">
                <ul className="w-full">
                  {baicharikiNewsArray.map((news, index) =>
                    index == 0 ? (
                      <div className="flex flex-col" key={index}>
                        <div className=" pb-[1rem]  lg:pb-0 ">
                          <NewsCard
                            heading={news.heading}
                            img={news.coverImage}
                            headingStyle={"text-md leading-[1.3]"}
                            imgStyle={" w-full aspect-[1.65] "}
                            author={news.createdBy}
                            authorStyle={"font-[300] text-[1rem] "}
                          />
                        </div>
                      </div>
                    ) : (
                      <li className="py-[15px] w-full " key={index}>
                        <h3 className="text-sm line-clamp-3">{news.heading}</h3>
                        <span className="font-[300]">{news.createdBy}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
