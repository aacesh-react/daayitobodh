import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";

const Golardha = () => {
  const data = [
    "ताइवान मुद्दामा बढ्दाे चीन–अमेरिकी तनावका खतरनाक पहलुहरु",
    "सुडान गृहयुद्ध: कारण र परिणाम, पर्दापछाडि भइरहेका खतरनाक चलखेल",
    "टर्कीकाे चुनाव परिणाम: युराेपमा अमेरिकी स्वार्थमा नमीठाे धक्का !",
    "युक्रेन युद्ध: निजी सेनाकाे समूहसँग संसारकै सबैभन्दा प्रशिक्षित सेनाकाे पराजयकाे दुखद कथा",
  ];
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex w-full lg:w-lg-p xl:w-xl-p ">
        <div className="flex w-full flex-col">
          <h3 className=" title-small lg:heading-main px-[15px]">गाेलार्द्ध</h3>
          <div className=" w-full flex flex-col lg:flex-row">
            {/* left side */}
            <div className="w-full lg:w-[495px] xl:w-[666px] px-[15px]">
              <div className="w-full">
                <NewsCard
                  img={img}
                  imgStyle={"w-full h-[256px] xl:h-[407px] object-cover"}
                  heading={
                    "युक्रेनविरुद्ध रुसकाे विशेष सैनिक अभियान: रुसकाे अर्घेल्याइ कि पश्चिमाहरुले थाेपरेकाे छद्मयुद्ध"
                  }
                  headingStyle={" text-md py-[1rem] xl:heading-big"}
                />
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col lg:flex-row  lg:w-[495px] xl:w-[614px] px-[5px]">
              <div className="flex w-full">
                <div className="flex">
                  <ul className="flex flex-wrap">
                    {data.map((news, index) => (
                      <li className="w-1/2 px-[10px] pb-[1rem]" key={index}>
                        <NewsCard
                          img={img}
                          imgStyle={" h-[120px] xl:h-[192px] object-cover"}
                          heading={news}
                          headingStyle={"text-sm  line-clamp-3"}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Golardha;
