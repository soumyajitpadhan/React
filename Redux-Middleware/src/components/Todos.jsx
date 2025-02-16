import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/Actions';

const Todos = () => {

    const dispatch = useDispatch();

    // const todos = useSelector((state) => state.todos);

    // console.log(todos);

    const [todo, setTodo] = useState({
        title: "",
        status: ""
    })

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!todo.title || !todo.status) {
            alert("Please enter a todo and select a status.");
            return;
        }

        dispatch(addTodos(todo));
        // Component → dispatch(addTodos(todo)) → Thunk Middleware → Async API Call → dispatch({ type: ADD_TODO, payload }) → Redux Store → Reducer → Updated State → UI Re-renders
        setTodo({ title: "", status: "" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "15px" }}>
                <input name='title' value={todo.title} type="text" placeholder='Enter Todos' onChange={handleChange} />
                <select name="status" value={todo.status} id="" onChange={handleChange}>
                    <option value="">Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default Todos