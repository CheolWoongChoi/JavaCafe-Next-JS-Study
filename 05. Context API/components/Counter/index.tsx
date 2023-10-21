import { useState } from "react";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <b>Count is : {count}</b>
      <br />
      <div className="mt-4">
        <button className="border p-2" onClick={() => setCount(count + 1)}>
          Increment +
        </button>
        <button className="border p-2 ml-4" onClick={() => setCount(count - 1)}>
          Decrement -
        </button>
      </div>
    </div>
  );
}

export default Counter;
