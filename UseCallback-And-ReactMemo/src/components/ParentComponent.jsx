import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const [count, setCount] = useState(0);

    // // Without useCallback (Causing Unnecessary Re-renders)
    // const handleClick = () => {
    //     console.log("Button Clicked.")
    // }

    console.log("Parent component rendered!");

    // Using useCallback (Prevents Unnecessary Re-renders)
    const handleClick = useCallback(() => {
        console.log("Button Clicked.");
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent onClick={handleClick} />
        </div>
    )
}

export default ParentComponent

// useCallback + React.memo work together to prevent unnecessary renders.