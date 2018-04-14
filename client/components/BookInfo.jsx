import React from 'react'

const BookInfo = (props) => {
  const className = props.selected ? "" : "hidden"
	return (
    <div>
      <h5 className={className}>Book Id: {props.id}</h5>
      <h5 className={className}>Author: {props.author}</h5>
    </div>
  )
}

export default BookInfo