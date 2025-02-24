import  React from 'react';
import styles from'./List.module.css'

const ListEm=()=>{
    console.log(styles)
    return(
        <h1 className={styles.header}>Student list</h1>
    )
}

export default ListEm