import React from 'react'

let links=[
  {
    "id":"1",
    "value":"Services"
  },
  {
    "id":"2",
    "value":"Projects"
  },
  {
    "id":"3",
    "value":"About"
  },
]
const Links = () => {
  return (
    <div style={{color:"white",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {links.map(ele=>(
          <p key={ele.id}>{ele.value}</p>
        ))}
    </div>
  )
}

export default Links