import React from 'react'
import { useState } from 'react'
import Second from './Second';

const First = () => {

    const [name, setName] = useState("");

    return (
        <div>
            <h1>Parent</h1>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <Second name={name} />
        </div>
    )
}

export default First