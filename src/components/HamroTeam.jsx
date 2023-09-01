import Navbar from "./layouts/Navbar";
import Title from "./shared/Title";
import { hamoTeamData } from "../data/HamroTeam";

const HamroTeam = () => {
  return (
    <div>
      <Title />
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="flex flex-col px-px lg:flex-row w-full items-center  lg:w-lg justify-center xl:w-xl py-[2rem] ">
          <fieldset className=" w-full px-px py-[2rem]  lg:w-[600px] border  border-[2px] border-heading-main ">
            <legend className=" mx-auto text-heading-main  text-[3rem]">
              हाम्रो-टीम
            </legend>
            <div className="flex flex-col lg:flex-row justify-around leading-[2rem] text-[1.5rem] font-[300] ">
              {hamoTeamData.map((item, index) => (
                <div className="pb-[1rem]" key={index}>
                  <ul>
                    <li className="text-heading-main font-[700] pb-[8px] ">
                      {item.group}
                    </li>
                    {item.members.map((name, index) => (
                      <li className="text-sm" key={index}>
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default HamroTeam;
