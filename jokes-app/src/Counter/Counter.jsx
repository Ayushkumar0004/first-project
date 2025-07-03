import Rating from '@mui/material';
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = props;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000);
    return () => {
      clearInterval(interval);
    }
   }, []);

  return (
        <div>
          <p> count: {count}</p>
        </div>
      );
}
export default Counter;