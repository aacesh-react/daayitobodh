import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import advertisementService from "../../../app/features/advertisement/advertisementService";
import FormInputField from "../../../components/shared/FormInputField";

const AddAdvertisement = ({ closeModal, advertisementId }) => {
  const [addedOn, setAddedOn] = useState(undefined);
  const [expiresOn, setExpiresOn] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(undefined);

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("name value:", name, value);
    if (name == "addedOn") setAddedOn(value);
    if (name == "expiresOn") setExpiresOn(value);
  };

  const imageHandler = (e) => {
    let file = e.target.files[0];
    setSelectedImage(file);
  };

  const AddButtonHandler = async () => {
    console.log("advertisementId:", advertisementId);
    if (!advertisementId) {
      toast.error("Please select advertisment slot id ");
      return;
    }
    if (!addedOn) {
      toast.error("Please select added date");
      return;
    }
    if (!expiresOn) {
      toast.error("Please select expired date");
      return;
    }
    if (!selectedImage) {
      toast.error("Please select image");
      return;
    }
    const data = new FormData();
    data.append("image", selectedImage);
    data.set("expiresOn", expiresOn);
    data.set("addedOn", addedOn);
    data.set("advertisementId", advertisementId);
    try {
      const result = await advertisementService.addAdvertisement(data);
      console.log("result:", result);
      toast.success("Advertisement added!");
      closeModal()
    } catch (error) {
      console.log("Err:", error);
      toast.error("Error!");
    }
  };

  return (
    <div className="flex px-px flex-col bg-white md:w-[400px]  py-[1rem]">
      <div className=" flex justify-between">
        <h3>Add Advertisement</h3>
        <span
          className="self-end pr-[1rem] cursor-pointer text-[1.125rem] "
          onClick={closeModal}
        >
          &times;
        </span>
      </div>
      <div>
        <FormInputField
          name={"addedOn"}
          label={"Added On"}
          type={"date"}
          className={"flex flex-col  w-full pt-[1rem]"}
          inputClassName={"border pr-[.5rem]"}
          onchangeHandler={onchangeHandler}
        />
        <FormInputField
          name={"expiresOn"}
          label={"Expires On"}
          type={"date"}
          className={"flex flex-col  w-full py-[1rem]"}
          inputClassName={"border pr-[.5rem]"}
          onchangeHandler={onchangeHandler}
        />
        <div className="w-full ">
          <label className="text-xs pr-[1rem]">Select Image:</label>
          <input
            className="pt-[.5rem] pb-[1rem]"
            type="file"
            onChange={imageHandler}
          />
        </div>
      </div>
      <div className="flex justify-between py-[1rem] w-full">
        <button className="btn rounded" onClick={closeModal}>
          Cancel
        </button>
        <button
          className="btn bg-heading-main rounded"
          onClick={(e) => {
            AddButtonHandler();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddAdvertisement;
