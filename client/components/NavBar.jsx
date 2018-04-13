import React from 'react'

class NavBar extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        title: '',
        author: '',
        status: 0
      }
    }
    render () {
        return (
            <div className="navbar">
                <button className="btn btn-nav">Home</button>
                <button className="btn btn-nav">To Read</button>
                <button className="btn btn-nav">Reading</button>
                <button className="btn btn-nav">Read</button>
            </div>
        )
    }

}

export default NavBar