import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import newsService from "../../app/features/news/newsService";
import CarouselCard from "./CarouselCard";

const Carausel = ({ children }) => {
  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    (async function getLatestNews() {
      try {
        const result = await newsService.getBreakingNews();
        setLatestNews(result.data);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, []);

  return (
    <div className="w-full flex justify-center bg-white my-[1rem]">
      <div className="flex  w-full lg:w-lg-p  xl:w-xl-p px-px bg-white  items-center justify-center ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
        >
          <ul className=" w-full">
            {latestNews?.map((news, index) => (
              <SwiperSlide key={index}>
                <CarouselCard news={news} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default Carausel;
