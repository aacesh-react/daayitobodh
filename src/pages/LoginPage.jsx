import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../app/features/auth/authSlice";
import FormInputField from "../components/shared/FormInputField";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationData = {
    email: false,
    password: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  const validationOutput = (e) => {
    const { name, value } = e.target;
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
  };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    try {
      let data = await dispatch(login(formData)).unwrap();
      toast.success("Logged in");

      navigate(location.state?.from.pathname || "/");
    } catch (error) {
      console.log("err:", error);
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="flex w-full h-screen bg-gray-200 items-center justify-center">
      <div className="flex bg-white h-screen md:h-auto flex-col w-full md:w-[358.167px] border  ">
        <div className="flex flex-col  w-full">
          <div className="flex justify-between items-center pt-[15px] mx-[15px] border-b  ">
            <h3 className="text-[1.75rem] font-[300] leading-[1.5] mb-[0.5rem]">
              Login
            </h3>
            <Link
              className="text-gray-secondary rotate-45 text-[1.5rem] cursor-pointer"
              to={"/"}
            >
              +
            </Link>
          </div>
          <div className="flex w-full py-[1.5rem]">
            <form
              className=" w-full  flex flex-col items-center"
              onSubmit={(e) => {
                formSubmitHanlder(e);
              }}
            >
              <div className="flex flex-col  w-full   sm:w-[510px] md:w-full ">
                <FormInputField
                  name={"email"}
                  label={"Email address"}
                  placeholder={"Type your email address"}
                  onchangeHandler={inputChangeHandler}
                  onBlurHandler={validationOutput}
                  validationError={validationError.email}
                  errorMessage={"Email is required."}
                  type={"email"}
                  className={"flex flex-col px-[15px] w-full mb-[28.8px] "}
                />

                <FormInputField
                  name={"password"}
                  label={"Password"}
                  placeholder={"Type your password"}
                  onchangeHandler={inputChangeHandler}
                  value={formData.password}
                  onBlurHandler={validationOutput}
                  validationError={validationError.password}
                  errorMessage={"Password is required."}
                  type={"password"}
                  className={"flex flex-col px-[15px] w-full mb-[28.8px] "}
                />
                {/* <div className="px-[15px] flex items-center mb-[0.5rem]">
                  <input
                    className="text-red-200"
                    type="checkbox"
                    // checked={rememberMe}
                    //   onChange={rememberMeHandler}
                  />
                  <label className="font-[300]" htmlFor="aggreement">
                    &nbsp;&nbsp;Remember me
                  </label>
                </div> */}
              </div>
              <div className=" w-full px-px py-[.5rem]">
                <button
                  className="btn w-full  "
                  name="login"
                  onClick={(e) => {
                    // loginHanlder(e);
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="px-[15px]">
            <hr className=" px-[15px] my-[15px]"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
