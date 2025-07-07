// use REF
// import React, { useRef } from 'react';

// const { createContext } = require("react");

// function RefComponent() {
//   const myDomRef = useRef(null);

//   return (
//     <div>
//       <h1 ref={myDomRef}>Reference Component</h1>
//       <button
//         onClick={() => {
//           myDomRef.current.innerHTML = 'My updated value!';
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// }

// export default RefComponent;

// import React, { useRef } from 'react';
// function App()
// {
//   const myDom = useRef(null);
//   return (
//     <div>
//       <h1 ref={myDom}> My DOM Ref! </h1>
//       <button onClick={() => {
//         myDom.current.innerHTML = "My updated value!"
//       }
//       }> Click </button>
//     </div>
//   )
// }
// export default App;

// import React, { useCallback, useState } from "react";

// // Child component
// function ButtonComp({ handleIncrease }) {
//   console.log("Hello, child rendered!");
//   return <button onClick={handleIncrease}>Increase</button>;
// }

// // Memoized version of ButtonComp
// const MemoBtnComp = React.memo(ButtonComp);

// // Parent component
// function CallBackComp() {
//   const [count, setCount] = useState(0);
//   const [click, setClick] = useState(false); // fixed typo in variable name

//   // Memoized function to increase the counter
//   const increaseCounter = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, [click]); // Re-created when 'click' changes

//   return (
//     <div>
//       <p>Count value is: {count}</p>

//       {/* Using memoized child */}
//       <MemoBtnComp handleIncrease={increaseCounter} />
      
      
//       {/* Toggle 'click' state to force re-creation of the callback */}
//       <button onClick={() => setClick(!click)}>Click here again</button>
//     </div>
//   );
// }


import { createContext, useState } from "react";
import "./App.css";

import ActionComponent from "./Components/ActionComponent";
import Reaction from "./Components/Reaction";

export const TestContext = createContext();

function App() {

  const [input, setIn put] = useState("");

  const updateInput = (value) => {
    setInput(value);
  }
  return (
    <TestContext.Provider value={{ updateInputFunc: updateInput , input}}>
      <div className="container-light">
        <ActionComponent />
        <Reaction />
      </div>
    </TestContext.Provider>
  );
}

export default App;

