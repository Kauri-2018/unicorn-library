import React from 'react'

class ToRead extends React.Component {
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

  getToReadList (booksArr) {
    const toReadArr = booksArr.filter(book => book.status === 1)
    return toReadArr
  }

  handleAdd (book) {
    const update = {
      id: book.id,
      status: 2
    }
    this.props.updateStatus(update)
  }

  handleDel (book) {
    const update = {
      id: book.id
    }
    this.props.deleteBook(update)
  }

  render () {
    // make sure getToReadList called everytime rerender happened
    const toReadList = this.getToReadList(this.props.booksData.books)
    return (
      <div>
        <h2>Books I want to read: </h2>
        <ul>
          {toReadList.map(book => {
            return (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <h5>{book.author}</h5>
                <button onClick={() => this.handleAdd(book)}>
                  Add To Reading
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

export default ToRead
