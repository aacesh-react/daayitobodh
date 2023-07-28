import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultImg.jpg";

const CarouselCard = ({ news }) => {
  const coverImage = news.coverImage || defaultImg;
  return (
    <div className="flex  w-full justify-center h-[65px]">
      <div className="flex w-[65px] shrink-0">
        <Link to={`/news/${news.categoryName}/${news.newsId}`}>
          <img
            className=" w-full object-cover h-full rounded"
            src={coverImage}
            alt=""
          />
        </Link>
      </div>
      <div className="w-full pl-px lg:px-px ">
        <p className="px-[1rem] border border-bg-brown rounded h-full  overflow line-clamp-3 text-justify leading-[1.3]">
          <Link to={`/news/${news.categoryName}/${news.newsId}`}>
            {news.heading}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
