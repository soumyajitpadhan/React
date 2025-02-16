import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const GrandChild = () => {

    const {theme, handleTheme} = useContext(ThemeContext);

  return (
    <div>
        <h3 style={{
            border: "2px solid black",
            backgroundColor: theme ? "green" : "yellow"
        }}>Grand Child</h3>
    </div>
  )
}

export default GrandChild