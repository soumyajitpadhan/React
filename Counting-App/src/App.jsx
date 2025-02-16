import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  function handleCount(e) {
    let operation = e.target.name;

    if (operation === 'decr') {
      setCount(count - 1);
    }
    else if (operation === 'reset') {
      setCount(0);
    }
    else if (operation === 'incr') {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button name='decr' onClick={handleCount}>Decrement</button>
        <button name='reset' onClick={handleCount}>Reset</button>
        <button name='incr' onClick={handleCount}>Increment</button>
      </div>
    </div>
  )
}

export default App
