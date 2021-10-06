import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import BlogsByAuthor from './components/BlogsByAuthor';

ReactDOM.render(<React.StrictMode>
  <BlogsByAuthor authorId={'u002'}/>
</React.StrictMode>, document.getElementById('root'));