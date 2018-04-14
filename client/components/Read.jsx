import React from 'react'
import BookInfo from './BookInfo'


class Read extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      update: {
        id: -1,
        status: 0,
        like: null
      },
      selectedBook: 0      
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.onSelect = this.onSelect.bind(this)
    
  }

  getReadList (booksArr) {
    const readArr = booksArr.filter(book => book.status === 3)
    return readArr
  }

  handleAdd (book) {
    const update = {
      id: book.id,
      status: 3,
      like: true
    }
    this.props.updateStatus(update)
  }

  onSelect (id) {
    this.setState({
      selectedBook: id
    })
  }

  render () {
    const readList = this.getReadList(this.props.booksData.books)
    const selectedBook = this.state.selectedBook    
    return (
      <div className="books-read">
        <h2>Books I have read:</h2>
        <ul>
          {readList.map(book => {
            return (
              <div key={book.id}>
                <h3 onClick={() => this.onSelect(book.id)}>{book.title}</h3>
                <BookInfo 
                  selected={book.id  == selectedBook}
                  author={book.author}
                  id={book.id}
                />
                <button className="btn btn-margin" onClick={() => this.handleAdd(book)}>
                  Like
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Read
