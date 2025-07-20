import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import Buttons from "./components/Buttons";
const App = () => {
  const symbols = [
    { label: "%", type: "percentage" },
    { label: "( )", type: "brackets" },
    { label: "pow", type: "power" },
    { label: "deg", type: "unknown" },
    { label: "/", type: "operation" },
    { label: "*", type: "operation" },
    { label: "D", type: "delete", icon: faDeleteLeft },
    { label: "C", type: "Clear" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "-", type: "operation" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "+", type: "operation" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "0", type: "number" },
    { label: ".", type: "dot" },
    { label: "=", type: "equals" },
  ];

  // to display the number to calculate in the upper div
  const [operation, setOperation] = useState([]);
  const [result, setResult] = useState();
  const handleCalculation = (labels, type) => {
    if (labels == "C") {
      setOperation("");
      setResult("")
      return;
    }
    // could also add feature that if the button is pressed for more than 1.5 seconds it deletes everything//
    if (labels == "D") {
      setOperation((prev) => prev.slice(0, -1));
      return;
    }
    if (type=="equals")
    {
      return calculate()
    }
    setOperation((prev) => prev + labels);
   
  };

useEffect(()=>{
     console.log(operation)
   return calculate()
}, [calculate, operation]);



  return (
    <div className="bg-[#141C22] w-[430px] h-[954px] flex flex-col gap-8 border-1 border-gray-400 rounded-xl ">
      {/* This is where the results and the operation will be displayed */}
      <section className="w-full bg-[#1c252c] h-64 relative rounded-xl">
        <div className="absolute bottom-12 w-full">
          <input type="text" value={operation} onChange={()=>calculate()} className="w-full h-12  text-white text-2xl text-right px-4"/>
           
          <div className="w-full h-16 top-32 text-4xl text-right  px-4 font-semibold text-white">
            {result}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="flex w-full flex-wrap gap-5 justify-center relative ">
        {symbols.map((btns, indx) => (
          <Buttons
            key={indx}
            btns={btns}
            handleCalculation={handleCalculation}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
