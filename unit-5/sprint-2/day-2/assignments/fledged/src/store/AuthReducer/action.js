import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./action.type"


export const login=(payload)=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})
    return axios({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payload
    })
    .then((r)=> dispatch({type:AUTH_SUCCESS,payload:r.data}))
    .catch((e)=> dispatch({type:AUTH_FAILURE}))
}