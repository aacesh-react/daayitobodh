import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormInputField from "../../../components/shared/FormInputField";
import Select from "../../../components/shared/Select";
import NewsContent from "./NewsContent";

export const categories = ["sahitye", "bigyan"];

const AddNews = () => {
  const initialValues = {
    category: "",
    subCategory: "",
    heading: "",
    content: "",
    author: "",
    image: "",
  };

  const validationData = {
    category: false,
    subCategory: false,
    heading: false,
    content: false,
    author: false,
  };
  const [selectedImage, setSelectedImage] = useState(null);
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
    const { name, value } = e.currentTarget;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const imageHandler = (e) => {
    let file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const newsContentHandler = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    console.log("formdata:", formData);
    const data = new FormData();
    console.log("selected image:", selectedImage);
    data.append("image", selectedImage);
    data.set("category", formData.category);
    data.set("subCategory", formData.subCategory);
    data.set("heading", formData.heading);
    data.set("content", formData.content);
    data.set("author", formData.author);
    try {
      let res = await axios({
        url: "http://localhost:5000/",
        method: "POST",
        data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex bg-white w-full  px-px   ">
      <div className="flex flex-col py-[15px]  w-full">
        <h3 className="text-[1.5rem] font-[500] pb-[1rem] ">Add News</h3>
        <div className="flex w-full flex-col border-t py-[1rem] ">
          <form
            className=" w-full  flex flex-col items-center"
            onSubmit={(e) => {
              formSubmitHanlder(e);
            }}
          >
            <div className="flex flex-col  w-full sm:w-[510px] md:w-full ">
              <div className="flex flex-col w-full pb-[1rem] px-px">
                <label className="py-[1rem] text-xs">Select Category:</label>
                <Select
                  data={categories}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                  name={"category"}
                />
              </div>
              <div className="flex flex-col w-full pb-[1rem] px-px">
                <label className="py-[1rem] text-xs">
                  Select Sub-Category:
                </label>
                <Select
                  data={categories}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                  name={"subCategory"}
                />
              </div>

              <FormInputField
                name={"heading"}
                label={"Heading"}
                placeholder={"Enter news heading"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                validationError={validationError.heading}
                errorMessage={"Heading is required."}
                type={"text"}
                className={"flex flex-col px-[15px]  w-full mb-[28.8px] "}
                inputClassName={"border"}
              />

              <FormInputField
                name={"author"}
                label={"Author"}
                placeholder={"Enter news author"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                validationError={validationError.author}
                errorMessage={"Author is required."}
                type={"text"}
                className={"flex flex-col px-[15px]  w-full mb-[28.8px] "}
                inputClassName={"border"}
              />
              <div className="w-full h-[41px] px-px ">
                <label className="py-[1rem] text-xs pr-[1rem]">
                  Select Image:
                </label>
                <input type="file" onChange={imageHandler} />
              </div>
              {/* <FormInputField
                name={"content"}
                label={"content"}
                placeholder={"Enter news content"}
                onchangeHandler={inputChangeHandler}
                onBlurHandler={validationOutput}
                validationError={validationError.content}
                errorMessage={"Content is required."}
                type={"text"}
                className={"flex flex-col px-[15px]  w-full mb-[28.8px] "}
                inputClassName={"border"}
              /> */}
              <NewsContent
                newsContent={formData.content}
                newsContentHandler={newsContentHandler}
              />
            </div>
            <div className=" w-full px-px py-[3.5rem] ">
              <button className="btn w-full  " name="addNews">
                Add News
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
