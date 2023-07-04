import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUser } from "../../../app/features/auth/authSlice";
import FormInputField from "../../../components/shared/FormInputField";
// import { toast } from "react-toastify";
const Password = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const errorInitialValue = {
    newPassword: {
      err: false,
      message: "",
    },
    confirmPass: {
      err: false,
      message: "",
    },
  };

  const [formData, setFormData] = useState(initialValues);
  // const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [inputErr, setInputErr] = useState(errorInitialValue);
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.auth);
  // console.log("formdata change password:", formData);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    inputBlurHandler(e);
  };

  const inputBlurHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    if (name == "confirmPassword") {
      if (formData.newPassword != value) {
        setInputErr((prev) => ({
          ...prev,
          confirmPass: {
            err: true,
            message: "Must match!",
          },
        }));
      }
      if (formData.newPassword == value) {
        setInputErr((prev) => ({
          ...prev,
          confirmPass: {
            err: false,
            message: "",
          },
        }));
      }
    }
    if (name == "newPassword") {
      if (formData.oldPassword == value) {
        setInputErr((prev) => ({
          ...prev,
          newPassword: {
            err: true,
            message: "Old and new password can't be same",
          },
        }));
      }
      if (formData.oldPassword != value) {
        setInputErr((prev) => ({
          ...prev,
          newPassword: {
            err: false,
            message: "",
          },
        }));
      }
    }
  };

  const saveButtonHandler = async (e) => {
    e.preventDefault();
    // formData.email = user.email;
    // try {
    //   let data = await dispatch(updateUser(formData)).unwrap();
    //   toast.success("Password updated!");
    // } catch (error) {
    //   console.log("error:", error);
    //   toast.error(error.message);
    // }
    // setFormData(initialValues);
  };
  return (
    <div className="flex justify-center py-[1rem] w-full md:w-[480px] lg:w-[640px] xl:w-[760px] text-gray-500 ">
      <form className="flex flex-col w-full  " action="">
        <div className="flex flex-col ">
          <FormInputField
            name={"oldPassword"}
            label={"old password"}
            placeholder={""}
            onchangeHandler={inputChangeHandler}
            value={formData.firstName}
            className={"flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 "}
            labelClassName={"text-[1rem] font-[300] capitalize "}
            type={"password"}
          />
          <FormInputField
            name={"newPassword"}
            label={"new password"}
            placeholder={""}
            onchangeHandler={inputChangeHandler}
            value={formData.newPassword}
            className={"flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 "}
            labelClassName={"text-[1rem] font-[300] capitalize "}
            type="password"
            validationError={inputErr.newPassword.err}
            errorMessage={inputErr.newPassword.message}
          />
          <FormInputField
            name={"confirmPassword"}
            label={"confirm new password"}
            placeholder={""}
            onchangeHandler={inputChangeHandler}
            onBlurHandler={inputBlurHandler}
            value={formData.confirmPassword}
            className={"flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 "}
            labelClassName={"text-[1rem] font-[300] capitalize "}
            type="password"
            validationError={inputErr.confirmPass.err}
            errorMessage={inputErr.confirmPass.message}
          />
        </div>

        <div className="flex w-full mb-[15px] px-[15px]">
          <div className="mb-[1rem]">
            <button
              className={`btn   `}
              // disabled={saveButtonDisabled}
              onClick={saveButtonHandler}
            >
              Save
            </button>
          </div>
          <div className="w-full">
            <button className="btn ml-[1rem] bg-neutral-400 text-white">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Password;
