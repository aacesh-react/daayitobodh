import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MultiAdd = ({ addData }) => {
  const { advertisements, isLoading } = useSelector(
    (state) => state.advertisement
  );
  if (advertisements.length == 0 || isLoading) {
    return <div></div>;
  }
  const getAdvertisement = (id) => {
    const advertisement = advertisements.find(
      (add) => add.advertisementId == id
    );
    return advertisement;
  };

  return (
    <div className="flex w-full bg-white justify-center">
      <div className="flex w-full lg:w-lg-p xl:w-xl-p  ">
        <ul className="flex flex-col lg:flex-row   w-full">
          {addData.map((data, index) => (
            <li
              className={`
            ${getAdvertisement(data.id)?.image ? "block" : "hidden"}
            w-full p-px h-[244px] lg:w-1/3 my-[1rem] `}
              key={index}
              id={data.id}
            >
              <div className={`   w-full h-full `}>
                <Link target={"_blank"} to={getAdvertisement(data.id).advertisementLink}>
                  <img
                    className="h-full w-full object-cover"
                    src={getAdvertisement(data.id).image}
                    alt="advertisement"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
