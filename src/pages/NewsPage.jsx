import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import newsService from "../app/features/news/newsService";
import Navbar from "../components/layouts/Navbar";
import SingleAdd from "../components/shared/SingleAdd";
import News from "../features/mainNews/components/News";
import Trending from "../features/mainNews/components/Trending";

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  w-full justify-center pt-[1rem] text-sm">
        <div className="flex flex-col lg:flex-row w-full lg:w-lg-p xl:w-xl-p  ">
          {/* left     */}
          <div className="flex lg:w-[690px] xl:w-[950px] felx-col ">
            <News />
          </div>
          {/* right     */}
          <div className="flex flex-col px-px  flex-col w-full lg:w-[300px] xl:w-[320px]">
            <Trending />
            <div className="flex my-[2rem] justify-center items-center w-full h-[170px] bg-bg-gray">
              advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
