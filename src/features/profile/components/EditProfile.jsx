import { useState } from "react";
import { PiUserThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../app/features/auth/authSlice";
import FormInputField from "../../../components/shared/FormInputField";

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
  };

  const [formData, setFormData] = useState(initialValues);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(updateUser({ userData: formData })).unwrap();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center py-[1rem]  w-full ">
      <div className="flex flex-col w-full sm:w-[540px]   md:w-[480px] lg:w-[640px] xl:w-[760px]">
        <div className="flex flex-col  px-[15px] mb-[1rem]  ">
          <p className=" mb-[1rem]">
            <label className="uppercase mb-[.25rem] text-gray-500 text-[0.75rem] font-[500]">
              profile picture
            </label>
          </p>
          <div className="flex w-[6rem] h-[6rem] rounded-full text-[5.7rem] justify-center border border-gray-500 text-gray-500  items-center">
            <PiUserThin />
          </div>
        </div>

        <div className="flex justify-center  md:w-[480px] lg:w-[640px] xl:w-[760px] ">
          <form className="flex flex-col w-full  " action="">
            <div className="flex flex-col md:flex-row flex-wrap">
              <FormInputField
                name={"firstName"}
                label={"first name"}
                placeholder={"Your Name"}
                onchangeHandler={inputChangeHandler}
                value={formData.firstName}
                className={
                  "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 text-gray-500 "
                }
                labelClassName={"text-gray-500"}
              />
              <FormInputField
                name={"lastName"}
                label={"last name"}
                placeholder={"Your Last Name"}
                onchangeHandler={inputChangeHandler}
                value={formData.lastName}
                className={
                  "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 text-gray-500 "
                }
                labelClassName={"text-gray-500"}
              />
              {/* <FormInputField
                name={"number"}
                label={"phone number"}
                placeholder={""}
                onchangeHandler={inputChangeHandler}
                value={formData.number}
                className={
                  "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 text-gray-500 "
                }
                labelClassName={"text-gray-500"}
              /> */}
              <FormInputField
                name={"email"}
                label={"email"}
                placeholder={""}
                onchangeHandler={inputChangeHandler}
                value={formData.email}
                readonly={"readonly"}
                className={
                  "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 text-gray-500 "
                }
                labelClassName={"text-gray-500"}
                inputClassName={"bg-stone-300"}
              />
            </div>

            <div className="flex w-full mb-[15px] px-[15px]">
              <div className="mb-[1rem]">
                <button className="btn" onClick={(e) => saveButtonHandler(e)}>
                  Save
                </button>
              </div>
              <div className="">
                <button className="btn ml-[1rem] bg-neutral-400 text-white">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
