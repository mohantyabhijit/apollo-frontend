import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import Blog from './Blog';

function AllBlogs(props) {
  const baseUrl = 'https://gxhbmsl9v0.execute-api.ap-southeast-1.amazonaws.com/prod/v1/blogs/all';
  // const author = props.authorId;
  // const authorUrl = baseUrl.concat(author);
  const [allBlogData, setAllBlogData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
        setAllBlogData(res.data)
    });
  }, []);
  console.log(allBlogData[0]);
  let blogIds = [];
  {allBlogData.map((localState, index) => (
    blogIds.push(localState.blogId)
  ))}
  console.log(blogIds);
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

export default AllBlogs;
