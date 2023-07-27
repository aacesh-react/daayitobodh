import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import { getCategoryNews } from "../../../utilities/news";

const gyanRight = [
  {
    heading:
      "जर्मनीले युक्रेनलाई दिने भनिएकाे लियाेपर्ड –२ ट्याङ्क के हाे? किन खतरनाक मानिन्छ याे ट्याङ्क ?",
  },
  {
    heading:
      "माेबाइल फाेन चलाउँदा अपनाउनाेस् यी सावधानीहरु ! अन्यथा ह्याकरले लुट्ला नि !",
  },
  {
    heading:
      "तपाईकाे कम्प्युटर ल्यापटप सुस्त चल्छ ? मिलाउनाेस् यी सेटिङ्गहरु ! स्पीडमा चल्न थाल्छ !",
  },
  {
    heading:
      "माेबाइल फाेन चलाउँदा अपनाउनाेस् यी सावधानीहरु ! अन्यथा ह्याकरले लुट्ला नि !",
  },
  {
    heading:
      "तपाईकाे कम्प्युटर ल्यापटप सुस्त चल्छ ? मिलाउनाेस् यी सेटिङ्गहरु ! स्पीडमा चल्न थाल्छ !",
  },
  // {
  //   heading:
  //     "माेबाइल फाेन चलाउँदा अपनाउनाेस् यी सावधानीहरु ! अन्यथा ह्याकरले लुट्ला नि !",
  // },
];

