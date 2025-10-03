import { useState, useEffect } from "react";
import DropDown from "./component/DropDown";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("dependency_data.json");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function findAvailableOptions(key) {
    if (!data) {
      return [];
    }
    const options = data.map((vehicle) => vehicle[key]);
    return [...new Set(options)];
  }

  console.log("Data:", data);
  console.log("Fuel options:", findAvailableOptions("fuel_type"));

  return (
    <>
      <div className="flex gap-1.5 m-2.5">
        <DropDown
          label={"Fuel Type"}
          options={findAvailableOptions("fuel_type")}
        />
        <DropDown label="Make" options={findAvailableOptions("make")} />
        <DropDown label="Model" options={findAvailableOptions("model")} />
      </div>
    </>
  );
}

export default App;
