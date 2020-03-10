import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async term => {
        console.log('App', term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term}, // which produces as this https://api.unsplash.com/search/photos?/query=cars
            headers: {Authorization: 'Client-ID j4-B_67gjm1IXBIvrfrZ7yzUNSQPMVClO7JSuUnsgJI'}
        });

        console.log('async await >', response.data.results);
        this.setState({images: response.data.results}); // Causes a re-render one list of pic links are received.
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} /> 
                Found {this.state.images.length} images
            </div>
        );
    }
}

// const App = () => {
//     return (
//         <div className="ui container" style={{marginTop: '10px'}}>
//             <SearchBar />
//         </div>
//     );
// };

export default App;