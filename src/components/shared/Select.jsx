const Select = ({ data, style, changeHandler, name }) => {
  return (
    <div className="relative w-full ">
      <select
        className={` w-full ${style}  appearance-none bg-white pl-[1rem] text-gray-secondary border focus:border-green-border `}
        name={name}
        onChange={(e) => {
          changeHandler(e);
        }}
      >
        {data.map((value, index) => (
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
