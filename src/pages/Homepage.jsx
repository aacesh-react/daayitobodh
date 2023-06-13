import Blank from "../features/main/components/Blank";
import Golardha from "../features/main/components/Golardha";
import GyanBigyan from "../features/main/components/GyanBigyan";
import Hero from "../features/main/components/Hero";
import ItihasBodh from "../features/main/components/ItihasBodh";
import Jankari from "../features/main/components/Jankari";
import Kala from "../features/main/components/Kala";
import Khabar from "../features/main/components/Khabar";
import MultiAdd from "../features/main/components/MultiAdd";
import Sahitya from "../features/main/components/Sahitya";
import Swasthya from "../features/main/components/Swasthya";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <MultiAdd />
      <Khabar />
      <Blank />
      <ItihasBodh />
      <Blank />
      <GyanBigyan />
      <Blank />
      <Golardha />
      <Swasthya />
      <MultiAdd />
      <Sahitya />
      <Kala />
      <Jankari />
    </div>
  );
};

export default Homepage;
