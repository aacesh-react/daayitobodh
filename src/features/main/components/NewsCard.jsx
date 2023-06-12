import { Link } from "react-router-dom";

const NewsCard = ({
  img,
  heading,
  headingStyle,
  imgStyle,
  author,
  authorStyle,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Link>
          <img
            className={` w-full object-cover ${imgStyle} `}
            src={img}
            alt="img"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>
          <h3 className={headingStyle}>{heading} </h3>
        </Link>
        <h3 className={` ${authorStyle} `}>{author}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
