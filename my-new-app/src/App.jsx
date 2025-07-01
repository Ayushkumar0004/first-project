import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello from AYUSH</h1>
      <p>This is my small paragraph.</p>
      <p>Current count: {count}</p>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Decrease count
      </button>
      <button
        onClick={() => {
          if (count < 10) setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

export default App;
