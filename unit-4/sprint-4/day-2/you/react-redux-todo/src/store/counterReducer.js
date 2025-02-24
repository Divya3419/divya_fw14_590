import { loadData } from '../utils/localStorage';
import {INCREMENT,DECREMENT} from './actiontypes';

let initialState={
    count: loadData("counter") || 0,
    
}
export const counterReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case INCREMENT:{
            state.count++

            return{...state}
        }
        case DECREMENT:{
state.count--
return{...state}
        }
        default:{
            return state
        }
    }

}