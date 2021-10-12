/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import BlogsByAuthor from './components/BlogsByAuthor';
import PostBlog from './components/PostBlog';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);