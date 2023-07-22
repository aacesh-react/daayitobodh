const Select = ({ data, style, changeHandler, name, defaultOption, id }) => {
  return (
    <div className="relative w-full ">
      <select
        id={id}
        className={` w-full ${style}  appearance-none bg-white pl-[1rem] text-gray-secondary border focus:border-green-border `}
        name={name}
        onChange={(e) => {
          changeHandler(e);
        }}
        // value={value ? value : defaultOption}
      >
        {defaultOption && (
          <option value={""} selected disabled>
            {defaultOption}
          </option>
        )}
        {data?.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="caret absolute top-4 right-4"></div>
    </div>
  );
};

export default Select;
