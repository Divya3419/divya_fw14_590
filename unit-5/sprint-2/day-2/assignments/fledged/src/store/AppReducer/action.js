import axios from "axios"
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./action.type"


export const getBooks=(params)=>(dispatch)=>{
    dispatch({type:GET_BOOKS_REQUEST})
    axios.get("http://localhost:8080/books",params)
    .then((r)=> dispatch({type:GET_BOOKS_SUCCESS,payload:r.data}))
    .catch((e)=> dispatch({type:GET_BOOKS_FAILURE}))
}
