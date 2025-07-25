import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case GET_SHOES_DATA_REQUEST:{
      return {...state,isLoading:true,isError:false}
    }

    case GET_SHOES_DATA_SUCCESS:{
      return {...state,isLoading:true,isError:false,shoes:payload}
    }
    case GET_SHOES_DATA_FAILURE:{
      return {...state,isLoading:false,isError:true}
    }
    default:
      return state;
    
  }
  
};
