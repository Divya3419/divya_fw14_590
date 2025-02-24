import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getBooks } from '../store/AppReducer/action'
import BookCard from './BookCard'

const BookList = () => {
 
    const dispatch=useDispatch()
    const books=useSelector((state)=> state.AppReducer.books)
  const[searchParams]=useSearchParams()
    const location=useLocation()

 
useEffect(()=>{
if(books.length===0 || location.search){
  const sortBy=searchParams.get('sortBy');
  let getBooksParams={
    params:{
      category:searchParams.getAll("category"),
      _sort:sortBy && "release_year",
      _order:sortBy
    }
}

dispatch(getBooks(getBooksParams))
}
},[ location.search])
    //console.log(books)
 
  return (
    
    <div>
        {books.length>0 && 
        books.map((singleBook)=>{
            return <div key={singleBook.id}>
            <Link to={`/books/${singleBook.id}`}>
              <BookCard bookData={singleBook}/></Link>  
              </div>
            
        })
        }
    </div>
    
  )
}

export default BookList