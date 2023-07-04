import NewsCard from "./NewsCard";
import img from "../../../assets/img.jpg";
import { Link } from "react-router-dom";

const Sahitya = () => {
  const data = [
    {
      type: `कथा`,
      name: `क्लियापाट्रा`,
      writer: `कन्हैया नासननी`,
    },
    {
      type: `कविता`,
      name: `चुनावमा`,
      writer: `विनाेदविक्रम केसी`,
    },
    {
      type: `समालाेचना`,
      name: `पारिजातका कथाहरुमा महिला समानताका कुराहरु`,
      writer: `शारदारमण नेपाल`,
    },
    {
      type: `अनुदित`,
      name: `जामुनकाे रुख`,
      writer: `कृष्णचन्दर`,
    },
  ];

  const baalSansaar = [
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
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p">
        {/* left */}
        <div className="flex flex-col lg:w-[660px] xl:w-[941px]">
          <h3 className="title-small lg:heading-main px-px">साहित्य</h3>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex lg:w-[330px]  xl:w-[588px] ">
              <div className="flex  w-full px-px ">
                <NewsCard
                  img={img}
                  imgStyle={"w-full  h-[256px] lg:h-[422px] object-cover"}
                  heading={"एउटा गधा जजकाे मूल्याङ्कनमा सुन्दरी प्रतियाेगिता"}
                  headingStyle={" text-md lg:heading-big text-30"}
                />
              </div>
            </div>
            <div className="flex w-full lg:w-[330px] xl:w-[353px]  p-px lg:p-0">
              <ul className="w-full ">
                {data.map((value, index) => (
                  <li
                    className={`my-[1rem] ${index == 0 && "mt-0"} 
                    ${index == data.length - 1 && "mb-0"} 
                    flex h-[113px] justify-between`}
                    key={index}
                  >
                    <div className="flex flex-col w-full pr-[10px]">
                      <h3 className="heading-main text-sm p-0 border-b  border-b-red-primary border-b-[2px] line-clamp-2">
                        {value.type}
                      </h3>
                      <h3 className=" text-end text-sm pt-[.5rem] line-clamp-2">
                        {value.name}
                      </h3>
                      <h3 className="text-end font-[400]">{value.writer}</h3>
                    </div>
                    <div className="h-full shrink-0">
                      <img
                        className="h-full w-[143px] object-cover"
                        src={img}
                        alt="img"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex w-full lg:w-[330px] xl:w-[339px]">
          <div className="flex px-px w-full ">
            <div className=" w-full px-px border border-black border-[2px] flex flex-col">
              <h3 className=" title-small lg:heading-main">बालसंसार</h3>
              <NewsCard
                img={img}
                imgStyle={"w-full h-[165px] "}
                heading={"बढी बाेल्ने बानीेले ज्यान गुमायाे !"}
                headingStyle={"heading-big text-[1.5rem] pb-[0px]"}
                author={"हिताेपदेशका कथा"}
                authorStyle={"font-[400]"}
              />
              <div className="flex">
                <ul>
                  {baalSansaar.map((value, index) => (
                    <li className="my-[1rem]" key={index}>
                      <Link>
                        <h3 className="heading-big text-sm py-[4px]">
                          {value.title}
                        </h3>
                      </Link>
                      <h3 className="font-[400]">{value.heading}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:block lg:w-lg mt-[2rem] xl:w-xl border border-[2px]" />
    </div>
  );
};

export default Sahitya;
