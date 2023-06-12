import React from "react";
import cardImg from "../assets/cardImg.jpg";


const NavbarNews = () => {
  return (
    <div className="flex w-full border-b">
      <div className="flex  h-[111px] w-full items-center">
        <div className="flex w-1/4 justify-center ">
          <div className="flex w-[60px] h-[60px] shrink-0">
            <img
              className="h-full w-full object-cover"
              src={cardImg}
              alt="cardImg"
            />
          </div>
          <div className="flex h-[60px]  py-[3px] leading-[1.1]">
            <p className="px-[1rem]  clamp-custom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque fuga natus eaque dolore consequatur nulla tenetur at
              exercitationem! Neque, enim delectus quas aliquam quisquam
              accusantium labore quaerat. Ratione, temporibus!
            </p>
          </div>
        </div>
        <div className="flex w-1/4 justify-center ">
          <div className="flex w-[60px] h-[60px] shrink-0">
            <img
              className="h-full w-full object-cover"
              src={cardImg}
              alt="cardImg"
            />
          </div>
          <div className="flex h-[60px]  py-[3px] leading-[1.1]">
            <p className="px-[1rem]  clamp-custom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque fuga natus eaque dolore consequatur nulla tenetur at
              exercitationem! Neque, enim delectus quas aliquam quisquam
              accusantium labore quaerat. Ratione, temporibus!
            </p>
          </div>
        </div>
        <div className="flex w-1/4 justify-center ">
          <div className="flex w-[60px] h-[60px] shrink-0">
            <img
              className="h-full w-full object-cover"
              src={cardImg}
              alt="cardImg"
            />
          </div>
          <div className="flex h-[60px]  py-[3px] leading-[1.1]">
            <p className="px-[1rem]  clamp-custom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque fuga natus eaque dolore consequatur nulla tenetur at
              exercitationem! Neque, enim delectus quas aliquam quisquam
              accusantium labore quaerat. Ratione, temporibus!
            </p>
          </div>
        </div>
        <div className="flex w-1/4 justify-center ">
          <div className="flex w-[60px] h-[60px] shrink-0">
            <img
              className="h-full w-full object-cover"
              src={cardImg}
              alt="cardImg"
            />
          </div>
          <div className="flex h-[60px]  py-[3px] leading-[1.1]">
            <p className="px-[1rem]  clamp-custom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque fuga natus eaque dolore consequatur nulla tenetur at
              exercitationem! Neque, enim delectus quas aliquam quisquam
              accusantium labore quaerat. Ratione, temporibus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarNews;
