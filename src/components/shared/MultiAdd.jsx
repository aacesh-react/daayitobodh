export const MultiAdd = ({ addData }) => {
  return (
    <div className="flex w-full bg-white justify-center">
      <div className="flex w-full lg:w-lg-p xl:w-xl-p  my-[1rem] ">
        <ul className="flex flex-col lg:flex-row   w-full">
          {addData.map((add, index) => (
            <li className="w-full p-px " key={index}>
              <div className="bg-blue-200 w-full h-[244px] "></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
