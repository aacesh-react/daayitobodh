import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { useSelector } from "react-redux";
import { getCategorySubcategoryNews, getNews } from "../../../utilities/news";

const kalaData = [
  {
    type: `चलचित्र`,
    title: `एउटा दुर्दान्त युद्धकाे कथा: नायककाे सिर्जना र त्यसले परिणाममा ल्याएकाे असर`,
    writer: `एनिमी एट द गेट`,
  },
  {
    type: `सिफारिश`,
    title: `हेर्नै पर्ने तीन इरानी चलचित्रहरु जसले जीवनलाई फरक ढङ्गले हेर्न र जिउन सिकाउँछ`,
    writer: `हर्कबहादुर प्रधान`,
  },
  {
    type: `चलचित्र`,
    title: `बलिउड र हलिउडका मनाेवृत्तिबाट कहिले र कसरी हाेला नेपाली चलचित्रहरु पनि ?`,
    writer: `कमल सुवेदी`,
  },
  // {
  //   type: `बहस`,
  //   title: `विवाहपछि हिराे चल्ने हिराेनी नचल्ने ! याे विभेदले संकेत गरेका पक्षहरु`,
  //   writer: `कमल सुवेदी`,
  // },
];

const prerak = [
  {
    heading: `जब भगतसिंहरु अङ्ग्रेजकाे घेराउमा परे`,
  },
  {
    heading: `जापानी केटाकाे त्याे दृढता र देशभक्तिकाे नमूना`,
  },
  {
    heading: `चार्ली च्याप्लिनले किन गर्छन् नाजीलाई घृणा ?`,
  },
  { heading: `वर्नाड शा र सुन्दरीकाे विवाह प्रस्ताव` },
];

const Kala = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const kalaData = getCategorySubcategoryNews(homepageNews, "कला–मनोरन्जन", 1);
  const preyrakNewsArray = getNews(homepageNews, true, "प्रेरक प्रसङ्ग", 4);
  const leftData = kalaData.filter(
    (data) => data.subcategoryName != "गीतसङ्गीत"
  );
  const middleData = kalaData.find(
    (data) => data.subcategoryName == "गीतसङ्गीत"
  );
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p py-[1rem] ">
        {/* left */}
        <div className="flex lg:w-[660px] xl:w-[930px] ">
          <div className="flex  flex-col lg:flex-row ">
            <div className="flex flex-col">
              <h3 className="heading-main  py-[1rem] px-px">कला–मनोरन्जन</h3>
              <div className="flex flex-col lg:flex-row ">
                <div className="flex w-full lg:w-[247.5px] xl:w-[322px]">
                  <ul className="px-px w-full  lg:pr-[30px]">
                    {leftData.map((value, index) => (
                      <li
                        className={`${
                          index != leftData.length - 1 &&
                          "border-b border-b-[2px]"
                        } `}
                        key={index}
                      >
                        <h3
                          className={`${
                            index > 0 && "pt-[.5rem]"
                          } text-sm text-heading-main`}
                        >
                          {value.subcategoryName}
                        </h3>
                        <Link>
                          <span className="text-sm inline-block py-[.5rem]">
                            {value.newsArray[0].heading}
                          </span>
                        </Link>
                        <span className="font-[400] text-[0.875rem] mb-[.5rem] inline-block">
                          {value.newsArray[0].createdBy}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-[412.5px] xl:w-[579px]">
              <div className="w-full px-px py-[1rem] lg:px-0">
                <NewsCard
                  img={middleData.newsArray[0].coverImage}
                  imgStyle={"h-[226px] lg:h-[400px]"}
                  title={middleData.subcategoryName}
                  titleStyle={"text-sm text-heading-main"}
                  heading={middleData.newsArray[0].heading}
                  headingStyle={"text-sm lg:heading-big line-clamp-3 "}
                />
              </div>
            </div>
          </div>
        </div>
        {/* right */}

        <div className="flex">
          <div className="flex lg:w-[330px] xl:w-[350px] px-px py-[1rem]">
            <div className="flex flex-col border border-[2px] border-black">
              <h3 className="text-sm text-heading-main px-px pt-[1rem]">प्रेरक प्रसङ्ग</h3>
              <div className="flex">
                <ul className="px-px">
                  {preyrakNewsArray.map((news, index) => (
                    <li
                      className="flex items-center h-[98px] my-[1.5rem] "
                      key={index}
                    >
                      <CardRow
                        img={news.coverImage}
                        imgStyle={
                          "w-[140px] lg:w-[120px] xl:w-[140px] h-[98px]"
                        }
                        heading={news.heading}
                        headingStyle={"text-sm line-clamp-4"}
                      />
                      {/* <Link>{value.heading}</Link> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" hidden lg:block lg:w-lg xl:w-xl border-[2px]" />
    </div>
  );
};

export default Kala;
