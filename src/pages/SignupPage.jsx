import{ useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../app/features/auth/authSlice";
import FormInputField from "../components/shared/FormInputField";

const SignupPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationData = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  const [formData, setFormData] = useState(initialValues);
  const [validationError, setValidationError] = useState(validationData);
  const [disableButton, setDisableButton] = useState(true);
  const [conPassErrMessage, setConPassErrMessage] = useState(
    "Confirm password is required."
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      setDisableButton(false);
    }
  };

  const validationOutput = (e) => {
    const { name, value } = e.target;
    value
      ? setValidationError((prev) => ({ ...prev, [name]: false }))
      : setValidationError((prev) => ({ ...prev, [name]: true }));
    if (name == "confirmPassword") {
      if (value != formData.password) {
        setValidationError((prev) => ({ ...prev, [name]: true }));
        setConPassErrMessage("No Match!");
      }
    }
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      setDisableButton(false);
    }
  };

  const formSubmitHanlder = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(register(formData)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(":", error);
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-200 items-center justify-center">
      <div className="flex bg-white h-screen md:h-auto flex-col w-full md:w-[600px] border  ">
        <div className="flex flex-col  w-full">
          <div className="flex justify-between items-center pt-[15px] mx-[15px] border-b  ">
            <h3 className="text-[1.75rem] font-[300] leading-[1.5] mb-[0.5rem]">
              Signup
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
              className=" w-full flex flex-col  items-center"
              onSubmit={(e) => {
                formSubmitHanlder(e);
              }}
            >
              <div className="flex flex-col  w-full md:flex-row  md:flex-wrap  ">
                <FormInputField
                  name={"firstName"}
                  label={"First Name"}
                  placeholder={"Your Name"}
                  onchangeHandler={inputChangeHandler}
                  value={formData.firstName}
                  onBlurHandler={validationOutput}
                  validationError={validationError.firstName}
                  errorMessage={"First name is required."}
                  className={
                    "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 "
                  }
                />
                <FormInputField
                  name={"lastName"}
                  label={"Last Name"}
                  placeholder={"Your last name"}
                  onchangeHandler={inputChangeHandler}
                  value={formData.lastName}
                  onBlurHandler={validationOutput}
                  validationError={validationError.lastName}
                  errorMessage={"Last name is required."}
                  className={
                    "flex flex-col px-[15px] w-full mb-[28.8px] md:w-1/2 "
                  }
                />
                <FormInputField
                  name={"email"}
                  label={"Email Address"}
                  placeholder={"you@yourname.com"}
                  onchangeHandler={inputChangeHandler}
                  value={formData.email}
                  onBlurHandler={validationOutput}
                  validationError={validationError.email}
                  errorMessage={"Email is required."}
                  type={"email"}
                  className={
                    "flex flex-col px-[15px] w-full mb-[28.8px] sm:w-1/2 "
                  }
                />
                <FormInputField
                  name={"password"}
                  label={"Choose a password"}
                  placeholder={"password"}
                  onchangeHandler={inputChangeHandler}
                  value={formData.password}
                  onBlurHandler={validationOutput}
                  validationError={validationError.password}
                  errorMessage={"Password is required."}
                  type={"password"}
                  className={
                    "flex flex-col px-[15px] w-full mb-[28.8px] sm:w-1/2 "
                  }
                />
                <FormInputField
                  name={"confirmPassword"}
                  label={"Confirm password"}
                  placeholder={""}
                  onchangeHandler={inputChangeHandler}
                  value={formData.confirmPassword}
                  onBlurHandler={validationOutput}
                  validationError={validationError.confirmPassword}
                  errorMessage={conPassErrMessage}
                  type={"password"}
                  className={
                    "flex flex-col px-[15px] w-full mb-[28.8px] sm:w-1/2 "
                  }
                />
              </div>
              <div className="w-full px-px">
                <button
                  className="btn w-full  "
                  name="login"
                  onClick={(e) => {
                    // loginHanlder(e);
                  }}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
          <div className="px-[15px]">
            <hr className=" px-[15px] my-[15px]"></hr>
          </div>
          <div className="flex flex-col font-[300]">
            <div className="flex flex-col px-[15px] items-center ">
              <div className="flex flex-col justify-center items-center px-[15px] w-full">
                <p className="mb-[1rem]">
                  Already have an account?
                  <Link
                    className=" cursor-pointer text-green-primary"
                    to={"/login"}
                    //   onClick={(e) => signupHandler("signup")}
                  >
                    &nbsp;Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
