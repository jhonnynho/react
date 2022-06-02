import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click Me!';
}

const App =  function () {
    const buttonText = 'Click Me!';
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }} >{getButtonText()}</button>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// React 18
//const container = document.querySelector('#root')
//const root = createRoot(container);
//root.render(<App />);