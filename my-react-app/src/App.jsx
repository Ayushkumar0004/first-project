// import { useState } from "react";

// function Counter(props) {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//       <button onClick={() => setCounter(0)}>Reset</button>
//     </>
//   );
// }

// export default Counter;


import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Click a Button to Change Background</h1>
      <div>
        <button onClick={() => changeBackground('red')} style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
          Red
        </button>
        <button onClick={() => changeBackground('blue')} style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
          Blue
        </button>
        <button onClick={() => changeBackground('green')} style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
