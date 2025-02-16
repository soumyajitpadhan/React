import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/action';

const Counter = () => {

    let count = useSelector((state) => state.count); //state refers to the entire Redux store state. state.count refers to the specific part of the state that you are interested in—in this case, the count value.
    let dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
        </div>
    )
}

export default Counter


// dispatch(increment()) → Redux Store → CounterReducer → Updates State → React Component Re-renders.