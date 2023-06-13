import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";

const Kala = () => {
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
    {
      type: `बहस`,
      title: `विवाहपछि हिराे चल्ने हिराेनी नचल्ने ! याे विभेदले संकेत गरेका पक्षहरु`,
      writer: `कमल सुवेदी`,
    },
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
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-xl-p py-[1rem] ">
        {/* left */}
        <div className="flex flex-col">
          <h3 className="heading-main px-px">कला–मनाेरञ्जन</h3>
          <div className="flex">
            <div className="flex w-[322px]">
              <ul className="pl-px pr-[30px]">
                {kalaData.map((value, index) => (
                  <li
                    className={`${
                      index != kalaData.length - 1 && "border-b border-b-[2px]"
                    } `}
                    key={index}
                  >
                    <h3 className="heading-main text-sm">{value.type}</h3>
                    <Link>
                      <span className="text-sm inline-block">
                        {value.title}
                      </span>
                    </Link>
                    <span className="font-[400] text-[0.875rem] my-[14px] inline-block">
                      {value.writer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[579px]">
              <div className="w-full">
                <NewsCard
                  img={img}
                  heading={"गीतसङ्गीत"}
                  headingStyle={"heading-main text-sm"}
                  author={
                    "किन याैनका चाैघेरा वरिपरि घुम्छ प्रकाश सपुतका गीतहरु ?"
                  }
                  authorStyle={"heading-big"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* right */}

        <div className="flex">
          <div className="flex w-[349px] px-px ">
            <div className="flex flex-col border border-[2px] border-black">
              <h3 className="heading-main px-px">प्रेरक</h3>
              <div className="flex">
                <ul className="px-px">
                  {prerak.map((value, index) => (
                    <li className="h-[98px] my-[1rem] border" key={index}>
                      <CardRow
                        img={img}
                        imgStyle={"w-[139px] h-[98px]"}
                        heading={value.heading}
                        headingStyle={"text-sm"}
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
      <hr   className="w-xl border-[2px]"/>
    </div>
  );
};

export default Kala;
