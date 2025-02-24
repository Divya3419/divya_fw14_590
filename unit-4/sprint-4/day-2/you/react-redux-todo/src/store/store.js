import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";




const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
})

export const store=legacy_createStore(rootReducer,
    applyMiddleware(thunk))

