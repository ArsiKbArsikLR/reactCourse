import { useState } from 'react';
import './Counter.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 5) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};