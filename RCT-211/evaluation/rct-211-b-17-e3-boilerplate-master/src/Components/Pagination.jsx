import { useState } from "react";
import styles from "../Components/Pagination.css"
export const Pagination = ({ total, selected, onPageChange }) => {
 // console.log(total,selected, onPageChange)
  const [page,setPage]=useState(selected)
let arr=new Array(total).fill(0)
  return (
  <div 
  style={{display:"flex", gap:"20px"}}
   className="pageContainer">

<button
className="prev"
disabled={page===1}
onClick={()=>setPage(page-1)}
data-testid="prev1"
>PREV</button>

{arr.map((ele,index)=>{
  return (
    <div key={index} 
    className={`${styles.page} ${page === index + 1 ? `${styles.selected}` : ""}`}>{index+1}
    </div>
  )
})}

<button
disabled={page === total}
className="next"
onClick={()=>setPage(page+1)}
data-testid="next1"
>
  NEXT
</button>

  </div>
  )
};
