import React from 'react'
// import {Link} from 'react-router-dom'

class Read extends React.Components {
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

  render () {
    const readList = this.getReadList(this.props.booksData.books)
    return (
      <div className="books-read">
        <h2>Books I have read:</h2>
        <ul>
          {readList.map(book => {
            return (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <button onClick={() => this.handleAdd(book)}>
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
