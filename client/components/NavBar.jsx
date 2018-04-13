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
                <a href="/#/"><button className="btn btn-nav">To Read</button></a>
                <a href="/#/reading"><button className="btn btn-nav">Reading</button></a>
                <a href="/#/read"><button className="btn btn-nav">Read</button></a>
            </div>
        )
    }

}

export default NavBar