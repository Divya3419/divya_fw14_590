import  React from 'react';
import styles from "./Todo.module.css"

export const Todo=({ele})=>{
    console.log(Todo)
    return(
        <>
        <div className={ele.completed ? styles.lineThrough : ""}></div>
        </>
    )
}
