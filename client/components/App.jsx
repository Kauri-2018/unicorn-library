import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import booksJson from '../../books.json'
import ToRead from './ToRead'
import Reading from './Reading'
import Read from './Read'
// import Like from './Like'
import AddBook from './AddBook'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {booksJson}
    this.updateStatus = this.updateStatus.bind(this)
  }
  // updateData.id and updateData.status passed in
  updateStatus (targetBook) {
    booksJson.books.forEach(book => {
      if(book.id === targetBook.id) {
        book.status = targetBook.status
      }
    })
    // console.log(booksJson)
    this.setState({booksJson})
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <h1>Unicorn library</h1>
          <div className='home'>
            <Route path='/' render={
              () => {
                return <ToRead booksData={this.state.booksJson} updateStatus={this.updateStatus}/>
              }
            } />
            <Route exact path='/reading' render={
              () => {
                return <Reading booksData={this.state.booksJson} />
              }
            } />
            <Route exact path='/read' render={
              () => {
                return <Read booksData={this.state.booksJson} />
              }
            } />
            {/* <Route exact path='/' component={Reading}/>
            <Route path='/list/:rank' component={Read}/>
            <Route path='/rank/:rank/:name' component={Like}/> */}
          </div>
        </div>
     
    </Router>
    )
  }
  
}

export default App
