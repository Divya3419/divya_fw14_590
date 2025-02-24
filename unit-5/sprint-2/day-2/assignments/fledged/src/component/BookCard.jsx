import React from 'react'

const BookCard = ({bookData}) => {

  return (
    
    <div>
      <img src={bookData.image} alt="" />
      <p>{bookData.book_name}</p>
      <p>{bookData.release_year}</p>
      <p>{bookData.category}</p>
    </div>
    
  )
}

export default BookCard