import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleAdd = ({ data }) => {
  const { advertisements, isLoading } = useSelector(
    (state) => state.advertisement
  );
  if (advertisements.length == 0 || isLoading) {
    return <div></div>;
  }
  const advertisement = advertisements.find(
    (add) => add.advertisementId == data.id
  );

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div
      className={`${
        advertisement.image ? "block" : "hidden"
      } w-full lg:w-lg xl:w-xl h-[32px] lg:h-[78px] xl:h-[100px] `}
    >
      <Link target={"_blank"} to={advertisement.advertisementLink}>
        <img
          className="h-full w-full object-cover"
          src={advertisement.image}
          alt="advertisement"
        />
      </Link>
    </div>
  );
};

export default SingleAdd;
