import { useEffect } from "react";
import { useState } from "react";
import advertisementService from "../../app/features/advertisement/advertisementService";

const SingleAdd = ({ data }) => {
  const [isLoading, setIsloading] = useState(true);
  const [advertisement, setAdvertisement] = useState(undefined);

  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await advertisementService.getAllAdvertisements();
        console.log("result:", result.data);
        const advertisement = result.data.find(
          (add) => add.advertisementId == data.id
        );
        setAdvertisement(advertisement);
        setIsloading(false);
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, []);

  if (isLoading) {
    return <div></div>;
  }
  return (
    // <div className="flex justify-center py-[1.5rem] px-px w-full " id={data.id}>
    <div className="w-full lg:w-lg xl:w-xl h-full bg-bg-brown">
      {advertisement ? (
        <div className="w-full">
          <img
            className="h-full w-full object-cover"
            src={advertisement.image}
            alt=""
          />
        </div>
      ) : (
        <div className="w-full "></div>
      )}
    </div>

    // </div>
  );
};

export default SingleAdd;
