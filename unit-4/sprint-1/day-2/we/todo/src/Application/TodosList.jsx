import React from 'react'
import styles from './Todo.module.css';
const TodosList = ({data}) => {
  return (
    <div>
        {data.map((ele)=>{
            return <div className={styles.list} key={ele.id}>
                <p>{ele.title}</p>
                <div className={styles.circle}>
                  <div className={styles.inner}></div>
                </div>
            </div>
        })}
    </div>
  )
}

export default TodosList