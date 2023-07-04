import { useState } from "react";
import { Link } from "react-router-dom";
import FormInputField from "../../../components/shared/FormInputField";
import Select from "../../../components/shared/Select";

export const categories = ["sahitye", "bigyan"];

const AddSubCategory = () => {
  const initialValues = {
    category: "",
    subCategory: "",
  };

  const validationData = {
    subCategory: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  const validationOutput = (e) => {
    const { name, value } = e.target;
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  const selectHandler = (e) => {
    const value = e.currentTarget.value;
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex bg-white w-full  px-px   ">
      <div className="flex flex-col py-[15px]  w-full">
        <h3 className="text-[1.5rem] font-[500] pb-[1rem] ">
          Add New Sub Category
        </h3>
        <div className="flex w-[600px] flex-col border-t py-[1rem] ">
          <form
            className=" w-full  flex flex-col items-center"
            onSubmit={(e) => {
              formSubmitHanlder(e);
            }}
          >
            <div className="flex flex-col  w-full sm:w-[510px] md:w-full ">
              <div className="flex flex-col w-full pb-[1rem] px-px">
                <label className="py-[1rem]">Select Category:</label>
                <Select
                  data={categories}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                />
              </div>

              <FormInputField
                name={"category"}
                label={"Sub Category"}
                placeholder={"Enter sub category name"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                validationError={validationError.category}
                errorMessage={"Sub category is required."}
                type={"text"}
                className={"flex flex-col px-[15px]  w-full mb-[28.8px] "}
                inputClassName={"border"}
              />
            </div>
            <div className=" w-full px-px ">
              <button className="btn w-full  " name="addSubCategory">
                Add sub Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategory;
