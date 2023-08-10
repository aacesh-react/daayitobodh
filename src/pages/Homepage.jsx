import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdvertisements } from "../app/features/advertisement/advertisementSlice";
import Navbar from "../components/layouts/Navbar";
import Carausel from "../components/shared/Caraousel";
import { MultiAdd } from "../components/shared/MultiAdd";
import SingleAdd from "../components/shared/SingleAdd";
import Title from "../components/shared/Title";
import Golardha from "../features/main/components/Golardha";
import GyanBigyan from "../features/main/components/GyanBigyan";
import Hero from "../features/main/components/Hero";
import ItihasBodh from "../features/main/components/ItihasBodh";
import Jankari from "../features/main/components/Jankari";
import Kala from "../features/main/components/Kala";
import Khabar from "../features/main/components/Khabar";
import Sahitya from "../features/main/components/Sahitya";
import Swasthya from "../features/main/components/Swasthya";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await dispatch(getAdvertisements()).unwrap();
      } catch (error) {
        console.log("err:", error);
      }
    })();
  }, []);
  return (
    <div>
      <Title />
      <Navbar />
      <Carausel />
      <Hero />
      <MultiAdd addData={[{ id: "h-1" }, { id: "h-2" }, { id: "h-3" }]} />
      <Khabar />

      <div className="flex justify-center my-[1.5rem] px-px w-full ">
        <SingleAdd data={{ id: "h-4" }} />
      </div>

      <ItihasBodh />

      <div className="flex justify-center my-[1.5rem] px-px w-full ">
        <SingleAdd data={{ id: "h-5" }} />
      </div>

      <GyanBigyan />

      <div className="flex justify-center my-[1.5rem] px-px w-full ">
        <SingleAdd data={{ id: "h-6" }} />
      </div>

      <Golardha />
      <Swasthya />
      <MultiAdd addData={[{ id: "h-7" }, { id: "h-8" }, { id: "h-9" }]} />
      <Sahitya />
      <Kala />
      <Jankari />
    </div>
  );
};

export default Homepage;
