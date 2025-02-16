import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Computations = () => {

    let [number, setNumber] = useState(0);
    let [theme, setTheme] = useState(false);

    let factorial = (num) => {
        console.log("Computations in progress...")
        if (num <= 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    let result = useMemo(() => factorial(number), [number]);

    return (
        <div style={{ backgroundColor: theme ? "aqua" : "teal", color: theme ? "black" : "white" }}>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h2>Factorial of the {number} is {result}</h2>
            {/* <h2>Factorial of the {number} is {factorial(number)}</h2> */}
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
        </div>
    )
}

export default Computations