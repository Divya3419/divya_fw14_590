import React from 'react';
const List=()=>{
    return(
        <>
        <h1>Mobile Operating System</h1>
        <ul>
            <li>Android</li>
            <li>Blckberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>

        <h1>Mobile Manufacturers</h1>
        <ul style={{lineHeight:'40px'}}>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li style={{listStyleType:'circle'}}>Apple</li>
        </ul>
        
        <ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
 
        
        </>
        
    )
}


export default List