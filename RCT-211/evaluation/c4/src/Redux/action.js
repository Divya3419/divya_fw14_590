import axios from "axios"
import { DELETE_COUNTRY_FAILURE, DELETE_COUNTRY_REQUEST, DELETE_COUNTRY_SUCCESS, GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, UPDATE_COUNTRY_FAILURE, UPDATE_COUNTRY_REQUEST, UPDATE_COUNTRY_SUCCESS } from "./actionTypes"

export const getCountries=(params)=>(dispatch)=>{
    dispatch({type:GET_COUNTRIES_REQUEST})
    axios.get("http://localhost:8080/countries",params)
    .then((r)=>dispatch({type:GET_COUNTRIES_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:GET_COUNTRIES_FAILURE,payload:e}))
}


export const updateTask=(id,payload)=>(dispatch)=>{
    dispatch({type:UPDATE_COUNTRY_REQUEST})
    return axios
    .patch(`http://localhost:8080/countries/${id}`,payload)
    .then((r)=>dispatch({type:UPDATE_COUNTRY_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:UPDATE_COUNTRY_FAILURE,payload:e}))
}


export const deleteCountry=(data)=>(dispatch)=>{

    dispatch({type:DELETE_COUNTRY_REQUEST})
    return axios
    .patch(`http://localhost:8080/countries/${data}`)
    .then((r)=>dispatch({type:DELETE_COUNTRY_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:DELETE_COUNTRY_FAILURE,payload:e}))
}


