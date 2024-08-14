// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App'; // Import your main App component

// Find your root container in the HTML
const container = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(container); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
