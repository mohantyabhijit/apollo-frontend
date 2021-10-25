import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import axios from 'axios';
import {
  Container, Card,
} from 'react-bootstrap';

function Blog(props) {
  const baseUrl = ' https://gxhbmsl9v0.execute-api.ap-southeast-1.amazonaws.com/prod/v1/blogs/blog/';
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

  const divStyle = {
    marginTop: "5"
  }

  return (
    <div style={{marginTop: 20}}>
      <div className="App">
      <div style={{margin: 30}}>
        <Container fluid >
          <h1>
          {/* {parse({blogTitle}.blogTitle.toString())} */}
          {parse(trimString({blogTitle}.blogTitle.toString()))}
          </h1>
          <Card style={{margin: 5}}>
            <Card.Body>
              {parse({blogText}.blogText.toString())}
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
    </div>
    
  );
}

Blog.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default Blog;
