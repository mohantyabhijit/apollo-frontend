import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import axios from 'axios';
import {
  Container, Card,
} from 'react-bootstrap';

function Blog(props) {
  const baseUrl = 'http://localhost:9001/v1/blogs/blog/';
  const blogUrl = baseUrl.concat(props.blogId);
  const [blogTitle, setBlogTitle] = useState([]);
  const [blogText, setBlogText] = useState([]);
  useEffect(() => {
    axios.get(blogUrl).then((res) => {
      setBlogTitle(res.data.blogTitle);
    });
  }, []);

  useEffect(() => {
    axios.get(blogUrl).then((res) => {
      setBlogText(res.data.blogText);
    });
  }, []);

  function trimString(string){
    return string.substring(1).slice(0,-1)
  }
  return (
    <div className="App">
      <Container fluid>
        <h1>
        {parse(trimString({blogTitle}.blogTitle.toString()))}
        </h1>
        <Card>
          <Card.Body>
            {parse({blogText}.blogText.toString())}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

Blog.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default Blog;
