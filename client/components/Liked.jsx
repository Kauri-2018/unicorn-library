import React from 'react'

// import books from '../../books.json'
import {Link} from 'react-router-dom'

const Liked = (props) => {
  // const book = props.match.params.id

  const getBookList = props.booksData.books.filter(book => book.like === true)

  return (
    <div className="books-liked">
      <h2>Books I liked:</h2>
      <ul>
        {getBookList.map(book => {
          return (
            <li key={book.id}>
              <Link to={`/book/${book.title}`}>
                <h3>{book.title}</h3>
              </Link>
              <div className='info-container'>
                {book.author}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Liked
