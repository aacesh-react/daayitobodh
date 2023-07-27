import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../../app/features/category/categorySlice";
import { addNews } from "../../../app/features/news/newsSlice";
import FormInputField from "../../../components/shared/FormInputField";
import Select from "../../../components/shared/Select";
import { validateForm } from "../../../utilities/formValidaton";
import NewsContent from "./NewsContent";
import { toast } from "react-toastify";
import newsService from "../../../app/features/news/newsService";

const validationData = {
  heading: false,
  author: false,
  content: false,
  categoryId: false,
  subcategoryId: false,
};
const UpdateNewsModal = ({ news, closeModal, setActivePage }) => {
  console.log("news:", news.newsId);
  const initialValues = {
    heading: news.heading,
    subheading: news.subheading,
    author: news.author,
    content: news.content,
    categoryId: news.categoryId,
    subcategoryId: news.subcategoryId,
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subCatValue, setSubCatValue] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("input change handler:", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    selectedCategory
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
    // console.log("select handler");
    const { name, value } = e.currentTarget;
    // console.log(name, value);
    if (!value) {
      setFormData((prev) => ({ ...prev, [name]: null }));
      return;
    }
    let id;
    if (name == "categoryId") {
      // console.log("cat:", categories);
      setSubCatValue(undefined);
      const selectedCategory = categories.find(
        (category) => category.name == value
      );
      // console.log("category:", selectedCategory);

      id = selectedCategory.id;
      setSelectedCategory(selectedCategory);
      setFormData((prev) => ({ ...prev, [name]: id, subcategoryId: null }));

      // selectedCategory.subcategories
      //   ? setFormData((prev) => ({ ...prev, [name]: id, subcategoryId: null }))
      //   : setFormData((prev) => ({
      //       ...prev,
      //       [name]: id,
      //       subcategoryId: value,
      //     }));
      console.log("clearing su index");
      var childSelect = document.getElementById("selectSubcategory");
      // Clear the selection in the child select
      childSelect.selectedIndex = 0;
    }
    if (name == "subcategoryId") {
      const selectedSubcategory = selectedCategory.subcategories?.find(
        (subcategory) => subcategory.subcategoryName == value
      );
      id = selectedSubcategory.subcategoryId.toString();
      setFormData((prev) => ({ ...prev, [name]: id }));
    }
  };

  const imageHandler = (e) => {
    let file = e.target.files[0];
    // console.log(file);
    setSelectedImage(file);
  };

  const newsContentHandler = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    // console.log("formdata:", formData);
    console.log("selected category:", selectedCategory.subcategories);
    if (selectedCategory.subcategories && !formData.subcategoryId) {
      return;
    }
    const dataToValidate = {
      ...formData,
    };
    // let hasEmptyData = console.log("data to validate:", dataToValidate);
    delete dataToValidate.subcategoryId;
    delete dataToValidate.subheading;
    // console.log("data to validate:", dataToValidate);

    const hasEmptyData = validateForm(dataToValidate, setValidationError);
    // console.log("hasEmptyData:", hasEmptyData);

    if (!hasEmptyData) {
      console.log("passed");
      const data = new FormData();
      data.append("image", selectedImage);
      data.append("newsId", news.newsId);
      data.set("heading", formData.heading);
      data.set("subheading", formData.subheading);
      data.set("author", formData.author);
      data.set("content", formData.content);
      data.set("categoryId", formData.categoryId);

      data.set(
        "subcategoryId",
        formData.subcategoryId ? formData.subcategoryId : null
      );
      try {
        const result = await newsService.updateNews(data);
        console.log("result:", result);
        toast.success("News updated!");

        closeModal();
      } catch (error) {
        console.log("Err:", error.response.data);
        toast.error("Error occurred!");
      }
    }
  };
  useEffect(() => {
    console.log("use effect");
    (async function () {
      try {
        const result = await dispatch(getCategories({ sub: true })).unwrap();
        console.log("result:", result.data);
        setCategories(result.data);
        // console.log("result:", result.data);

        const category = result.data.find(
          (value) => value.name == news.categoryName
        );
        console.log("category:", category);
        setSelectedCategory(category);
        setSubCatValue(news.subcategoryName);
        setFormData(initialValues);

        setLoading(false);
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, [news]);

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div className="flex bg-white w-full  px-px max-h-[90vh]  ">
      <div className="flex flex-col py-[15px]  w-full overflow-y-scroll">
        <div className="flex justify-between">
          <h3 className="text-[1.5rem] font-[500] pb-[1rem] ">Update News</h3>
          <span
            className=" pr-[1rem] cursor-pointer text-[1.125rem] "
            onClick={(e) => {
              closeModal();
              // setFormData(nullValues);
            }}
          >
            ✕
          </span>
        </div>

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
                  data={categories.map((category) => category.name)}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                  name={"categoryId"}
                  value={selectedCategory.name}
                  id={"selectCategory"}
                />
              </div>
              <div className={`  flex flex-col w-full pb-[1rem] px-px`}>
                <label className="py-[1rem] text-xs">
                  Select Sub-Category:
                </label>
                <Select
                  data={selectedCategory.subcategories?.map(
                    (subcategory) => subcategory.subcategoryName
                  )}
                  changeHandler={selectHandler}
                  style={"h-[41px]"}
                  name={"subcategoryId"}
                  id={"selectSubcategory"}
                  value={subCatValue}
                  defaultOption={"Select a subcategory"}
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
                value={formData.heading}
              />

              <FormInputField
                name={"subheading"}
                label={"Sub Heading"}
                placeholder={"Enter news sub heading"}
                onchangeHandler={inputChangeHandler}
                errorMessage={"Sub head is required."}
                type={"text"}
                className={"flex flex-col px-[15px]  w-full mb-[28.8px] "}
                inputClassName={"border"}
                value={formData.subheading || ""}
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
                value={formData.author}
              />
              <div className="w-full h-[41px] px-px ">
                <label className="py-[1rem] text-xs pr-[1rem]">
                  Select Image:
                </label>
                <input type="file" onChange={imageHandler} />
              </div>
              <NewsContent
                newsContent={formData.content}
                newsContentHandler={newsContentHandler}
              />
            </div>
            <div className=" w-full px-px py-[3.5rem] ">
              <button className="btn w-full  " name="addNews">
                Update News
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateNewsModal;
