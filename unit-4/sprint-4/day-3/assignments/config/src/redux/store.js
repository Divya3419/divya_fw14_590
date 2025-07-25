import { legacy_createStore as createStore, combineReducers } from "redux";
import authReducer from "./Auth/loginReducer";


import { todoReducer2 } from "./Todo/todoReducer";

const rootReducer = combineReducers({
  todos2: todoReducer2,
   auth:authReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
