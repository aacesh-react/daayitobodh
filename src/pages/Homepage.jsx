import { useState } from "react";
import Navbar from "../components/layouts/Navbar";
import CustomSelect from "../components/shared/CustomSelect";
import { MultiAdd } from "../components/shared/MultiAdd";
import SingleAdd from "../components/shared/SingleAdd";
import YoutubePlayer from "../components/shared/YoutubePlayer";
import NewsContent from "../features/dashboard/components/NewsContent";
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
  return (
    <div>
      <Navbar />
      <Hero />
      <MultiAdd addData={[1, 2, 3]} />
      <Khabar />
      <SingleAdd />
      <ItihasBodh />
      <SingleAdd />
      <GyanBigyan />
      <SingleAdd />
      <Golardha />
      <Swasthya />
      <MultiAdd addData={[1, 2, 3]} />
      <Sahitya />
      <Kala />
      <Jankari />
    </div>
  );
};

export default Homepage;
