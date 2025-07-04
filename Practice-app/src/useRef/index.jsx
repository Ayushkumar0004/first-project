// import React, { useRef, useState } from 'react';

// function RefComponent() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);

//   const handleClick = () => {
//     setCount(count + 1);
//     countRef.current = 150;
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <p>You clicked {countRef.current} times</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default RefComponent;