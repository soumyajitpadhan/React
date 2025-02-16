import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Child = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1 style={{
                color: theme ? "green" : "yellow"
            }}>Child Component</h1>
            {/* <button onClick={handleTheme}>Toggle Color</button> */}
        </div>
    )
}

export default Child