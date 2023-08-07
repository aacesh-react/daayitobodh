import NewsCard from "../../main/components/NewsCard";
import { useSelector } from "react-redux";
import { getCategorySubcategoryNews } from "../../../utilities/news";

const SubCategory = ({ categoryName }) => {
  const { homepageNews } = useSelector((state) => state.news);
  const newsData = getCategorySubcategoryNews(homepageNews, categoryName, 1);

  return newsData ? (
    <div className="flex w-full bg-bg-brown w-full justify-center">
      <div className="flex flex-col w-full lg:w-lg-p xl:w-xl-p items-center py-[1rem]">
        <h3 className="text-brown-heading text-md lg:text-lg py-[1rem]">
          {categoryName}
        </h3>
        <div className="flex w-full ">
          <ul className="flex flex-col lg:flex-row  w-full  pb-[1rem]">
            {newsData.map((item, index) => (
              <li className={`flex px-px w-full`} key={index}>
                <NewsCard
                  img={item.newsArray[0].coverImage}
                  imgStyle={"aspect-[3/2]"}
                  title={item.subcategoryName}
                  titleStyle={"text-sm text-heading-main py-[.5rem]"}
                  heading={item.newsArray[0].heading}
                  headingStyle={"pb-[1rem] text-[1.125rem] line-clamp-3"}
                  newsId={item.newsArray[0].newsId}
                  categoryName={item.newsArray[0].categoryName}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SubCategory;
