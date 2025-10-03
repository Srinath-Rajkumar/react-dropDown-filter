function DropDown({ options, label, onChange }) {
  return (
    <>
      <div className="flex flex-col w-full grow text-sm font-medium">
        <label>{label} :</label>
        <select
          className=" w-full flex justify-center p-2.5 border rounded-sm mt-1.5"
          onChange={onChange}
        >
          <option value="">Select {label}</option>
          {options &&
            options.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
}

export default DropDown;
