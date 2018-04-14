import React from 'react'

class Liked extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      update: {
        id: -1,
        status: 0,
        like: null
      }
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  getLikeList (booksArr) {
    const likeArr = booksArr.filter(book => book.like === true)
    return likeArr
  }

  handleAdd (book) {
    const update = {
      id: book.id,
      status: 3,
      like: true
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
    // make sure getLikeList called everytime rerender happened
    const likeList = this.getLikeList(this.props.booksData.books)
    return (
      <div>
        <h2>Books I liked: </h2>
        <ul>
          {likeList.map(book => {
            return (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <h5>Author: {book.author}</h5>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Liked
