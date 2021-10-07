import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import Blog from './Blog';

function BlogsByAuthor(props) {
  const baseUrl = 'http://localhost:9001/v1/blogs/author/';
  const author = props.authorId;
  const authorUrl = baseUrl.concat(author);
  console.log(authorUrl);
  const [blogIds, setBlogIds] = useState([]);
  useEffect(() => {
    axios.get(authorUrl).then((res) => {
      setBlogIds(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Container fluid>
        {blogIds.map((c) => (
          <Card>
            <Blog key={c} blogId={c} />
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default BlogsByAuthor;
