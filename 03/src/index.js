// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
//import { createRoot } from 'react-dom/client';

// Create a React Component
const App =  function () {
    return (
      <div className="ui container comments">
          
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