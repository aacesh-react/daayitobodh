import { useState } from "react";
import { useEffect } from "react";
import advertisementService from "../../app/features/advertisement/advertisementService";

export const MultiAdd = ({ addData }) => {
  const [isLoading, setIsloading] = useState(true);
  const [advertisements, setAdvertisements] = useState([]);

  const getAdvertisement = (id) => {
    const advertisement = advertisements.find(
      (add) => add.advertisementId == id
    );
    return advertisement;
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await advertisementService.getAllAdvertisements();
        setAdvertisements(result.data);
        setIsloading(false);
      } catch (error) {
        // console.log("err:", error);
      }
    })();
  }, []);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="flex w-full bg-white justify-center">
      <div className="flex w-full lg:w-lg-p xl:w-xl-p  my-[1rem] ">
        <ul className="flex flex-col lg:flex-row   w-full">
          {addData.map((data, index) => (
            <li className="w-full p-px " key={index} id={data.id}>
              {getAdvertisement(data.id) ? (
                <div className="bg-bg-brown w-full h-[244px] ">
                  <img
                    className="h-full w-full object-cover"
                    src={getAdvertisement(data.id).image}
                    alt=""
                  />
                </div>
              ) : (
                <div className="bg-bg-brown w-full h-[244px] "></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
