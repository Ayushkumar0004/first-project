import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShow(true);
    } else {
      alert('Please enter a valid name');
    }
  };

  const handleClear = () => {
    setName('');
    setShow(false);
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Add your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setShow(false);
          }}
        />
        <div className="button-row">
          <button type="submit" className="button">Submit</button>
          <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
        </div>
        <h1 className={`greeting ${show ? 'fade-in' : ''}`}>
          {show ? `👋 Hello, ${name}!` : name ? `Typing: ${name}` : '👀 Waiting for your name...'}
        </h1>
      </form>
    </div>
  );
}

export default App;
