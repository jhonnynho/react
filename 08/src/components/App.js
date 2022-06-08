import React from "react";
import unplash from "../api/unplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        const response = await unplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
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