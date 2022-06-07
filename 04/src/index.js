import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude; </div>;
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