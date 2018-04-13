import React from 'react'



class AddBook extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            title: '',
            author: '',
            status: 0
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleAdd (e) {
        e.preventDefault()
        this.props.addToList(this.state)
    }
    render() {
        return (
            <div className="addbook">
            <div className="theformbox">
                <form onSubmit={this.handleAdd}>
                    Title: <input name='title' onChange={this.handleChange} />
                    Author: <input name='author' onChange={this.handleChange} />
                    
                    <div className="dropdown">
                        <button className="btn">Status</button>
                        <div className="dropdown-content">
                            <button className="btn-none" name="status" value="1" href="#" onClick={this.handleChange}>To Read</button>
                            <button className="btn-none" name="status" value="2" href="#"onClick={this.handleChange}>Reading</button>
                            <button className="btn-none" name="status" value="3" href="#" onClick={this.handleChange}>Read</button>
                        </div>
                        
                    </div>
                    <button className="btn">Submit</button>
                    
                </form>
                </div>
            </div>
        )
    }
}

export default AddBook