import { useState } from "react";

const CustomSelect = ({ multiple, options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsHandler = (e) => {
    setShowOptions((prev) => !prev);
  };

  const clearOptions = (e) => {
    e.stopPropagation();
    if (multiple) onChange([]);
  };

  const selectOptionsHandler = (e, option) => {
    e.stopPropagation();
    if (multiple) {
      console.log("multiple");
      if (value.includes(option)) {
        onChange(value.filter((o) => o != option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange(option);
      setShowOptions(close);
    }
  };

  const optionClearHandler = (e, option) => {
    e.stopPropagation();
    onChange(value.filter((o) => o != option));
  };

  return (
    <div
      className="font-[300]  flex gap-[.5em] cursor-pointer text-neutral-900 border border-neutral-400 rounded relative min-h-[1.5em] items-center w-[20rem] p-[.25em]"
      tabIndex={"0"}
      onClick={showOptionsHandler}
      onBlur={(e) => {
        console.log("blur clidked");
        setShowOptions(false);
      }}
    >
      {multiple ? (
        <div className="flex gap-[.5em] flex-grow flex-wrap ">
          {value.map((option, index) => (
            <button
              className={`rounded  border border-neutral-400 px-[4px]`}
              key={index}
              onClick={(e) => {
                optionClearHandler(e, option);
              }}
            >
              {option.label}
              &nbsp;&times;
            </button>
          ))}
        </div>
      ) : (
        <span className={`flex-grow`}>{value.label}</span>
      )}

      <button className="text-[1.5em] text-neutral-500" onClick={clearOptions}>
        &times;
      </button>
      <div className="border border-neutral-400 w-[.05rem]  self-stretch"></div>
      <div className="border border-[.25rem] border-transparent border-t-neutral-400"></div>
      <ul
        className={`${
          showOptions ? "block" : "hidden"
        } bg-white max-h-[15em] absolute top-[calc(100%+.25rem)] overflow-y-auto w-full border border-neutral-400 rounded  p-[.25em] left-0 `}
      >
        {options.map((option, index) => (
          <li
            className={`${
              ((multiple && value.map((o) => o.value).includes(option.value)) ||
                value.value == option.value) &&
              "bg-bg-brown "
            } px-[.25rem] py-[.5rem] cursor-pointer hover:bg-heading-main hover:text-white`}
            key={index}
            onClick={(e) => {
              selectOptionsHandler(e, option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
