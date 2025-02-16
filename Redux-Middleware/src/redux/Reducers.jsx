import { ADD_TODO, FETCH_TODO } from "./Actions"

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case FETCH_TODO:
            return {
                ...state,
                todos: payload
            }
        default:
            return state;
    }
}