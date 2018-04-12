import React from 'react'

// import books from '../../books.json'
import {Link} from 'react-router-dom'

const Reading = (props) => {
  // const book = props.match.params.id

  const getReadingList = props.booksData.books.filter(book => book.status === 2)

  return (
    <div className="books-reading">
      <h2>Books I am reading:</h2>
      <ul>
        {getReadingList.map(book => {
          return (
            <li key={book.id}>
              <Link to={`/book/${book.title}`}>
                <h3>{book.title}</h3>
              </Link>
              <div className='info-container'>
                {book.author}
                <button>Read</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Reading