import NewsCard from "./NewsCard";
const GyanBigyan = () => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsArray = getCategoryNews(homepageNews, "ज्ञान–विज्ञान", 10);
  const leftNewsArray = newsArray.slice(0, 4);
  const rightNewsArray = newsArray.slice(5, 10);
  return (
    <div className="flex justify-center">
      <div className=" w-full  flex flex-col lg:w-lg-p xl:w-xl-p">
        <h1 className="heading-main py-[1rem] px-[15px]">
          <Link to={"news/ज्ञान–विज्ञान"}>ज्ञान–विज्ञान</Link>
        </h1>
        <div className="flex flex-col lg:flex-row ">
          {/*left  */}
          <div className="flex w-full pb-[1rem]  lg:w-[240px] xl:w-[278px]">
            <div className="flex flex-col ">
              <ul>
                {leftNewsArray.map((news, index) =>
                  index == 0 ? (
                    <div className="w-full pb-[12px] px-[15px]" key={index}>
                      <NewsCard
                        img={news.coverImage}
                        imgStyle={" h-[256px] lg:h-[146px] object-cover"}
                        heading={news.heading}
                        headingStyle={"text-md ] line-clamp-3 "}
                        newsId={news.newsId}
                        categoryName={news.categoryName}
                      />
                    </div>
                  ) : (
                    <li className="px-px" key={index}>
                      <Link to={`/news/${news.categoryName}/${news.newsId}`}>
                        <h3 className="text-sm line-clamp-3 font-[300] py-[10px]">
                          {news.heading}
                        </h3>
                      </Link>
                    </li>
                  )
                )}
              </ul>
              {/* <div className="w-full px-[15px]">
                <NewsCard
                  img={img}
                  imgStyle={" h-[256px] lg:h-[146px] object-cover"}
                  heading={
                    "ह्वावेको सहयोगमा काठमाडौंमा लाइभ भयो नेपाल टेलिकमको फाइभजी, अन्त कहिले?"
                  }
                  headingStyle={"text-md "}
                />
              </div>
              <div className="flex flex-col w-full px-[15px]">
                <Link>
                  <h3 className="text-sm font-[300] py-[10px]">
                    किन फुल्५ कपाल ? कपाल फुल्न नदिन याे उपाय गर्नाेस्
                  </h3>
                </Link>
                <Link>
                  <h3 className="text-sm font-[300]  py-[10px]">
                    सामसङको ग्यालेक्सी एस–२३ बजारमा
                  </h3>
                </Link>
                <Link>
                  <h3 className="text-sm font-[300]  py-[10px]">
                    टिकटककै बाटाे पछ्याउँदै फेसबुक र इन्स्टाग्राम पनि ! ब्लुक
                    टिककाे अब पैसा लाग्ने
                  </h3>
                </Link>
              </div> */}
            </div>
          </div>

          {/*middle  */}
          <div className="flex lg:w-[400px] xl:w-[536px] px-[15px]">
            <div className="flex">
              {newsArray[4] && (
                <NewsCard
                  img={newsArray[4].coverImage}
                  imgStyle={"h-[256px] lg:h-[364px] object-cover"}
                  heading={newsArray[4].heading}
                  headingStyle={
                    "text-md line-clamp-3 lg:leading-[1.4] lg:heading-big"
                  }
                  newsId={newsArray[4].newsId}
                  categoryName={newsArray[4].categoryName}
                />
              )}
            </div>
          </div>

          {/*right  */}
          <div className="flex w-full lg:w-[350px] xl:w-[466px]  ">
            <div className="flex flex-col">
              <ul>
                {rightNewsArray.map((news, index) => (
                  <li
                    className="flex  px-px h-[80px]  xl:h-[100px] w-full mb-[1rem]"
                    key={index}
                  >
                    <NewsCard
                      type={"row"}
                      img={news.coverImage}
                      imgStyle={
                        "h-full w-[80px] lg:w-[100px] xl:w-[150px] object-cover"
                      }
                      heading={news.heading}
                      headingStyle={
                        "text-sm w-full line-clamp-3 font-[300]  lg:leading-[1.4] "
                      }
                      newsId={news.newsId}
                      categoryName={news.categoryName}
                    />
                  </li>
                ))}
              </ul>
              {/* <div className="flex px-[15px] h-[72px] xl:h-[100px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"h-full w-[72px] xl:w-[64px] object-cover"}
                  heading={
                    "जर्मनीले युक्रेनलाई दिने भनिएकाे लियाेपर्ड –२ ट्याङ्क के हाे? किन खतरनाक मानिन्छ याे ट्याङ्क ?"
                  }
                  headingStyle={"text-sm line-clamp-2 "}
                />
              </div>
              <div className="flex px-[15px] h-[72px] xl:h-[64px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"h-full w-[72px] xl:w-[64px] object-cover"}
                  heading={
                    "माेबाइल फाेन चलाउँदा अपनाउनाेस् यी सावधानीहरु ! अन्यथा ह्याकरले लुट्ला नि !"
                  }
                  headingStyle={"text-sm line-clamp-2 "}
                />
              </div>
              <div className="flex px-[15px] h-[72px] xl:h-[64px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"h-full w-[72px] xl:w-[64px] object-cover"}
                  heading={
                    "तपाईकाे कम्प्युटर ल्यापटप सुस्त चल्छ ? मिलाउनाेस् यी सेटिङ्गहरु ! स्पीडमा चल्न थाल्छ !"
                  }
                  headingStyle={"text-sm line-clamp-2 "}
                />
              </div>
              <div className="flex px-[15px] h-[72px] xl:h-[64px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"h-full w-[72px] xl:w-[64px] object-cover"}
                  heading={
                    "माेबाइल किन्दै हुनुहुन्छ ? कस्ताे माेबाइल किन्ने ? ख्याल गर्नाेस् यी कुराहरु !"
                  }
                  headingStyle={"text-sm line-clamp-3 "}
                />
              </div>
              <div className="flex px-[15px] h-[72px] xl:h-[64px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"h-full w-[72px] xl:w-[64px] object-cover"}
                  heading={
                    "माेबाइल किन्दै हुनुहुन्छ ? कस्ताे माेबाइल किन्ने ? ख्याल गर्नाेस् यी कुराहरु !"
                  }
                  headingStyle={"text-sm line-clamp-3 "}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GyanBigyan;
