import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const OtpInput = () => {

    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    function handleChange(e, i) {
        if (e.target.value !== '') {
            if (i < inputRefs.length - 1) {
                inputRefs[i + 1].current.focus();
            }
        }
    }

    function handleKeyDown(e, i) {
        if (e.key === 'Backspace' && e.target.value === '') {
            if (i > 0) {
                inputRefs[i - 1].current.focus();
            }
        }
    }

    useEffect(()=>{
        inputRefs[0].current.focus();
    },[])

    return (
        <div>
            {
                inputRefs.map((ele, i) => {
                    return (
                        <input
                            key={i}
                            type="text"
                            ref={ele}
                            maxLength='1'
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                    )
                })
            }
        </div>
    )
}

export default OtpInput