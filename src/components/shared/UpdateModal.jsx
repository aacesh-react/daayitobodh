import { useState } from "react";
import { validateForm } from "../../utilities/formValidaton";
import FormInputField from "./FormInputField";

const UpdateModal = ({ closeModal, updateButtonHandler, inputFieldData }) => {
  const initialFormData = {
    [inputFieldData.name]: inputFieldData.value,
  };
  const initialErrorData = {
    [inputFieldData.name]: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [validationError, setValidationError] = useState(initialErrorData);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    blurHandler(e);
    inputFieldData;
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
        onClick={(e) => {
          closeModal();
        }}
      >
        ✕
      </span>
      <div className=" ">
        <FormInputField
          name={inputFieldData.name}
          label={inputFieldData.label}
          placeholder={inputFieldData.placeholder}
          onchangeHandler={inputChangeHandler}
          onBlurHandler={blurHandler}
          value={formData[inputFieldData.name]}
          validationError={validationError[inputFieldData.name]}
          errorMessage={"add some data"}
          //   errorMessage={inputFieldData.errorMessage}
          className={
            "flex flex-col px-[15px] w-full mb-[28.8px]  text-gray-500  "
          }
          labelClassName={"text-gray-500"}
        />
      </div>

      <div className="flex justify-between px-[1rem] w-full">
        <button
          className="btn rounded"
          onClick={(e) => {
            closeModal();
          }}
        >
          Cancel
        </button>
        <button
          className="btn bg-heading-main rounded"
          onClick={(e) => {
            updateButtonHandler(
              validateForm(formData, setValidationError),
              formData[inputFieldData.name]
            );
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
