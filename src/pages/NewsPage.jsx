import Navbar from "../components/layouts/Navbar";
import Carausel from "../components/shared/Caraousel";
import SingleAdd from "../components/shared/SingleAdd";
import Title from "../components/shared/Title";
import News from "../features/mainNews/components/News";
import Trending from "../features/mainNews/components/Trending";

const NewsPage = () => {
  return (
    <div>
      <Title />
      <Navbar />
      <Carausel />
      <div className="flex  w-full justify-center pt-[1rem] text-sm">
        <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p  ">
          {/* left     */}
          <div className="flex lg:w-[690px] xl:w-[980px] felx-col">
            <News />
          </div>
          {/* right     */}
          <div className="flex flex-col px-px  flex-col w-full lg:w-[300px] xl:w-[320px]">
            <Trending />
            <div
              className="flex my-[2rem] px-px justify-center items-center w-full h-[170px] "
              id="n-1"
            >
              <SingleAdd data={{ id: "n-1" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
