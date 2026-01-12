import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count === 10) {
      setMessage("⚠️ Maximum limit reached!");
        setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }
    setCount(count + 1);
    setMessage("");
  };

  const decrement = () => {
    if (count === 0) {
      setMessage("⚠️ You can't go below zero!");
     setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }
    setCount(count - 1);
    setMessage("");
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-72 text-center">
        <h1 className="text-xl font-bold mb-4">Smart Counter</h1>

        <p className="text-4xl font-semibold mb-4">{count}</p>

        {message && <p className="text-2xl text-red-500 mb-3">{message}</p>}

        <div className="flex justify-between">
          <button
            onClick={decrement}
            className={`bg-red-700 px-4 py-2 text-white rounded`}
          >
            -
          </button>

          <button
            onClick={reset}
            className={`bg-blue-700 px-4 py-2 text-white rounded`}
          >
            Reset
          </button>

          <button
            onClick={increment}
            className={`bg-green-700 px-4 py-2 text-white rounded`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
