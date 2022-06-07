import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    
    render () {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error {this.state.errorMessage}
            </div>
        )
    }
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// React 18
//const container = document.querySelector('#root')
//const root = createRoot(container);
//root.render(<App />);