import { legacy_createStore, applyMiddleware } from "redux";
import { todoReducer } from "./Reducers";
import { thunk } from 'redux-thunk';

export const store = legacy_createStore(
    todoReducer,
    applyMiddleware(thunk)
)