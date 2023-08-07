import { useSelector } from "react-redux";

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
      <div className="w-full">
        <img
          className="h-full w-full object-cover"
          src={advertisement.image}
          alt=""
        />
      </div>
    </div>

    // </div>
  );
};

export default SingleAdd;
