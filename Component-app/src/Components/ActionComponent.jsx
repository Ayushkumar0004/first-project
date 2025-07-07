import React, { useContext } from "react";
import { TestContext } from "../App";

function ActionComponent() {
  const { input, updateInputFunc } = useContext(TestContext);

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Add name"
        value={input}
        onChange={(e) => updateInputFunc(e.target.value)}
      />
    </div>
  );
}

export default ActionComponent;
