//Create ActionCreator functions here

import axios  from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios({
        method: 'post',
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payload

    })
    .then((r)=>dispatch({type:LOGIN_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:LOGIN_FAILURE}))
}