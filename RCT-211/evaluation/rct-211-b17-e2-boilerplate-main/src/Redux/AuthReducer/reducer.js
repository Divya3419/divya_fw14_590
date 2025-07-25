import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{type,payload}) => {
switch(type){
  case LOGIN_REQUEST:{
    return{...state,isLoading:true,isError:false}
  }

  case LOGIN_SUCCESS:{
    return{...state,
      isLoading:false,
      isError:false,
      data:{isAuth:true,token:payload}
    }
  }

  case LOGIN_FAILURE:{
    return{...state,
      isLoading:false,
      isError:true,
      data:{isAuth:false,token:""}
    }
  }
  default: 
  return state;
}
  
};
