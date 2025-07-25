import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from "./AppReducer/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

// NOTE: use this store variable to create a store.

const rootReducer=combineReducers({AppReducer,AuthReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
