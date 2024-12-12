import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change to 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
