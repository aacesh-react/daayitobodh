import React from "react";
import { useState } from "react";
import FormInputField from "../../../components/shared/FormInputField";
import { validateForm } from "../../../utilities/formValidaton";

const UpdateCategoryModal = ({
  closeModal,
  updateButtonHandler,
  defaultInputValue,
}) => {
  const initialFormData = {
    categoryName: defaultInputValue,
  };
  const initialErrorData = {
    categoryName: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [validationError, setValidationError] = useState(initialErrorData);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    blurHandler(e);
  };

  const blurHandler = (e) => {
    const { name, value } = e.target;
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="flex flex-col bg-white md:w-[400px] py-[1rem]">
      <span
        className="self-end pr-[1rem] cursor-pointer text-[1.125rem] "
        onClick={closeModal}
      >
        ✕
      </span>
      <div className=" ">
        <FormInputField
          name={"categoryName"}
          label={"category name"}
          placeholder={"category name"}
          onchangeHandler={inputChangeHandler}
          onBlurHandler={blurHandler}
          value={formData.categoryName}
          validationError={validationError.categoryName}
          errorMessage={"Category name is required"}
          className={
            "flex flex-col px-[15px] w-full mb-[28.8px]  text-gray-500  "
          }
          labelClassName={"text-gray-500"}
        />
      </div>

      <div className="flex justify-between px-[1rem] w-full">
        <button className="btn rounded" onClick={closeModal}>
          Cancel
        </button>
        <button
          className="btn bg-heading-main rounded"
          onClick={(e) => {
            updateButtonHandler(
              validateForm(formData, setValidationError),
              formData.categoryName
            );
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateCategoryModal;
