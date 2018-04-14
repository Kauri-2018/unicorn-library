import React from 'react'

class AddBook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      status: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleNumChange = this.handleNumChange.bind(this)
  }
  
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleNumChange (e) {
    this.setState({
      status: Number(e.target.value)
    })

  }

  handleAdd (e) {
    e.preventDefault()
    this.props.addToList(this.state)
  }
  render () {
    
    return (
      <div className="addbook">
        <div className="theformbox">
          {/* test use */}
          {/* <p>status: {this.state.status}</p>      
          <p>title: {this.state.title}</p>      
          <p>author: {this.state.author}</p>      
          <p>status type: {typeof this.state.status}</p>       */}
          <h2>Add a new book</h2>
          <form onSubmit={this.handleAdd}>
            Title: <input name='title' onChange={this.handleChange} />
            Author: <input name='author' onChange={this.handleChange} />
            <select className="dropdown" onChange={this.handleNumChange}>
                <option className="btn-none" name="status" value="0" href="#" >Status</option>
                <option className="btn-none" name="status" value="1" href="#" >To Read</option>
                <option className="btn-none" name="status" value="2" href="#" >Reading</option>
                <option className="btn-none" name="status" value="3" href="#" >Read</option>
            </select>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddBook
