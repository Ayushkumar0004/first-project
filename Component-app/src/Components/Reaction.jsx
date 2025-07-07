import React, { useContext } from "react";
import { TestContext } from "../App";

function Reaction() {
  const contextData = useContext(TestContext);
  console.log({contextData});

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
        {contextData.input};
    </div>
  );
}

export default Reaction;
