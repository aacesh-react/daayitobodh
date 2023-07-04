import React from "react";
import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { Link } from "react-router-dom";

const Jankari = () => {
  const jankari = [
    {
      heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
    },
    {
      heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
    },
    {
      heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
    },
    {
      heading: `सुनभन्दा पनि मूल्यवान नून किन खाने नून ? नून नखाँदा के हुन्छ शरीरमा ?`,
    },
  ];

  const bichitraSansar = [
    {
      title: `संसारमा सबैभन्दा निडर काे ?`,
      heading: `अकबर–वीरबलकाे किस्सा`,
    },
    {
      title: `संसारमा सबैभन्दा निडर काे ?`,
      heading: `चिनियाँ नीतिकथा`,
    },
    {
      title: `संसारमा सबैभन्दा निडर काे ?`,
      heading: `नसरुद्दिन हाेजाकाे किस्सा`,
    },
    {
      title: `रमिलाकाे खैलाैना`,
      heading: `बालकथा`,
    },
  ];

  return (
    <div className="flex w-full bg-white justify-center pt-[1rem]">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p ">
        {/* left */}
        <div className="flex flex-col lg:w-[660px] xl:w-[930px]">
          <h3 className="title-small lg:heading-main px-px">जानकारी</h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[360px] xl:w-[560px] px-px">
              <NewsCard
                img={img}
                imgStyle={"w-full h-[256px] lg:h-[422px]"}
                heading={
                  "शारीरिक व्यायाम कुन समयमा गर्नु राम्राे: बिहान कि दिउँसाे ?"
                }
                headingStyle={"text-md py-[1rem]  lg:heading-big"}
              />
            </div>
            <div className="flex">
              <ul className=" px-px pb-[1rem] lg:px-0 lg:w-[300px] xl:w-[370px]">
                {jankari.map((value, index) => (
                  <li
                    className={`my-[1rem] ${index == 0 && "mt-0"} 
                    ${index == jankari.length - 1 && "mb-0"} 
                    flex h-[113px] justify-between  `}
                    key={index}
                  >
                    <CardRow
                      img={img}
                      imgStyle={"w-[143px] h-full"}
                      heading={value.heading}
                      headingStyle={"text-sm line-clamp-5"}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex w-full">
          <div className="flex  px-px w-full  lg:w-[330px] xl:w-[350px]">
            <div className=" w-full px-px border border-black border-[2px] flex flex-col">
              <h3 className="title-small lg:heading-main">विचित्र संसार</h3>
              <NewsCard
                img={img}
                imgStyle={"w-full h-[165px] "}
                heading={"टाउकाे काटिँदा पनि बँचेकाे कुखुरा"}
                headingStyle={"heading-big text-[1.5rem] pb-[0px]"}
                author={"हिताेपदेशका कथा"}
                authorStyle={"font-[400] pt-[.5rem]"}
              />
              <div className="flex">
                <ul>
                  {bichitraSansar.map((value, index) => (
                    <li className="my-[1rem]" key={index}>
                      <CardRow
                        img={img}
                        imgStyle={"w-[6rem] h-[4rem]"}
                        heading={value.heading}
                        headingStyle={"font-[400]"}
                        title={value.title}
                      />
                      {/* <Link>
                        <h3 className="heading-big text-sm py-[4px]">
                          {value.title}
                        </h3>
                      </Link>
                      <h3 className="font-[400]">{value.heading}</h3> */}
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

export default Jankari;
