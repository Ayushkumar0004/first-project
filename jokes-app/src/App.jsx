import React, { useState, useEffect } from "react";
import "./App.css";
import Mui from "./Mui/Mui";
import Counter from "./Counter/Counter";

// function Jokes() {
//   const [joke, setJoke] = useState("");

//   const getDadJoke = () => {
//     fetch("https://v2.jokeapi.dev/joke/Any?type=single")
//       .then((res) => res.json())
//       .then((data) => {
//         setJoke(data.joke);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         setJoke("Failed to load joke.");
//       });
//   };

//   useEffect(() => {
//     getDadJoke();
//   }, []);

//   return (
//     <div className="jokes-container">
//       <h1>🤣 Dad Jokes</h1>
//       <p className="joke-button">{joke}</p>
//       <button onClick={getDadJoke}>Get Another Joke</button>
//     </div>
//   );
// }

function App() {
  const [input, setInput] = useState("");
  const [toDO, setTodo] = useState([]);
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className={dark ? "container dark-mode" : "container"}>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;