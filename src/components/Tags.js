import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";

function Tags() {
  const baseUrl = 'https://vj7n2vxl65.execute-api.ap-southeast-1.amazonaws.com/prod/api/v1/BlogElasticSearch/trendingBlogTags/';
  const [tags, setTags] = useState([]);
  
  useEffect(() => {
    axios.get(baseUrl,{ crossdomain: true }).then((res) => {
        setTags(res.data);
    });
  }, []);

  return (
    <div style={{marginLeft: 1100, marginBottom: -100, position: 'absolute'}}>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <NavDropdown bg="light" title="Trending Tags" id="navbarScrollingDropdown">
                    {tags.map((c,index) =>(          
                    <NavDropdown.Item key={index}>{c}</NavDropdown.Item>
                    ))}        
                </NavDropdown>
            </Container>
        </Navbar>
    
    </div>
  );
}



Tags.propTypes = {
};

export default Tags;
