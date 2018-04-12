import React from 'react'

// import books from '../../books.json'
import {Link} from 'react-router-dom'

const Read = (props) => {
  // const book = props.match.params.id

  const getReadList = props.booksData.books.filter(book => book.status === 3)

  return (
    <div className="books-read">
      <h2>Books I have read:</h2>
      <ul>
        {getReadList.map(book => {
          return (
            <li key={book.id}>
              <Link to={`/book/${book.title}`}>
                <h3>{book.title}</h3>
              </Link>
              <div className='info-container'>
                {book.author}
                <button>Like</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Read
