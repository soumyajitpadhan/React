import React from 'react'
import useInputValues from '../hooks/InputHook'

const InputContainer = () => {

    let email = useInputValues("");
    let password = useInputValues("");

    // console.log(email);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email.value)
        console.log(password.value);
        email.reset();
        password.reset();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter email' {...email} />
                <input type="password" placeholder='Enter password' {...password} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputContainer