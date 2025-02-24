import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../store/AppReducer/action'

const SingleBooks = () => {
  const {id}=useParams()

const books=useSelector((state)=> state.AppReducer.books)

const[currBook,setCurrBook]=useState({})
const dispatch =useDispatch()

useEffect(()=>{
if(books?.length==0){

  dispatch(getBooks())
}
},[dispatch,books?.length])

useEffect(()=>{
if(id){
  const temp=books.find((book)=>book.id===Number(id))

  temp && setCurrBook(temp)
}
},[books,id])

//console.log(currBook)

  return (
    <div>
      <h1>SingleBook</h1>
      <h1>{currBook?.author}</h1>
      <h3>{currBook?.category}</h3>
      <img src={currBook?.image} alt="" />
      <h4>{currBook?.book_name}</h4>
<Link to={`/books/${currBook.id}/edit`}><button>Edit Book</button></Link>
      
    </div>
  )
}

export default SingleBooks