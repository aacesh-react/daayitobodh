const CarouselCard = ({ news }) => {
  return (
    <div className="flex w-full justify-center h-[60px]">
      <div className="flex w-[60px] shrink-0">
        <img
          className=" w-full object-cover h-full"
          src={news?.coverImage}
          alt="cardImg"
        />
      </div>
      <div className="w-full ">
        <p className="pl-[1rem] overflow line-clamp-3 text-justify leading-[1.3]">
          {news?.heading}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
