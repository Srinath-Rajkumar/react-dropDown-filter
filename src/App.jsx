import { useState, useEffect } from "react";
import DropDown from "./component/DropDown";

function App() {
  const [data, setData] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

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
    // if (!data) {
    //   return [];
    // }
    const filteredData = filterAvailableVechicles();

    if (filteredData.length === 0) {
      return [];
    }
    const options = filteredData.map((vehicle) => vehicle[key]);
    return [...new Set(options)];
  }

  // console.log("Data:", data);
  // console.log("Fuel options:", findAvailableOptions("fuel_type"));

  function filterAvailableVechicles() {
    if (!data) return [];

    let filteredVehicleData = data;

    if (selectedFuelType !== "") {
      filteredVehicleData = filteredVehicleData.filter(
        (vehicle) => vehicle.fuel_type === selectedFuelType
      );
    }
    console.log("fuel type", filteredVehicleData);
    if (selectedMake !== "") {
      filteredVehicleData = filteredVehicleData.filter(
        (vehicle) => vehicle.make === selectedMake
      );
    }
    console.log("make", filteredVehicleData);
    if (selectedModel !== "") {
      filteredVehicleData = filteredVehicleData.filter(
        (vehicle) => vehicle.model === selectedModel
      );
    }
    console.log("model", filteredVehicleData);
    return filteredVehicleData;
  }

  return (
    <>
      <div className="flex gap-1.5 m-2.5">
        <DropDown
          label={"Fuel Type"}
          options={findAvailableOptions("fuel_type")}
          onChange={(e) => setSelectedFuelType(e.target.value)}
          value={selectedFuelType}
        />
        <DropDown
          label="Make"
          options={findAvailableOptions("make")}
          onChange={(e) => setSelectedMake(e.target.value)}
          value={selectedMake}
        />
        <DropDown
          label="Model"
          options={findAvailableOptions("model")}
          onChange={(e) => setSelectedModel(e.target.value)}
          value={selectedModel}
        />
      </div>
    </>
  );
}

export default App;
