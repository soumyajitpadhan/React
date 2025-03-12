import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const PersistingValues = () => {
    const countRef = useRef(0);
    const [render, setRender] = useState(0);

    const increment = () => {
        countRef.current += 1;
        console.log("Current count: ", countRef.current);
    }

    return (
        <div>
            <p>Render count: {render}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setRender(render + 1)}>Re-render</button>
        </div>
    )
}

export default PersistingValues


// Values in useRef persist across renders.
// Modifying useRef does not trigger a re-render.
// Re-rendering the component does not reset useRef values.