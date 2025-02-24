//action type: 

export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"

//action 

export const increment=(payload)=>({
    type: "INCREMENT",
    payload
})

export const decrement=(payload)=>({
    type: "DECREMENT",
    payload
})