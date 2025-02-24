import React from 'react'

const Child1 = (props) => {
    //parent to child
//   return (
//     <div>Child1

//     <div>{props.info}</div>

//     </div>
//   )

//child to parent

// return(
//     <div>child1:{props.childValue}
//         <input onChange={(e)=> props.setChildvalue(e.target.value)} />
//     </div>
// )

//child to child
const handleChange=(e)=> {
    props.setChildvalue(e.target.value);
}
return(
    <div>child1:{props.childValue}
        <input onChange={handleChange} />
     </div>
)
}

export default Child1