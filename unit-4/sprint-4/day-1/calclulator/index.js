import Store from "./store.js";
import {reducer} from "./reducer.js";

const store=new Store(reducer,{
    count:0
} );

let counter=document.getElementById("counter");


counter.innerText=store.getState().count;


let increment=document.getElementById("inc");
let decrement=document.getElementById("dec");



increment.addEventListener( "click",function(){
    store.dispatch({
        type: "INCREMENT",
    })
    counter.innerText=store.getState().count;
})


decrement.addEventListener( "click",function(){
    store.dispatch({
        type: "DECREMENT",
    })
    counter.innerText=store.getState().count;
})

/// asmd

let add=document.getElementById("add");
let sub=document.getElementById("sub");
let mul=document.getElementById("mul");
let div=document.getElementById("div");

add.addEventListener("click",function(){
    let input=document.getElementById("x").value
    store.dispatch({
        type: "ADD",
    })
    counter.innerText=store.getState().count+(+input);

})

sub.addEventListener("click",function(){
    let input=document.getElementById("x").value
    store.dispatch({
        type: "SUB",
    })
    counter.innerText=store.getState().count-input;

})

mul.addEventListener("click",function(){
    let input=document.getElementById("x").value
    store.dispatch({
        type: "MUL",
    })
    counter.innerText=store.getState().count*input;

})

div.addEventListener("click",function(){
    let input=document.getElementById("x").value
    store.dispatch({
        type: "DIV",
    })
    counter.innerText=store.getState().count/input;

})
