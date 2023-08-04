import Navbar from "./layouts/Navbar";
import test from "../assets/test.gif";

const data = [
  "ajay sharma",
  "taralal shrestha",
  "ajay sharma",
  "taralal shrestha",
  "ajay sharma",
  "taralal shrestha",
];

const HamroTeam = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:flex-row w-full items-center  lg:w-lg  xl:w-xl">
          <fieldset className=" py-[2rem]  w-[600px] border  border-[2px] border-heading-main ">
            <legend className=" mx-auto text-heading-main  text-[3rem]">
              हाम्रो-टीम
            </legend>
            <div className="flex justify-around leading-[2rem] text-[1.5rem] font-[300] ">
              <div>
                <ul>
                  <li className="text-heading-main font-[700] ">sallahakar</li>
                  {data.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
              </ul>
              </div>
              <div>
                <ul>
                  <li>sallahakar</li>
                  {data.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default HamroTeam;
