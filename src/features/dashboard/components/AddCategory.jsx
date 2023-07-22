import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCategory } from "../../../app/features/category/categorySlice";
import FormInputField from "../../../components/shared/FormInputField";
import { validateForm } from "../../../utilities/formValidaton";

const AddCategory = () => {
  const initialValues = {
    categoryName: "",
  };

  const validationData = {
    categoryName: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
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

  // const validateForm = () => {
  //   let hasEmptyData = false;
  //   for (const name in formData) {
  //     if (Object.hasOwnProperty.call(formData, name)) {
  //       const value = formData[name];
  //       value
  //         ? setValidationError((prev) => ({ ...prev, [name]: false }))
  //         : setValidationError((prev) => ({ ...prev, [name]: true }));
  //       if (!value) {
  //         hasEmptyData = true;
  //       }
  //     }
  //   }
  //   return hasEmptyData;
  // };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    const hasEmptyData = validateForm(formData, setValidationError);
    if (hasEmptyData) {
      return;
    }
    try {
      const result = await dispatch(addCategory(formData)).unwrap();
      setFormData(initialValues);
    } catch (error) {
      console.log("err:", error);
    }
  };
  return (
    <div className="flex bg-white w-full  px-px   ">
      <div className="flex flex-col py-[15px]  w-full">
        <h3 className="text-[1.5rem] font-[500] pb-[1rem] ">
          Add New Category
        </h3>
        <div className="flex w-[600px] flex-col border py-[1rem] ">
          <form
            className=" w-full  flex flex-col items-center"
            onSubmit={(e) => {
              formSubmitHanlder(e);
            }}
          >
            <div className="flex flex-col  w-full   sm:w-[510px] md:w-full ">
              <FormInputField
                name={"categoryName"}
                label={"Name"}
                placeholder={"Type category name"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                value={formData.categoryName}
                validationError={validationError.categoryName}
                errorMessage={"Category is required."}
                type={"text"}
                className={"flex flex-col px-[15px] w-full mb-[28.8px] "}
              />
              <div className="px-[15px] flex items-center mb-[0.5rem]"></div>
            </div>
            <div className=" w-full px-px py-[.5rem]">
              <button className="btn w-full  " name="addCategory">
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
