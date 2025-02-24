import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ||compose

export const store=legacy_createStore(reducer,
    composeEnhancers(applyMiddleware(thunk)))

//without fancy
//export const store=legacy_createStore(reducer,applyMiddleware(thunk))