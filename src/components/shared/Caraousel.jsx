import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import newsService from "../../app/features/news/newsService";
import CarouselCard from "./CarouselCard";

const Carausel = ({ children }) => {
  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    (async function getLatestNews() {
      try {
        const result = await newsService.getBreakingNews();
        // console.log("result in carausel:", result)
        setLatestNews(result.data);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, []);

  return (
    <div className="w-full  ">
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
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
      >
        <ul
          className=" w-full"
        >
          {latestNews?.map((news, index) => (
            <SwiperSlide key={index}>
              <CarouselCard news={news} />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default Carausel;
