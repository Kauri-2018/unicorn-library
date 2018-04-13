import React from 'react'
// import {Link} from 'react-router-dom'

class Reading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      update: {
        id: -1,
        status: 0
      }
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  getReadingList (booksArr) {
    const readingArr = booksArr.filter(book => book.status === 2)
    return readingArr
  }

  handleAdd (book) {
    const update = {
      id: book.id,
      status: 3
    }
    this.props.updateStatus(update)
  }

  render () {
    const readingList = this.getReadingList(this.props.booksData.books)
    return (
      <div className="books-reading">
        <h2>Books I am reading:</h2>
        <ul>
          {readingList.map(book => {
            return (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <button onClick={() => this.handleAdd(book)}>
                  Add To Read
                </button>
                <button>Del</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Reading
