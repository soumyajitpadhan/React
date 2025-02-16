import React from 'react'
import Third from './Third'

const Second = ({ name }) => {
    return (
        <div>
            <h2>Child</h2>
            <p style={{ border: "2px solid black", padding: "10px" }}>Not Used</p>
            <Third parentName={name} />
        </div>
    )
}

export default Second