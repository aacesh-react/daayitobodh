import NewsCard from "./NewsCard";

import img from "../../../assets/img.jpg";

const Golardha = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-xl-p ">
        <div className="flex flex-col">
          <h3 className="heading-main px-[15px]">गाेलार्द्ध</h3>
          <div className="flex">
            {/* left side */}
            <div className="w-[636px] px-[15px]">
              <div className="w-full">
                <NewsCard
                  img={img}
                  imgStyle={"h-[407px] object-cover"}
                  heading={
                    "युक्रेनविरुद्ध रुसकाे विशेष सैनिक अभियान: रुसकाे अर्घेल्याइ कि पश्चिमाहरुले थाेपरेकाे छद्मयुद्ध"
                  }
                  headingStyle={"heading-big"}
                />
              </div>
            </div>
            <div className="flex w-[614px] px-[5px]">
              <div className="flex w-full">
                <div className="flex  flex-wrap">
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "ताइवान मुद्दामा बढ्दाे चीन–अमेरिकी तनावका खतरनाक पहलुहरु"
                      }
                      headingStyle={"text-sm "}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "सुडान गृहयुद्ध: कारण र परिणाम, पर्दापछाडि भइरहेका खतरनाक चलखेल"
                      }
                      headingStyle={"text-sm"}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "टर्कीकाे चुनाव परिणाम: युराेपमा अमेरिकी स्वार्थमा नमीठाे धक्का !"
                      }
                      headingStyle={"text-sm"}
                    />
                  </div>
                  <div className="w-1/2 px-[10px] pb-[1rem]">
                    <NewsCard
                      img={img}
                      imgStyle={"h-[192px] object-cover"}
                      heading={
                        "युक्रेन युद्ध: निजी सेनाकाे समूहसँग संसारकै सबैभन्दा प्रशिक्षित सेनाकाे पराजयकाे दुखद कथा"
                      }
                      headingStyle={"text-sm"}
                    />
                  </div>
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
