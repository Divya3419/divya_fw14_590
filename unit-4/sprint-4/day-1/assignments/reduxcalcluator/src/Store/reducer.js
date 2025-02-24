import { COUNTER_DECREMENT, COUNTER_INCREMENT,COUNTER_INCBYX, COUNTER_DECBYX, COUNTER_MULTIBYX, COUNTER_DIVIDEBYX} from "./action.types"

let initialState={
    count:0,
}
export const reducer=(state=initialState,action)=>{
    console.log(state,action)

    switch(action.type){
        case COUNTER_INCREMENT:{
        
            return {...state,count:state.count+1}
            
        }
        case COUNTER_DECREMENT:{
           
            return {...state,count:state.count-1}
        }

        case COUNTER_INCBYX :{
          
            return {...state,count:state.count+action.payload}
        }
        case COUNTER_DECBYX :{
           
            return {...state,count:state.count-action.payload}
        }
        case COUNTER_MULTIBYX :{
        
            return {...state,count:state.count*action.payload}
        }
        case COUNTER_DIVIDEBYX :{
        
            return {...state,count:state.count/action.payload}
        }

        default:{ 
            return state
        }
    }
   
    
    
}