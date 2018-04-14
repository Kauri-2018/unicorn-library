import React from 'react'

import BookInfo from './BookInfo'

class Reading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      update: {
        id: -1,
        status: 0
      },
      selectedBook: 0      
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.onSelect = this.onSelect.bind(this)
    
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

  handleDel (book) {
    const update = {
      id: book.id
    }
    this.props.deleteBook(update)
  }

  onSelect (id) {
    this.setState({
      selectedBook: id
    })
  }

  render () {
    const readingList = this.getReadingList(this.props.booksData.books)
    const selectedBook = this.state.selectedBook    
    return (
      <div className="books-reading">
        <h2>Books I am reading:</h2>
        <ul>
          {readingList.map(book => {
            return (
              <div key={book.id}>
                <h3  onClick={() => this.onSelect(book.id)}>{book.title}</h3>
                <BookInfo 
                  selected={book.id  == selectedBook}
                  author={book.author}
                  id={book.id}
                />
                <button onClick={() => this.handleAdd(book)}>
                  Add To Read
                </button>
                <button onClick={() => this.handleDel(book)}>Del</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Reading
