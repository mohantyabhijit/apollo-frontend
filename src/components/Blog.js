import {useEffect, useState} from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
function Blog(props) {
    const baseUrl = 'http://localhost:9001/v1/blogs/blog/';
    const blogUrl = baseUrl.concat(props.blogId);
    const [blogTitle, setBlogTitle] = useState([]);
    const [blogText, setBlogText] = useState([]);
    useEffect(() => {
        axios.get(blogUrl).then(res => {
            setBlogTitle(res.data.blogTitle);
        })
    }, [])

    useEffect(() => {
        axios.get(blogUrl).then(res => {
            setBlogText(res.data.blogText);
        })
    }, [])
  
    return <div className="App">
        <Container fluid>
        <h1>{blogTitle}</h1>
        <Card>
            <Card.Body>{blogText}</Card.Body>
        </Card>
        </Container>
        </div>
    };

export default Blog;