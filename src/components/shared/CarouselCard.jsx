import img from "../../assets/img.jpg";
const CarouselCard = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[60px] shrink-0">
        <img className=" w-full object-cover" src={img} alt="cardImg" />
      </div>
      <div className="w-full ">
        <p className="pl-[1rem] overflow line-clamp-3 text-justify leading-[1.3]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque
          fuga natus eaque dolore consequatur nulla tenetur at exercitationem!
          Neque, enim delectus quas aliquam quisquam accusantium labore quaerat.
          Ratione, temporibus!
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
