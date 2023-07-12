import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";

const Swasthya = () => {
  const data = [
    {
      title: `स्वास्थ्य`,
      heading: `औषधीसँग यी सप्लिमेन्टहरु खान खतरनाक हुन सक्छ !`,
    },
    {
      title: `जीवनशैली`,
      heading: `कोठामा राख्नाेस् हावा शुद्ध पार्ने यी पाँच विरुवाहरु`,
    },
    {
      title: `जीवनशैली`,
      heading: `माेटाेपनले सतायाे ? ताैल घटाउने पाँच उपायहरु`,
    },
  ];
  return (
    <div className="flex justify-center bg-yellow-bg w-full">
      <div className="flex flex-col w-full lg:w-lg-p xl:w-xl-p lg:py-[2rem]">
        <Link to={"/news/swasthya"}>
          <h3 className="title-small lg:heading-main px-[15px]">
            स्वास्थ्य–जीवनशैली
          </h3>
        </Link>

        <div className="flex w-ful flex-col lg:flex-row">
          {/* left         */}
          <div className="flex w-full px-px lg:w-[577.5px] xl:w-[755px] relative">
            <div className="flex bg-blue-200 w-full">
              <img
                className=" h-[471px] w-full object-cover brightness-75"
                src={img}
                alt="img"
              />
            </div>
            <div className="absolute  px-[2rem] left-0 bottom-[8%] lg:left-[10%]">
              <h3 className=" text-lg xl:heading-big text-white xl:w-[469px] lg:text-[1.875rem] font-[poppins]">
                बुढ्यौलीमा 'भुल्ने बिरामी'बाट बच्ने हो ? भिटामीन डी उपयोगी हुन
                सक्छ !
              </h3>
            </div>
          </div>
          {/* right         */}
          <div className="flex w-full py-[1rem] lg:py-0 lg:w-[412.5px] xl:w-[525px]">
            <ul>
              {data.map((value, index) => (
                <li
                  key={index}
                  className={`h-[141px] px-[15px] my-[1.5rem] ${
                    index == 0 && "mt-0"
                  } ${index == 2 && "mb-0"} `}
                >
                  <CardRow
                    img={img}
                    imgStyle={"w-[175px] h-[116px] lg:h-[141px]  object-cover"}
                    title={value.title}
                    titleStyle={"title-small text-sm xl:text-md"}
                    heading={value.heading}
                    headingStyle={" text-sm font-[300] xl:text-md line-clamp-3"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swasthya;
