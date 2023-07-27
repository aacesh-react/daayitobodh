import React from "react";

const FormInputField = ({
  name,
  label,
  placeholder,
  onchangeHandler,
  value,
  onBlurHandler,
  validationError,
  errorMessage,
  type,
  className,
  labelClassName,
  inputClassName,
  readonly,
}) => {
  return (
    <div className={className}>
      <label
        className={` text-xs py-[.5rem]  ${labelClassName} `}
        htmlFor={name}
      >
        {label}
        <span className="text-[red] ">&nbsp;*</span>
      </label>
      <input
        className={` h-[41px] w-full border-b-2 focus:border-black  focus:border-b-[1px] pl-[0.6rem] text-[1em]    outline-none focus:border-border-green  placeholder:text-gray-400 placeholder:font-[300] placeholder:text-xs  font-[300] ${inputClassName} `}
        type={`${type ? type : "text"}`}
        placeholder={placeholder}
        onChange={(e) => onchangeHandler(e)}
        name={name}
        id={name}
        value={value}
        onBlur={onBlurHandler}
        readOnly={readonly}
      />
      <span className={`${validationError ? "block" : "hidden"} mb-[1rem] pt-[4px] font-[300] text-red-700`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInputField;
