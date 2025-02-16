import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Todos = () => {

    const URL = "https://practice-d1c6c-default-rtdb.firebaseio.com/crud.json"

    let [todo, setTodo] = useState({
        title: "",
        status: "",
    });

    const [data, setData] = useState([])
    const [editId, setEditId] = useState(null);
    const [editTask, setEditTask] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let todoData = {
            ...todo,
        }

        try {
            const response = await axios.post(URL, todoData);
            // console.log('Todo added successfully.', response.data);
            setTodo({
                title: "",
                status: "",
            })
            getTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getTodos() {
        try {
            let response = await axios.get(URL);
            let result = response.data;

            // console.log(result) ;

            let todosArray = [];
            for (let id in result) {
                todosArray.push({ id, ...result[id] });
            }
            // console.log(todosArray);
            setData(todosArray);
        }
        catch (error) {
            console.log(error);
        }
    }


    function handleEditClick(todo) {
        setEditId(todo.id);
        setEditTask(todo.title);
    }

    async function handleEditSubmit(id) {
        try {
            let editURL = `https://practice-d1c6c-default-rtdb.firebaseio.com/crud/${id}.json`;
            await axios.patch(editURL, { title: editTask });
            alert("Task updated successfully.");
            setEditId(null);
            getTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {
        try {
            let deleteURL = `https://practice-d1c6c-default-rtdb.firebaseio.com/crud/${id}.json`;
            await axios.delete(deleteURL);
            alert("Todo deleted successfully.");
            getTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <div>
            <div>
                <h1>Todos</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            name='title'
                            type="text"
                            placeholder='Enter title'
                            value={todo.title}
                            onChange={handleChange}
                        />
                        <select
                            name='status'
                            value={todo.status}
                            onChange={handleChange}
                        >
                            <option value="">Status</option>
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                        </select>
                        <input type="submit" value='Add Todo' />
                    </form>
                </div>
            </div>

            <div>
                <h3>Todos Lists</h3>
                <ul>
                    {
                        data.length > 0 ? (
                            data.map((todo) => {
                                return (
                                    <li key={todo.id}>
                                        <p>{todo.title}</p>
                                        <p>{todo.status}</p>
                                        <button onClick={() => handleEditClick(todo)}>Edit</button>
                                        {
                                            editId === todo.id && (
                                                <div>
                                                    <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                                                    <button onClick={() => handleEditSubmit(todo.id)}>Save</button>
                                                </div>
                                            )
                                        }
                                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                    </li>
                                )
                            })
                        ) : (
                            <p>No todos available.</p>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todos