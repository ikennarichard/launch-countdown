import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <h1>
        Count is:
        {count}
      </h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default App;
