import { legacy_createStore } from "redux";

import reducer from'./reducer';

const initialState ={
    
    todo:[]
}

export const store =legacy_createStore(reducer,initialState);