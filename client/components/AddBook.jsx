import react from 'React'



class AddBook extends React.Component {
    constructor (props){
        super(props)
    }
    render() {
        return (
            <div className="addbook">
                <form>
                    Title: <input name='title' onchange={this.handleChange} />
                    Author: <input name='author' onchange={this.handleChange} />
                    <div class="dropdown">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Status
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" name="1">To Read</a>
                            <a className="dropdown-item" name="2">Reading</a>
                            <a className="dropdown-item" name="3">Read</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}