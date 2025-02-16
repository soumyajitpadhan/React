import React from 'react'

const Third = ({ parentName }) => {
    return (
        <div>
            <h3>Grand Child</h3>
            <p style={{ border: "2px solid red", padding: "10px" }}>{parentName}</p>
        </div>
    )
}

export default Third