//Create ActionCreator functions here

import { GET_SHOES_FAILURE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS } from "./actionTypes"

export const getShoesRequest=()=>{
    return {type:GET_SHOES_REQUEST}
}

export const  getShoesSuccess=(payload)=>{
    return {type:GET_SHOES_SUCCESS,payload}
}


export const getShoesFailure=()=>{
    return {type:GET_SHOES_FAILURE}
}

