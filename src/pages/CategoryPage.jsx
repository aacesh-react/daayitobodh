import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import { MultiAdd } from "../components/shared/MultiAdd";
import SingleAdd from "../components/shared/SingleAdd";
import AllNews from "../features/category/components/AllNews";
import Hero from "../features/category/components/Hero";
import SubCategory from "../features/category/components/SubCategory";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero categoryName={categoryName} />
      <SingleAdd />
      <SubCategory categoryName={categoryName} />
      <MultiAdd addData={[1, 2, 3]} />
      <AllNews />
      <SingleAdd />
      <MultiAdd addData={[1, 2, 3]} />
    </div>
  );
};

export default CategoryPage;
