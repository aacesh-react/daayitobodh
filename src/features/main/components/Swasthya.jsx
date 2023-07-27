import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { getCategorySubcategoryNews } from "../../../utilities/news";

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

const Swasthya = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsArray = getCategorySubcategoryNews(
    homepageNews,
    "स्वास्थ्य–जीवनशैली",
    1
  );
  const leftNews = newsArray[0] ;
  const rightNews = newsArray.slice(1, 5) ;

  return (
    <div className="flex justify-center bg-yellow-bg w-full">
      <div className="flex flex-col w-full lg:w-lg-p xl:w-xl-p lg:py-[2rem]">
        <h3 className="heading-main py-[1rem] px-[15px]">
          <Link className="inline-block " to={"/news/स्वास्थ्य–जीवनशैली"}>
            स्वास्थ्य–जीवनशैली
          </Link>
        </h3>

        <div className="flex w-ful flex-col lg:flex-row">
          {/* left         */}
          <div className="flex w-full px-px lg:w-[577.5px] xl:w-[755px] relative ">
            {leftNews?.newsArray[0] && (
              <>
                <div className="flex w-full">
                  <img
                    className=" h-full w-full object-cover radius-2 rounded  brightness-75"
                    src={leftNews.newsArray[0].coverImage}
                    alt="img"
                  />
                </div>
                <div className="absolute  px-[2rem] left-0 bottom-[8%] lg:left-[10%]">
                  <h3 className=" heading-main font-[poppins] py-[1rem]">
                    {leftNews.subcategoryName}
                  </h3>
                  <h3 className=" text-lg xl:heading-big text-white xl:w-[469px] lg:text-[1.875rem] font-[poppins]">
                    <Link
                      to={`news/${leftNews.newsArray[0].categoryName}/${leftNews.newsArray[0].newsId}`}
                    >
                      {leftNews.newsArray[0].heading}
                    </Link>
                  </h3>
                </div>
              </>
            )}
          </div>
          {/* right         */}
          <div className="flex w-full py-[1rem] lg:py-0 lg:w-[412.5px] xl:w-[525px]">
            <ul>
              {rightNews.map((value, index) => (
                <li
                  key={index}
                  className={`h-[110px] lg:h-[130px] px-[15px]   ${
                    index > 0 && "mt-[1rem]"
                  } ${index == 2 && "mb-0"} `}
                >
                  <CardRow
                    img={value.newsArray[0].coverImage}
                    imgStyle={"w-[175px] h-full  object-cover"}
                    title={value.subcategoryName}
                    titleStyle={
                      "title-small text-sm text-heading-main xl:text-md"
                    }
                    heading={value.newsArray[0].heading}
                    headingStyle={" text-sm font-[300] xl:text-md line-clamp-3"}
                    newsId={value.newsArray[0].newsId}
                    categoryName={value.newsArray[0].categoryName}
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
