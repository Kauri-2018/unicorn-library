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
                {/* THis needs to be a dropdown menu below */}
                Status <input name='status' onchange={this.handleChange} />
                Title: <input name='title' onchange={this.handleChange} />

                </form>
            </div>
        )
    }
}