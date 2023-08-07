import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newsService from "../../../app/features/news/newsService";

const Trending = () => {
  const [trendingNews, setTrendingNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const trendingResult = await newsService.getBreakingNews();
        setTrendingNews(trendingResult.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, []);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="flex w-full px-px flex-col">
      <h3 className="heading-main pt-[12px]">ब्रेकिंग</h3>
      <ul>
        {trendingNews.map((news, index) => (
          <li
            className="bg-bg-brown p-px my-[1rem] rounded font-[600] "
            key={index}
          >
            <Link
              className="line-clamp-3"
              to={`/news/${news.categoryName}/${news.newsId}`}
            >
              {news.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
