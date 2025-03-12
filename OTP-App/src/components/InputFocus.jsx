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
            <input type="text" ref={inputRef} />
            <button onClick={handleInputFocus}>Focus Input</button>
        </div>
    )
}

export default InputFocus