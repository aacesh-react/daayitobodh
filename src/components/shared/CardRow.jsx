import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultImg.jpg"

const CardRow = ({
  img,
  imgStyle,
  title,
  titleStyle,
  headingStyle,
  heading,
  author,
  authorStyle,
  newsId,
  categoryName,
}) => {
  const coverImage = img || defaultImg;

  return (
    <div className="flex w-full h-full">
      <div className="flex shrink-0 h-full ">
        <Link to={`/news/${categoryName}/${newsId}`}>
          <img className={`${imgStyle} rounded bg-bg-brown`} src={coverImage} alt="" />
        </Link>
      </div>
      <div className="flex flex-col pl-[10px] rounded ">
        <h3 className={`${titleStyle} py-0  `}>{title}</h3>
        <Link to={`/news/${categoryName}/${newsId}`}>
          <h3 className={`${headingStyle}`}>{heading}</h3>
        </Link>
        <h3 className={`${authorStyle}`}>{author}</h3>
      </div>
    </div>
  );
};

export default CardRow;
