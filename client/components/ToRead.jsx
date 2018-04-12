import React from 'react'

const ToRead = (props) => {
  return (
    <p>{props.booksData.books[0].title}</p>
  )
}


export default ToRead