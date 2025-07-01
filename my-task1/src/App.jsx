import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
;

  return (
    <div>
      <div>
        <input
          placeholder='Ayush'
          onChange={(event) => {
            setName(event.target.value);
            setShow(false);
          }}
        />
        <button onClick={() => setShow(true)}>Submit</button>
        <h1>{show ? `Hello ${name}` : 'null'}</h1>
      </div>
    </div> 
  );
}

export default App;
