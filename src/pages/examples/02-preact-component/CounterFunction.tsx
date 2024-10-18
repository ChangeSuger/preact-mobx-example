import { useState } from 'preact/hooks';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment} class="w-6 text-center cursor-pointer">+</button>
      <div class="inline-block w-10 text-center">{count}</div>
      <button onClick={decrement} class="w-6 text-center cursor-pointer">-</button>
    </div>
  );
}

export const counterCode = `
import { useState } from 'preact/hooks';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment} class="w-6 text-center cursor-pointer">+</button>
      <div class="inline-block w-10 text-center">{count}</div>
      <button onClick={decrement} class="w-6 text-center cursor-pointer">-</button>
    </div>
  );
}
`;
