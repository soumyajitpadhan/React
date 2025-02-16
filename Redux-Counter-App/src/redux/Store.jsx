import { combineReducers, legacy_createStore } from 'redux'
import { CounterReducer } from './reducer'

export const store = legacy_createStore(CounterReducer);



// export const rootReducer = combineReducers({
//     CounterReducer,
//     AuthReducer,
// })

// export const store = legacy_createStore(rootReducer);
