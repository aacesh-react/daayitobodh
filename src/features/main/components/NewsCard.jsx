import { Link } from "react-router-dom";

const NewsCard = ({
  type,
  img,
  imgStyle,
  title,
  titleStyle,
  heading,
  headingStyle,
  news,
  newsStyle,
  author,
  authorStyle,
  titleDivStyle,
}) => {
  return (
    <div className={`${type == "row" ? "flex" : "flex flex-col "} w-full `}>
      <div className="shrink-0">
        <Link>
          <img
            className={` ${
              type == "row" ? "w-[120px]" : "w-full"
            } object-cover rounded ${imgStyle}`}
            src={img}
            alt="img"
          />
        </Link>
      </div>
      <div
        className={`${
          type == "row"
            ? "flex pl-px  "
            : "flex flex-col pt-[.5rem] pb-[1rem] lg:pb-[1.5rem]"
        } w-full `}
      >
        <Link>
          <h3 className={titleStyle}>{title} </h3>
        </Link>
        <Link className="">
          <h3 className={headingStyle}>{heading} </h3>
        </Link>
        <Link>
          <h3 className={newsStyle}>{news} </h3>
        </Link>
        <Link>
          <h3 className={authorStyle}>{author} </h3>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
