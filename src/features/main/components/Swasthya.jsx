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
    <div className="flex justify-center bg-yellow-bg">
      <div className="flex flex-col w-xl-p py-[2rem]">
        <h3 className="heading-main px-[15px]">स्वास्थ्य–जीवनशैली</h3>
        <div className="flex">
          {/* left         */}
          <div className="flex px-[15px] w-[755px] relative">
            <div className="flex">
              <img
                className="h-[471px] w-full object-cover brightness-75"
                src={img}
                alt="img"
              />
            </div>
            <div className="absolute bottom-[5%] left-[10%]">
              <h3 className="heading-big text-white w-[469px] text-[1.875rem] font-[poppins]">
                बुढ्यौलीमा 'भुल्ने बिरामी'बाट बच्ने हो ? भिटामीन डी उपयोगी हुन
                सक्छ !
              </h3>
            </div>
          </div>
          {/* right         */}
          <div className="flex  w-[495px]">
            <ul>
              {data.map((value, index) => (
                <li
                  key={index}
                  className={`h-[141px] px-[15px] my-[1.5rem] ${index == 0 && "mt-0"} ${
                    index == 2 && "mb-0"
                  } `}
                >
                  <CardRow
                    img={img}
                    imgStyle={"w-[175px] h-[141px] object-cover"}
                    title={value.title}
                    titleStyle={"heading-main text-[18px]"}
                    heading={value.heading}
                    headingStyle={"heading-big text-[1.5rem]"}
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
