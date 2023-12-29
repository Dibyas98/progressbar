import React, { useState, useEffect } from "react";
import { RotateCw } from "lucide-react";

export default function ProgressBar(props) {
  // State to manage text color
  const [textColor, setTextColor] = useState("black");

  // Effect to update text color based on the props.value of props.val
  useEffect(() => {
    // If props.val is greater than or equal to 50, set text color to white, otherwise set it to black
    if (props.val >= 50) {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }, [props.val]);

  // Styles for different color modes
  const mode = {
    black: { color: "white" },
    white: { color: "black" },
  };


  const handleRefresh = () => {

    props.refe(0);
  };

  return (
    <>
  
      <h1 style={mode[props.them]} className="text-3xl p-5 font-bold">
        Progress Bar
      </h1>

      <div className="text-center flex gap-1 items-center">

        <div className="relative inline-block w-full h-[30px] rounded-2xl border-2 overflow-hidden">

          <div
            className="h-full rounded-2xl bg-green-400 text-zinc-50 transition delay-75 ease-out absolute top-0 left-0"
            style={{ width: `${props.val}%` }}
          />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: `${textColor}` }}
          >
            {props.val}%
          </div>
        </div>
        {/* Refresh Button */}
        <RotateCw onClick={handleRefresh} style={mode[props.them]}/>
      </div>
    </>
  );
}
