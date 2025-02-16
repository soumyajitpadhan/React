import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/Actions';

const TodoList = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    // console.log(todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                {todos.length > 0 ? todos.map((todo) => {
                    return (
                        <div style={{ border: "2px solid red", marginTop: "10px" }}>
                            <p><b>Title: </b>{todo.title}</p>
                            <p><b>Status: </b>{todo.status}</p>
                        </div>
                    )
                }) : <p>No todos found.</p>}
            </div>
        </div>
    )
}

export default TodoList



// 1️⃣ User Adds a Todo
//    → Redux Thunk sends it to Firebase (axios.post)
//    → Firebase returns an ID
//    → Redux updates state immediately
//    → UI updates instantly (data from Redux)

// 2️⃣ User Refreshes the Page
//    → Redux state is lost
//    → useEffect() triggers fetchTodos()
//    → Redux Thunk fetches all todos from Firebase (axios.get)
//    → Redux updates state with fetched todos
//    → UI re-renders (data from Firebase)
