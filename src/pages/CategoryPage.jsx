import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import { MultiAdd } from "../components/shared/MultiAdd";
import SingleAdd from "../components/shared/SingleAdd";
import AllNews from "../features/category/components/AllNews";
import Hero from "../features/category/components/Hero";
import SubCategory from "../features/category/components/SubCategory";

const CategoryPage = () => {
  const { categoryName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero categoryName={categoryName} />

      <div className="flex justify-center my-[1.5rem] px-px w-full h-[100px] ">
        <SingleAdd data={{ id: "c-1" }} />
      </div>

      <SubCategory categoryName={categoryName} />
      <MultiAdd addData={[{ id: "c-2" }, { id: "c-3" }, { id: "c-4" }]} />
      <AllNews />

      <div className="flex justify-center my-[1.5rem] px-px w-full h-[100px] ">
        <SingleAdd data={{ id: "c-5" }} />
      </div>

      <MultiAdd addData={[{ id: "c-6" }, { id: "c-7" }, { id: "c-8" }]} />
    </div>
  );
};

export default CategoryPage;
