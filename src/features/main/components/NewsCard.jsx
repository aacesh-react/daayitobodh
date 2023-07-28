import { Link } from "react-router-dom";
import defaultImg from "../../../assets/defaultImg.jpg";

const NewsCard = ({
  type,
  img,
  imgStyle,
  title,
  titleStyle,
  heading,
  headingStyle,
  content,
  newsStyle,
  author,
  authorStyle,
  titleDivStyle,
  newsId,
  categoryName,
}) => {
  const coverImage = img || defaultImg;
  return (
    <div className={`${type == "row" ? "flex" : "flex flex-col "} w-full `}>
      <div className="shrink-0">
        <Link to={`/news/${categoryName}/${newsId}`}>
          <img
            className={` ${
              type == "row" ? "w-[120px]" : "w-full"
            } object-cover rounded ${imgStyle} bg-bg-brown`}
            src={coverImage}
            alt=""
          />
        </Link>
      </div>
      <div
        className={`${
          type == "row"
            ? "flex pl-px  "
            : "flex flex-col pt-[.5rem] pb-[1rem] lg:pb-[0rem]"
        } w-full `}
      >
        <h3 className={titleStyle}>{title} </h3>

        <Link to={`/news/${categoryName}/${newsId}`}>
          <h3 className={headingStyle}>{heading} </h3>
        </Link>
        <Link>
          <h3 className={newsStyle}>{content} </h3>
        </Link>
        <h3 className={authorStyle}>{author} </h3>
      </div>
    </div>
  );
};

export default NewsCard;
