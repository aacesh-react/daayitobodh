import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { mukhya, baicharik } from "../data/heroData";
import NewsCard from "./NewsCard";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-xl-p">
        <div className="flex flex-col">
          <div className="flex ">
            {/* MUKHYA */}
            <div className="flex flex-col px-[15px] w-[360px]">
              <h3 className="text-[1.5rem] text-red-primary py-[1rem]">
                मुख्य
              </h3>
              <div className="flex py-[1rem]">
                <NewsCard
                  img={img}
                  heading={"प्रचण्डका भारत भ्रमण: केही अनुत्तरित सवालहरु !"}
                  headingStyle={"py-[10px] text-[1.5625rem] leading-[1.1]"}
                  imgStyle={"h-[200px] w-[330px] "}
                />
              </div>

              <div className="flex">
                <ul>
                  {mukhya.map((value, index) => (
                    <li className="py-[1.4rem]" key={index}>
                      <Link className="text-md font-[400] leading-[1.1] custom-clamp">
                        {value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="flex w-[590px] px-[15px]">
              <div className="flex flex-col ">
                <h3 className="text-[1.5rem] text-red-primary py-[1rem]">
                  फिचर
                </h3>

                <div className="flex w-[560px] flex-col py-[1rem]">
                  <div className="w-[560px] pb-[1.5rem]">
                    <NewsCard
                      heading={`पृथ्वीभन्दा बाहिर जीवनकाे खाेजी: के फेला पर्लान् त एलियन? `}
                      img={img}
                      headingStyle={"text-lg leading-[1.2] py-[10px]"}
                      imgStyle={" w-full aspect-[1.65]"}
                    />
                  </div>
                  <div className="w-[560px] pb-[1.5rem]">
                    <NewsCard
                      heading={`पृथ्वीबाट विस्तारै टाढा भाग्दैछ चन्द्रमा:के हुन सक्छ यसकाे असर ? `}
                      img={img}
                      headingStyle={"text-lg leading-[1.2] py-[10px]"}
                      imgStyle={" w-full aspect-[1.65]"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Baicharik */}
            <div className="flex w-[300px] px-[15px]">
              <div className="flex flex-col">
                <h3 className="text-[1.5rem] text-red-primary py-[1rem]">
                  वैचारिकी
                </h3>
                <div className="flex flex-col py-[1rem]">
                  <div className="w-[270px] ">
                    <NewsCard
                      heading={`काेही काला काेही गाेरा किन हुन्छन् हाेला ? `}
                      img={img}
                      headingStyle={"text-md leading-[1.2] pt-[10px] pb-[5px]"}
                      imgStyle={" w-full aspect-[1.65] "}
                    />
                  </div>
                  <div className="w-[270px] ">
                    <NewsCard
                      heading={`कसरी भयाे ब्रम्हाण्डकाे उत्पत्ति ? कसरी हाेला यसकाे अन्त्य ?`}
                      img={img}
                      headingStyle={"text-md leading-[1.1] pt-[10px] pb-[5px]"}
                      imgStyle={" w-full aspect-[1.65] "}
                    />
                  </div>
                </div>
                {/* card */}
                <div className="flex flex-col">
                  <div className="flex w-full">
                    <ul className="w-full">
                      {baicharik.map((value, index) => (
                        <li className="py-[15px] w-full " key={index}>
                          <Link className="w-full">
                            <CardRow
                              img={img}
                              imgStyle={"w-[72px] h-[72px] object-cover"}
                              heading={value}
                              headingStyle={
                                "  text-sm leading-[1.1] line-clamp-3 "
                              }
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* last row */}

          {/* <div className="flex w-full pb-[2rem]">
            <div className="flex w-full">
              <div className="px-[15px] w-1/3 h-[244px]">
                <div className=" bg-[#68AAE1] w-full h-full"></div>
              </div>
              <div className="px-[15px] w-1/3 h-[244px]">
                <div className=" bg-[#68AAE1] w-full h-full"></div>
              </div>
              <div className="px-[15px] w-1/3 h-[244px]">
                <div className=" bg-[#68AAE1] w-full h-full"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
