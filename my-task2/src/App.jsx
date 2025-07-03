import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  const handleAdd = () => {
    if (input.trim() === "") return
    setTodo([...todo, input])
    setInput("")
  }

  return (
    <div className='app'>
      <div className='todo-card'>
        <h1>📝Todo List</h1>
        <div className='input-group'>
          <input
            placeholder="What do you need to do?"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleAdd()
              }
            }}
          />
          <button onClick={handleAdd}>+ Add</button>
        </div>

        <div className='todo-list'>
          {todo.map((item, index) => (
            <p key={index} className='todo-item'>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;