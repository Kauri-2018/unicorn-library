import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import booksJson from '../../books.json'
import ToRead from './ToRead'
import Reading from './Reading'
import Read from './Read'
import Liked from './Liked'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {booksJson}
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <h1>Unicorn library</h1>
          <div className='home'>
            <Route path='/' render={
              () => {
                return <ToRead booksData={this.state.booksJson} />
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
            <Route exact path='/liked' render={
              () => {
                return <Liked booksData={this.state.booksJson} />
              }
            } />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
