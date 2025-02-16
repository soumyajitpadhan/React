import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const InputFocus = () => {

    let inputRef = useRef(null);

    function handleInputFocus() {
        inputRef.current.focus();
    }

    // useEffect(()=>{
    //     handleInputFocus();
    // },[])

    return (
        <div>
            <input type="text" placeholder='Enter Name' ref={inputRef} />
            <button onClick={handleInputFocus}>Search</button>
        </div>
    )
}

export default InputFocus