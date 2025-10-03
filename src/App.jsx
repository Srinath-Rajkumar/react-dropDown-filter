import { useState ,useEffect } from "react";
import DropDown from "./component/DropDown";

function App() {


  return (
    <>
      <div className="flex gap-1.5 m-2.5">
        <DropDown label={"Fuel Type"}>Test</DropDown>
        <DropDown label={"Make"}>Test</DropDown>
        <DropDown label={"Model"}>Test</DropDown>
      </div>
    </>
  );
}

export default App;
