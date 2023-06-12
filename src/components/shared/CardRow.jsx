import { Link } from "react-router-dom";

const CardRow = ({
  img,
  imgStyle,
  title,
  titleStyle,
  headingStyle,
  heading,
}) => {
  return (
    <div className="flex w-full">
      <div className="flex shrink-0 ">
        <Link>
          <img className={`${imgStyle}`} src={img} alt="img" />
        </Link>
      </div>
      <div className="flex flex-col pl-[10px] justify-center">
        <h3 className={`${titleStyle} py-0 `}>{title}</h3>
        <Link
        
        >
          <h3 className={`${headingStyle}`}>{heading}</h3>
        </Link>
      </div>
    </div>
  );
};

export default CardRow;
