import React, { useReducer } from 'react'

function reducerFn(state, { type, payload }) {
    switch (type) {
        case "Change Input":
            return (
                {
                    ...state,
                    [payload.name]: payload.value,
                }
            )
        case "Add User":
            return (
                {
                    ...state,
                    storeUser: [...state.storeUser, payload],
                    username: "",
                    email: "",
                    password: "",
                }
            )
        default:
            return state;
    }
}

const Form = () => {

    let initialState = {
        username: "",
        email: "",
        password: "",
        storeUser: [],
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);

    function handleChange(e) {
        dispatch({
            type: "Change Input",
            payload: {
                name: e.target.name,
                value: e.target.value,
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "Add User",
            payload: state,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='username' type="text" placeholder='Enter name' value={state.username} onChange={handleChange} />
                <input name='email' type="email" placeholder='Enter email' value={state.email} onChange={handleChange} />
                <input name='password' type="password" placeholder='Enter password' value={state.password} onChange={handleChange} />
                <input type="submit" />
            </form>

            <div>
                {
                    state.storeUser.map((user) => {
                        return (
                            <div>
                                <p><b>Username: </b>{user.username}</p>
                                <p><b>Email: </b>{user.email}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Form 