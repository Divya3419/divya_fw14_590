import {applyMiddleware,compose} from "redux";

import{ legacy_createStore as createStore} from "redux"

import {reducer} from "./reducer";


const middlware1=(store)=>(next)=>(action)=>{
  
    console.log(action);
    next(action)
}

const middlware2=(store)=>(next)=>(action)=>{
  
  console.log(action);
  next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middleware=[middlware1,middlware2];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
export const store=createStore(reducer, enhancer)

store.subscribe(()=>{
  console.log(store.getState());

})