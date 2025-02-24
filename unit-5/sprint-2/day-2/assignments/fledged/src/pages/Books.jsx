import React from 'react'
import BookList from '../component/BookList'
import FilterSort from '../component/FilterSort'


const Books = () => {
    
    return (
    <div>
<h1>Books</h1>
<div style={{display: 'grid',gridTemplateColumns:"20% 75%"}}>
  <div>
  <FilterSort/>
  </div>
<div>
<BookList/>
</div>


</div>
    </div>
  )
}

export default Books