import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ToRead from './ToRead'
import Reading from './Reading'
import Read from './Read'
import Like from './Like'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Unicorn library</h1>
        <div className='home'>
          <Route path='/' component={ToRead}/>
          <Route exact path='/' component={Reading}/>
          <Route path='/list/:rank' component={Read}/>
          <Route path='/rank/:rank/:name' component={Like}/>
        </div>
      </div>
    </Router>
  )
}

export default App
