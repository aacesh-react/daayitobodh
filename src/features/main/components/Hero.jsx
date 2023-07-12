import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { mukhya, baicharik } from "../data/heroData";
import NewsCard from "./NewsCard";

const Hero = () => {
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full lg:w-lg-p flex-col lg:flex-row  xl:w-xl-p">
        {/* <div className="flex flex-col"> */}
        {/* <div className="flex "> */}
        {/* MUKHYA */}
        <div className="flex w-full flex-col px-[15px] lg:w-[320px] xl:w-[360px]">
          <h3 className="text-[1.5rem] text-heading-main py-[1rem]">मुख्य</h3>
          <div className="flex w-full  ">
            <NewsCard
              img={img}
              heading={"प्रचण्डका भारत भ्रमण: केही अनुत्तरित सवालहरु !"}
              headingStyle={"text-md lg:text-md"}
              imgStyle={"h-[200px] w-full lg:w-[330px] "}
            />
          </div>
          <div className="flex w-full">
            <ul>
              {mukhya.map((value, index) => (
                <li className=" py-[.5rem] leading-[1.5]" key={index}>
                  <Link className="text-sm lg:text-[1.5rem] font-[300] custom-clamp">
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="flex w-full lg:w-[400px] xl:w-[590px] px-px">
          <div className="flex w-full  flex-col ">
            <h3 className="text-[1.5rem] text-heading-main  py-[1rem]">फिचर</h3>
            <div className="flex w-full flex-col ">
              <div className=" w-full ">
                <NewsCard
                  heading={`पृथ्वीभन्दा बाहिर जीवनकाे खाेजी: के फेला पर्लान् त एलियन? `}
                  img={img}
                  headingStyle={" text-md lg:text-[3rem]"}
                  imgStyle={" w-full aspect-[1.65]"}
                  author={"लेखकको नाम"}
                  authorStyle={"font-[300] text-[1.5rem] "}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Baicharik */}
        <div className="flex w-full lg:w-[270px] xl:w-[330px] px-px">
          <div className="flex w-full  flex-col">
            <h3 className="text-[1.5rem] text-heading-main lg:py-[1rem]">
              वैचारिकी
            </h3>
            <div className="flex flex-col">
              <div className=" pb-[1rem]  lg:pb-0 ">
                <NewsCard
                  heading={`काेही काला काेही गाेरा किन हुन्छन् हाेला ? `}
                  img={img}
                  headingStyle={"text-md leading-[1.3]"}
                  imgStyle={" w-full aspect-[1.65] "}
                  author={"लेखकको नाम"}
                  authorStyle={"font-[300] text-[1rem] "}
                />
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col">
              <div className="flex w-full">
                <ul className="w-full">
                  {baicharik.map((value, index) => (
                    <li className="py-[15px] w-full " key={index}>
                      <h3 className="text-sm">{value}</h3>
                      <span className="font-[300]">{"लेखकको नाम"}</span>
                      {/* <div className="w-full">
                        <CardRow
                          // type={"row"}
                          img={img}
                          imgStyle={" h-[80px] w-[80px] object-cover"}
                          heading={value}
                          headingStyle={"text-[1rem]   line-clamp-3 "}
                          author={"लेखकको नाम"}
                          authorStyle={"font-[300] text-[1rem] "}
                        />
                      </div> */}
                    </li>
                  ))}
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
