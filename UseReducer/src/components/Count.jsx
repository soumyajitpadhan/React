import React from 'react'
import { useReducer } from 'react'

function reducerFn(state, { type, id }) {
    switch (type) {
        case "incr":
            return (
                { ...state, [id]: state[id] + 1 }
            )
        case "decr":
            return (
                { ...state, [id]: state[id] - 1 }
            )
        default:
            return state;
    }
}

const Count = () => {

    let initialState = {
        countA: 0,
        countB: 1,
        countC: 2,
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);

    return (
        <div>
            <button style={{
                width: "50px",
                height: "50px",
                marginLeft: "15px",
                cursor: "pointer",
                fontSize: "18px"
            }} onClick={() => dispatch({ type: "incr", id: "countA" })}>{state.countA}</button>
            <button style={{
                width: "50px",
                height: "50px",
                marginLeft: "15px",
                cursor: "pointer",
                fontSize: "18px"
            }} onClick={() => dispatch({ type: "decr", id: "countB" })}>{state.countB}</button>
            <button style={{
                width: "50px",
                height: "50px",
                marginLeft: "15px",
                cursor: "pointer",
                fontSize: "18px"
            }} onClick={() => dispatch({ type: "incr", id: "countC" })}>{state.countC}</button>
        </div>
    )
}

export default Count