// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
//import { createRoot } from 'react-dom/client';

// Create a React Component
const App =  function () {
    return (
      <div className="ui container comments">
          <div className="comment">
              <a href="/" className="avatar">
                  <img alt="avatar" src={faker.image.image()} />
              </a>
              <div className="content">
                  <a href="/" className="author">
                      Sam
                  </a>
                  <div className="metadata">
                      <span className="date">Today at 6:00PM</span>
                  </div>
                  <div className="text">
                      Nice blog post!
                  </div>
              </div>
          </div>
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