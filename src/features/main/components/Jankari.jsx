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
    <div className="flex flex-col items-center pt-[1rem]">
      <div className="flex w-xl-p ">
        {/* left */}
        <div className="flex flex-col">
          <h3 className="heading-main px-px">जानकारी</h3>
          <div className="flex ">
            <div className="w-[558px] px-px">
              <NewsCard
                img={img}
                imgStyle={"w-full h-[422px]"}
                heading={
                  "शारीरिक व्यायाम कुन समयमा गर्नु राम्राे: बिहान कि दिउँसाे ?"
                }
                headingStyle={"heading-big"}
              />
            </div>
            <div className="flex">
              <ul className="w-[353px]">
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
                      headingStyle={"text-sm"}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex">
          <div className="flex px-px w-[339px]">
            <div className=" w-full px-px border border-black border-[2px] flex flex-col">
              <h3 className="heading-main">विचित्र संसार</h3>
              <NewsCard
                img={img}
                imgStyle={"w-full h-[165px] "}
                heading={"टाउकाे काटिँदा पनि बँचेकाे कुखुरा"}
                headingStyle={"heading-big text-[1.5rem] pb-[0px]"}
                author={"हिताेपदेशका कथा"}
                authorStyle={"font-[400]"}
              />
              <div className="flex">
                <ul>
                  {bichitraSansar.map((value, index) => (
                    <li className="my-[1rem]" key={index}>
                      <CardRow
                        img={img}
                        imgStyle={"w-[6rem]"}
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
