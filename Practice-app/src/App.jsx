import { useState , useEffect} from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//     <div className='container'>
//       <p className='count'>Count is: {count}</p>
//       <button onClick={() => setCount(count + 1)} className='button'> Increment </button>
//       <button onClick={() => setCount(count - 1)}className='button'> Decrement </button>
//       <button onClick={() => setCount(0)} className='button'> Reset </button>

//     </div>
//     </>
//   )
// }

// export default App



// 2 Dark light mode toggle

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggle = () => setDarkMode(prev => !prev);

//   return (
//     <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//       <h1 className='heading'>Dark/Light Mode Toggle</h1>
//       <div className='container'>
//         <button onClick={toggle}>
//           {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// 3 Image change on button click


// function App() {
//   const imageUrls = [
//     "https://picsum.photos/seed/1/400/300",
//     "https://picsum.photos/seed/2/400/300",
//     "https://picsum.photos/seed/3/400/300",
//     "https://picsum.photos/seed/4/400/300",
//     "https://picsum.photos/seed/5/400/300",
//     "https://picsum.photos/seed/6/400/300",
//     "https://picsum.photos/seed/7/400/300",
//     "https://picsum.photos/seed/8/400/300",
//     "https://picsum.photos/seed/9/400/300",
//     "https://picsum.photos/seed/10/400/300",
//   ];

//   const [index, setIndex] = useState(0);

//   // Preload all images
//   useEffect(() => {
//     imageUrls.forEach((url) => {
//       const img = new Image();
//       img.src = url;
//     });
//   }, []);

//   return (
//     <div className='container'>
//       <h1 className='heading'>Image Change on Button Click</h1>
//       <img src={imageUrls[index]} className='image' alt='Slide' />
//       <button onClick={() => setIndex((index - 1) % imageUrls.length)}>
//         Previos Image
//       </button>
//       <button onClick={() => setIndex((index + 1) % imageUrls.length)}>
//         Next Image
//       </button>

//     </div>
//   );
// }

// export default App;

// 4 Stopwatch Timer

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => 
//     {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const toggle = () => {
//     setIsRunning(prev => !prev);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setSeconds(0);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Stopwatch</h1>
//       <h2>{seconds}s</h2>
//       <button onClick={toggle}>
//         {isRunning ? 'Pause' : 'Start'}
//       </button>
//       <button onClick={reset} style={{ marginLeft: '10px' }}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;


function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = 150;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>You clicked {countRef.current} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;