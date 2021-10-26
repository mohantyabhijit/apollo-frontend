import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import axios from 'axios';
import {
  Container, Card,
} from 'react-bootstrap';

function Blog(props) {
  const baseUrl = 'https://gxhbmsl9v0.execute-api.ap-southeast-1.amazonaws.com/prod/v1/blogs/blog/';
  console.log(props.blogId);
  const blogUrl = baseUrl.concat(props.blogId);
  const [blogTitle, setBlogTitle] = useState([]);
  const [blogText, setBlogText] = useState([]);
  
  useEffect(() => {
    axios.get(blogUrl).then((res) => {
      if (res != undefined){
        setBlogTitle(res.data.blogTitle);
      }
    });
  }, []);

  useEffect(() => {
    axios.get(blogUrl).then((res) => {
      if (res != undefined){
        setBlogText(res.data.blogText);
      }
    });
  }, []);

  function trimString(string){
    return string.substring(1).slice(0,-1)
  }

  const divStyle = {
    marginTop: "5"
  }
  if (blogTitle != undefined){
    return (
      <div style={{marginTop: 20}}>
        <div className="App">
        <div style={{margin: 30}}>
          <Container fluid >
            <h1>
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
  } else return <div></div>;
  
}

Blog.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default Blog;
