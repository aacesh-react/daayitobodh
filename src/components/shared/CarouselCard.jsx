import { Link } from "react-router-dom";

const CarouselCard = ({ news }) => {
  return (
    <div className="flex w-full justify-center h-[60px]">
      <div className="flex w-[60px] shrink-0">
        <Link to={`/news/${news.categoryName}/${news.newsId}`}>
          <img
            className=" w-full object-cover h-full"
            src={news.coverImage}
            alt=""
          />
        </Link>
      </div>
      <div className="w-full ">
        <p className="pl-[1rem] overflow line-clamp-3 text-justify leading-[1.3]">
          <Link to={`/news/${news.categoryName}/${news.newsId}`}>
            {news.heading}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
