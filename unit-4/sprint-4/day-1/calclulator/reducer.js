export const reducer=(state,action) =>{
switch (action.type){
    case "INCREMENT":{
        return{
            ...state,
            count:state.count++,
        };
    }

  case "DECREMENT":{
      return{
          ...state,
          count:state.count--,
      }
  }
  case "ADD":{
    return{
        ...state,
        count:state.count,
    }
}
case "SUB":{
    return{
        ...state,
        count:state.count,
    }
}

case "MUL":{
    return{
        ...state,
        count:state.count,
    }
}

case "DIV":{
    return{
        ...state,
        count:state.count,
    }
}
  default :{
      return state;
  }
}
}