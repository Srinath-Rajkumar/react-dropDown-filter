function DropDown({ children, label }) {
  return (
    <>
      <div className="flex flex-col w-full grow text-sm font-medium">
        <label>{label} :</label>
        <select className=" w-full flex justify-center p-2.5 border rounded-sm mt-1.5">
          <option>Select option</option>
          <option>{children}</option>
        </select>
      </div>
    </>
  );
}

export default DropDown;
