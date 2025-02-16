import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const FETCH_TODO = "FETCH_TODO";

const BASE_URL = "https://practice-d1c6c-default-rtdb.firebaseio.com/todos.json";

export function addTodos(todo) {
    return async (dispatch) => {
        try {
            const response = await axios.post(BASE_URL, todo);

            dispatch({
                type: ADD_TODO,
                payload: { id: response.data.name, ...todo }
            })

            // // Fetch latest todos from Firebase after adding a new one
            // dispatch(fetchTodos());
        }
        catch (error) {
            console.error("Error adding todo: ", error);
        }
    }
}

// Component → dispatch(addTodos(todo)) → Thunk Middleware → Async API Call → dispatch({ type: ADD_TODO, payload }) → Redux Store → Reducer → Updated State → UI Re-renders

export function fetchTodos() {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL);
            // let result = response.data;
            // let todos = [];
            // for (let id in result) {
            //     todos.push({ id, ...result[id] })
            // }

            const todos = response.data ? Object.keys(response.data).map((key) => {
                return {
                    id: key,
                    ...response.data[key]
                }
            }) : [];

            dispatch({
                type: FETCH_TODO,
                payload: todos
            })

        }
        catch (error) {
            console.error("Error fetching todos:", error);
        }
    }
}


