/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import BlogsByAuthor from './components/BlogsByAuthor';
import PostBlog from './components/PostBlog';


ReactDOM.render(<React.StrictMode>
  {/* <BlogsByAuthor authorId={'u002'}/> */}
  <PostBlog />
                </React.StrictMode>, document.getElementById('root'));
