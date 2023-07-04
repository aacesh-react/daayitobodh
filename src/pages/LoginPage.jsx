import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInputField from "../components/shared/FormInputField";

function setWithExpiry(key, value, ttl) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

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
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
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

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    navigate("/user/profile");
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
                <div className="px-[15px] flex items-center mb-[0.5rem]">
                  <input
                    className="text-red-200"
                    type="checkbox"
                    // checked={rememberMe}
                    //   onChange={rememberMeHandler}
                  />
                  <label className="font-[300]" htmlFor="aggreement">
                    &nbsp;&nbsp;Remember me
                  </label>
                </div>
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
          <div className="flex flex-col font-[300]">
            <div className="flex flex-col px-[15px] items-center ">
              <div className="flex flex-col justify-center items-center px-[15px] w-full">
                <p className="mb-[1rem]">
                  Don't have an account?
                  <Link
                    className=" cursor-pointer text-green-primary"
                    to={"/signup"}
                    //   onClick={(e) => signupHandler("signup")}
                  >
                    &nbsp;Signup
                  </Link>
                </p>
                <a className="mb-[1rem]" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { login } from "../../app/features/auth/authSlice";
// import loginBg from "../../assets/loginBg.png";
// import FormInputField from "./FormInputField";
// import Input from "./Input";
// import { toast } from "react-toastify";
// import { getUserCart } from "../../app/features/cart/cartSlice";

// const Login = ({ showTransition, closeModal, signupHandler }) => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationData = {
//     email: false,
//     password: false,
//   };

//   const [formData, setFormData] = useState(initialValues);
//   const [validationError, setValidationError] = useState(validationData);
//   const [rememberMe, setRememberMe] = useState(false);

//   const dispatch = useDispatch();

//   const inputChangeHandler = (e) => {
//     const { name, value } = e.target;
//     // console.log(name, value);
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     value
//       ? setValidationError((prev) => ({ ...prev, [name]: false }))
//       : setValidationError((prev) => ({ ...prev, [name]: true }));
//   };

//   const validationOutput = (e) => {
//     const { name, value } = e.target;
//     value
//       ? setValidationError((prev) => ({ ...prev, [name]: false }))
//       : setValidationError((prev) => ({ ...prev, [name]: true }));
//   };

//   const rememberMeHandler = (e) => {
//     setRememberMe(true);
//   };

//   const loginHanlder = async (e) => {
//     e.preventDefault();
//     closeModal();
//     try {
//       const result = await dispatch(
//         login({ user: formData, rememberMe })
//       ).unwrap();
//       console.log("login data:", result);
//       toast.success("User logged in successfully");
//       await dispatch(
//         getUserCart({ userId: result.data.id, accessToken: result.token })
//       ).unwrap();

//       // closeModal();
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
//   return (
//     <div
//       className={` flex h-screen w-full  ${
//         showTransition && "sm:bg-[rgba(0,0,0,.6)]"
//       } fixed top-0 left-0 overflow-y-scroll ${
//         showTransition ? "z-[10]" : "-z-10"
//       }`}
//     >
//       {/* main */}
//       <div className="flex w-full sm:h-full justify-center items-center absolute top-[-821px]  ">
//         <div
//           className={` w-full  flex flex-col bg-white
//       ${
//         showTransition && "animation-1"
//       }  sm:w-[540px] md:flex-row  md:h-[603px] md:w-auto
//       `}
//         >
//           <div className="h-[240px] w-full flex md:h-full md:w-[255px] ">
//             <img
//               className="h-full w-full object-cover"
//               src={loginBg}
//               alt="loginBg"
//             />
//           </div>
//           <div className="flex flex-col px-[15px] w-full md:w-[358.167px]  ">
//             <div className="flex justify-between items-center pt-[15px] pl-[15px] border-b  ">
//               <h3 className="text-[1.75rem] leading-[1.5] mb-[0.5rem]">
//                 Login to Foodmandu
//               </h3>
//               <span
//                 className="text-gray-secondary rotate-45 text-[1.5rem] cursor-pointer"
//                 onClick={closeModal}
//               >
//                 +
//               </span>
//             </div>

//             <div className="flex flex-col py-[15px] mt-[1rem] w-full">
//               <div className="flex w-full">
//                 <form action="" className=" w-full flex flex-col items-center">
//                   <div className="flex flex-col  w-full   sm:w-[510px] md:w-full ">
//                     <FormInputField
//                       name={"email"}
//                       label={"email address"}
//                       placeholder={"you@yourname.com"}
//                       onchangeHandler={inputChangeHandler}
//                       value={formData.email}
//                       onBlurHandler={validationOutput}
//                       validationError={validationError.email}
//                       errorMessage={"Email is required."}
//                       type={"email"}
//                       className={"flex flex-col px-[15px] w-full mb-[28.8px] "}
//                     />

//                     <FormInputField
//                       name={"password"}
//                       label={"enter password"}
//                       placeholder={""}
//                       onchangeHandler={inputChangeHandler}
//                       value={formData.password}
//                       onBlurHandler={validationOutput}
//                       validationError={validationError.password}
//                       errorMessage={"Password is required."}
//                       type={"password"}
//                       className={"flex flex-col px-[15px] w-full mb-[28.8px] "}
//                     />
//                     <div className="px-[15px] flex items-center mb-[0.5rem]">
//                       <input
//                         className="text-red-200"
//                         type="checkbox"
//                         // checked={rememberMe}
//                         onChange={rememberMeHandler}
//                       />
//                       <label htmlFor="aggreement">
//                         &nbsp;&nbsp;Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <button
//                     className="btn-search w-full "
//                     name="login"
//                     onClick={(e) => {
//                       loginHanlder(e);
//                     }}
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//               <div className="px-[15px]">
//                 <hr className=" px-[15px] my-[15px]"></hr>
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex flex-col px-[15px] items-center ">
//                   <h3 className="heading-small my-[1rem]">or login using</h3>
//                   <div className="flex justify-between w-full pb-[15px]">
//                     <div className="px-[15px] w-1/2">
//                       <button
//                         className="cursor-not-allowed btn-search px-[15px] bg-blue text-white opacity-100 w-full"
//                         disabled={true}
//                       >
//                         Facebook
//                       </button>
//                     </div>
//                     <div className="px-[15px] w-1/2">
//                       <button
//                         className="cursor-not-allowed btn-search px-[15px] bg-red text-white opacity-100 w-full "
//                         disabled={true}
//                       >
//                         Google Plus
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center items-center px-[15px] w-full">
//                     <p className="mb-[1rem]">
//                       Don't have an account?
//                       <a
//                         className="text-border-green cursor-pointer"
//                         // href="#"
//                         onClick={(e) => signupHandler("signup")}
//                       >
//                         &nbsp;Signup
//                       </a>
//                     </p>
//                     <a className="mb-[1rem]" href="#">
//                       Forgot Password?
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
