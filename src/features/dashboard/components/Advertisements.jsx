import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import advertisementService from "../../../app/features/advertisement/advertisementService";
import DeleteModal from "../../../components/shared/DeleteModal";
import Modal from "../../../components/shared/Modal";
import { getDate } from "../../../utilities/date";
import AddAdvertisement from "./AddAdvertisement";

const Advertisements = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [advertisements, setAdvertisements] = useState([]);
  const [selectedAdvertisementSlot, setSelectedAdvertisementSlot] = useState(
    {}
  );
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(undefined);

  const closeModal = () => {
    setShowModal(false);
    setModalType(undefined);
  };

  const plusButtonHandler = (advertisement) => {
    console.log("plus button clicked:", advertisement);
    setSelectedAdvertisementSlot(advertisement);
    setShowModal(true);
    setModalType("advertisement");
  };

  const crossButtonHandler = (advertisement) => {
    console.log("cross button clicked:", advertisement);
    setSelectedAdvertisementSlot(advertisement);
    setShowModal(true);
    setModalType("delete");
  };

  const deleteButtonHandler = async () => {
    try {
      const data = {
        advertisementId: selectedAdvertisementSlot.advertisementId,
      };
      console.log("data:", data);
      const result = await advertisementService.deleteAdvertisement(data);
      toast.success("Advertisement deleted");
    } catch (error) {
      console.log("err:", error);
      toast.error("Error occured!");
    } finally {
      closeModal();
    }
  };
  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await advertisementService.getAllAdvertisements();
        console.log("result:", result);
        setAdvertisements(result.data);
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, [showModal]);
  return (
    <div className="flex w-full bg-white p-px ">
      <div className="flex flex-col w-full py-[15px] border leading-[3rem] ">
        <div className="border flex justify-between items-center px-px">
          <h3 className="text-[1.5rem] font-[500] ">Advertisements</h3>
          <button
            className={` h-[25px] p-[1rem] bg-heading-main flex items-center justify-center  rounded text-white`}
            // onClick={addButtonHandler}
          >
            Add
          </button>
        </div>

        {/* for advertisements */}
        <div className="px-px py-[1rem]">
          <table className="w-full border-separate border-spacing-y-[1rem] ">
            <tbody className="w-full font-[700]">
              <tr className="">
                <td className={`border-y border-l pl-[1rem] rounded`}>
                  Advertisement slot id
                </td>
                <td className="border-y pr-[1rem] ">Image link</td>
                <td className="border-y pr-[1rem]">Added on</td>
                <td className="border-y pr-[1rem]">Expires on</td>
                <td className="border-y border-r pr-[1rem] rounded">Action</td>
              </tr>
              {advertisements.map((advertisement, index) => (
                <tr className="" key={index}>
                  <td className={`border-y border-l pl-[1rem] rounded`}>
                    {advertisement.advertisementId}
                  </td>
                  <td className="border-y pr-[1rem] ">
                    <Link target="_blank" to={advertisement.image}>
                      {advertisement.image}
                    </Link>
                  </td>
                  <td className="border-y pr-[1rem]">
                    {advertisement.addedOn && getDate(advertisement.addedOn)}
                  </td>
                  <td className="border-y pr-[1rem]">
                    {advertisement.expiresOn &&
                      getDate(advertisement.expiresOn)}
                  </td>
                  <td className="border-y border-r pr-[1rem] rounded">
                    <div className="flex gap-[1rem]">
                      <button
                        className="h-[25px] w-[25px] bg-green-500 flex items-center justify-center  rounded text-white"
                        onClick={(e) => plusButtonHandler(advertisement)}
                      >
                        +
                      </button>
                      <button
                        className="h-[25px] w-[25px] bg-red-500 flex items-center justify-center  rounded text-white"
                        onClick={(e) => crossButtonHandler(advertisement)}
                      >
                        &times;
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal showModal={showModal}>
        {modalType == "advertisement" && (
          <AddAdvertisement
            closeModal={closeModal}
            advertisementId={selectedAdvertisementSlot.advertisementId}
          />
        )}
        {modalType == "delete" && (
          <DeleteModal
            closeModal={closeModal}
            okButtonHandler={deleteButtonHandler}
          />
        )}
      </Modal>
    </div>
  );
};

export default Advertisements;
