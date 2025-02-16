import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Parent = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={handleTheme}>Toggle</button>
            <div style={{
                marginTop: "30px",
                width: "300px",
                height: "300px",
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                backgroundColor: theme ? "green" : "yellow"
            }}>
                Theme Context
            </div>
        </div>
    )
}

export default Parent