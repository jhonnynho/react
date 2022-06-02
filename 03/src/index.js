// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

//import { createRoot } from 'react-dom/client';

// Create a React Component
const App =  function () {
    return (
      <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail author="Sam" timeAgo='Today at 4:45PM' avatar={faker.image.image()} content="Nice blog post"/>
          </ApprovalCard>
          <CommentDetail author="Alex" timeAgo='Today at 2:00PM' avatar={faker.image.image()} content="I like the subject"/>
          <CommentDetail author="Jane" timeAgo='Yesterday at 5:00PM' avatar={faker.image.image()} content="I like the writing"/>
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