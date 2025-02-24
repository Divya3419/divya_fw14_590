import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./action.type"


export const register=(payload)=>(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`,payload)
    .then((r)=>{
        dispatch({type:REGISTER_SUCCESS,payload:r.data})
    return {type:REGISTER_SUCCESS}
    })
.catch((e)=>{
    dispatch({type:REGISTER_FAILURE,payload:e})
return {type:REGISTER_FAILURE}
})

}

export const login=(params)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios
    .post(`http://localhost:9000/auth/login`,params)
    .then((r)=>{
        dispatch({type:LOGIN_SUCCESS,payload:r.data.token})
    return {type:LOGIN_SUCCESS}
    })
.catch((e)=>{
    dispatch({type:LOGIN_FAILURE,payload:e})
return {type:LOGIN_FAILURE}
})

}
