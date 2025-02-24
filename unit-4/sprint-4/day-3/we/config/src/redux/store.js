import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "../redux/Counter/reducer"
// import { todoReducer } from "./Todo/todoReducer"

import {todoReducer2} from "./Todo/todoReducer"

const rootReducer = combineReducers({
  // todos: todoReducer,
  count: counterReducer,
  todos2: todoReducer2
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);