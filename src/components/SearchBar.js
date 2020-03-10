import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Hi there!'};

    // onFormSubmit(event) {
    //     event.preventDefault(); // Prevent page refresh after form submittal. We'll customize our own.
    //     console.log(this.state.term);
    // }
    onFormSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh after form submittal. We'll customize our own.
        console.log('SearchBar', this.state.term); // ES6 arrow function always makes 'this' equal to instance of 'SearchBar'.
        this.props.onSubmit(this.state.term); // Calls parent onSubmit function with SearchBar state, which is being passed in thru <SearchBar onSubmit={this.onSearchSubmit} /> 
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;