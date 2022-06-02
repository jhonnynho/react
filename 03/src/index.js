// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

//import { createRoot } from 'react-dom/client';

// Create a React Component
const App =  function () {
    return (
      <div className="ui container comments">
          <CommentDetail author="Sam"/>
          <CommentDetail author="Alex"/>
          <CommentDetail author="Jane"/>
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