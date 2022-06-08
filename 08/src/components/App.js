import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] };
    
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID cFgdB4iMIL637eoy5QDB7mysjX0MymCrXyboKfX1amg'
            }
        });
        
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
            </div>
        );
    }
};

export default App;