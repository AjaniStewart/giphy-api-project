import React, {Component} from 'react';
import "./SearchField.css"

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            fetched: true
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

handleChange = event => {
    console.log(event.target.value);
    this.setState({term: event.target.value});
}
handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.handleSubmit(this.state.term);
}

    render () {
        
        return (
            <div className = "search-field">
                <form>
                    <label>
                        Search:
                        <input class = "input" type = "text" placeholder = "Doge" onChange = {this.handleChange}/>
                    </label>
                    <button class = "button" onClick={this.handleSubmit}>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default SearchField;