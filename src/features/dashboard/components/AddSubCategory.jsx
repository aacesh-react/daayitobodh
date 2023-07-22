import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../app/features/category/categorySlice";
import { addSubcategory } from "../../../app/features/subcategory/subcategorySlice";
import FormInputField from "../../../components/shared/FormInputField";
import Select from "../../../components/shared/Select";
import { validateForm } from "../../../utilities/formValidaton";

export const categories = ["sahitye", "bigyan"];

const initialValues = {
  categoryId: null,
  subcategoryName: null,
};

const validationData = {
  subcategoryName: false,
};

const AddSubCategory = () => {
  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    validationOutput(e);
  };

  const validationOutput = (e) => {
    const { name, value } = e.target;
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  const selectHandler = (e) => {
    const value = e.currentTarget.value;
    const category = categories.find((category) => category.name == value);
    setFormData((prev) => ({ ...prev, categoryId: category.id }));
  };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    console.log(formData);
    const hasEmptyData = validateForm(formData, setValidationError);
    console.log("has empty data:", hasEmptyData);
    console.log("validationError:", validationError);
    if (!hasEmptyData) {
      try {
        const result = await dispatch(addSubcategory(formData)).unwrap();
        console.log("result:", result);
        setFormData((prev) => ({ ...prev, subcategoryName: "" }));
      } catch (error) {
        console.log("err:", error);
      }
    }
  };

  useEffect(() => {
    console.log("user effect");
    (async function fetchData() {
      try {
        const result = await dispatch(
          getCategories({ limit: undefined, page: 1 })
        ).unwrap();
        setFormData((prev) => ({ ...prev, categoryId: result.data[0].id }));
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, []);

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
                  data={categories.map((category) => category.name)}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                />
              </div>

              <FormInputField
                name={"subcategoryName"}
                label={"Sub Category"}
                placeholder={"Enter sub category name"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                value={formData.subcategoryName}
                validationError={validationError.subcategoryName}
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
