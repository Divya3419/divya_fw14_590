import { COUNTER_DECBYX, COUNTER_DECREMENT, COUNTER_DIVIDEBYX, COUNTER_INCBYX, COUNTER_INCREMENT, COUNTER_MULTIBYX } from "./action.types";

export const add=()=>
    ({type:COUNTER_INCREMENT})

    export const sub=()=>
    ({type:COUNTER_DECREMENT})

    export const addbyx=(value)=>
    ({type:COUNTER_INCBYX,payload:value})

    export const subbyx=(value)=>
    ({type:COUNTER_DECBYX,payload:value})

    export const multibyx=(value)=>
    ({type:COUNTER_MULTIBYX,payload:value})

    export const dividebyx=(value)=>
    ({type:COUNTER_DIVIDEBYX,payload:value})