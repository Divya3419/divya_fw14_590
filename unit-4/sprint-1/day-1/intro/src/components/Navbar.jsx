import React from 'react'
import Contact from './Contact'
import Links from './Links'
import Logo from './Logo'

const Navbar=()=>{
    return(
        
 <div style={{backgroundColor:"black",display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"90%",margin:"auto"}}>
<Logo/>
<Links/>
<Contact/>
</div>
    
    )
}
export default Navbar