import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="container">
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h1>Incomplete Tasks</h1>
      {loading ? (
        <p>Loading...</p>
      ) : incompleteTodos.length === 0 ? (
        <p>All tasks are completed 🎉</p>
      ) : (
        <ul className="todo-list">
          {incompleteTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <strong>ID:</strong> {todo.id} — {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
