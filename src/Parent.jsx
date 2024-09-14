import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentState, setParentState] = useState("Hello from this side");
  return (
    <div className="flex justify-center items-center h-screen">
      <Child message={parentState} setMessage={setParentState} />
    </div>
  );
};

export default Parent;
