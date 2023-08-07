import { useSelector } from "react-redux";

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
            w-full p-px h-[244px]  my-[1rem] `}
              key={index}
              id={data.id}
            >
              <div className={`   w-full h-full `}>
                <img
                  className="h-full w-full object-cover"
                  src={getAdvertisement(data.id).image}
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
