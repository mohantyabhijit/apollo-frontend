import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import Blog from './Blog';

function BlogsByAuthor(props) {
  const baseUrl = ' https://gxhbmsl9v0.execute-api.ap-southeast-1.amazonaws.com/prod/v1/blogs/author/';
  const author = props.authorId;
  const authorUrl = baseUrl.concat(author);
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
          <Card style={{marginTop:20}}>
            <Blog key={c} blogId={c} />
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default BlogsByAuthor;
