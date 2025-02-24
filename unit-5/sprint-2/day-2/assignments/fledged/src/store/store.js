import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {AppReducer} from "./AppReducer/reducer"
import {AuthReducer} from "./AuthReducer/reducer"


const rootReducer = combineReducers({AppReducer,AuthReducer})

export const store=legacy_createStore(
  rootReducer,applyMiddleware(thunk)
    )