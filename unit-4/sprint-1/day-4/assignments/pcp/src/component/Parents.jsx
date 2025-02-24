import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parents = () => {
    //parentto child
//     const[info,setInfo]=useState("")

//   return (
//     <div>Parents:
//         <input onChange={(e)=>setInfo(e.target.value)} />
//         <Child1 info={info}/>
//         <Child2/>
//     </div>
//   )

//child to parent
// const[childValue,setChildvalue]=useState("")
// return(
//     <div>parent:{childValue}
//         <Child1 childValue={childValue} setChildvalue={setChildvalue}/>
//         <Child2 />
//     </div>
// )

//child to child
const[childValue,setChildvalue]=useState("")
return(
    <div>parent:
        <Child1 childValue={childValue} setChildvalue={setChildvalue}/>
        <Child2 childValue={childValue}/>
    </div>
)
}

export default Parents
