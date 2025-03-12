import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const StoringPreviousStateValues = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count])

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default StoringPreviousStateValues