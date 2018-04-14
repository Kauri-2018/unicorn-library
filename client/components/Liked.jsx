import React from 'react'

import BookInfo from './BookInfo'


class Liked extends React.Component {
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

  onSelect (id) {
    this.setState({
      selectedBook: id
    })
  }

  render () {
    // make sure getLikeList called everytime rerender happened
    const likeList = this.getLikeList(this.props.booksData.books)
    const selectedBook = this.state.selectedBook    
    return (
      <div>
        <h2>Books I liked: </h2>
        <ul>
          {likeList.map(book => {
            return (
              <div key={book.id}>
                <h3 onClick={() => this.onSelect(book.id)}>{book.title}</h3>
                <BookInfo 
                  selected={book.id  == selectedBook}
                  author={book.author}
                  id={book.id}
                />
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Liked
