import {React, useEffect, useState} from 'react';
import { Container, Navbar, Nav, NavDropdown, NavDropdownProps, Form, FormControl, FormControlProps, Button } from "react-bootstrap";
import axios from 'axios';
import "./App.css";
import Routes from './Routes';
import { LinkContainer } from "react-router-bootstrap";
import TagsContainer from "./containers/TagsContainer";
import SearchContainer from "./containers/SearchContainer";
import Blog from './components/Blog';
function App() {

  const [searchText, setSearchText] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState([false]);

  function trimString(string){
    return string.substring(1).slice(0,-1)
  }

  function clearScreen(){
    window.location.reload(false);
  }
  function handleClick(data){
    let dataString = JSON.stringify(data);
    dataString = trimString(dataString);
    const res = axios.get('https://vj7n2vxl65.execute-api.ap-southeast-1.amazonaws.com/prod/api/v1/BlogElasticSearch/search/'.concat(dataString).concat('/0'), 
    {
      // request body
    })
    .then(
      res => {
          setSearchResults(res.data);
          if (res.data != undefined){
            setShowResults(true);
          }
      }
    ).catch(
        err => console.log(err)
    );
  }

  return (
    <div className="App container py-3">
      <TagsContainer/>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Apollo</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/AllBlogsContainer">
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
            <LinkContainer to="/AllQuestions">
                  <Nav.Link>Questions & Answers</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/MyBlogs">
                  <Nav.Link>Your Blogs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/PostBlogs">
                  <Nav.Link>Post Blogs</Nav.Link>
                </LinkContainer>
          </Nav>
          <Form className="d-flex" style={{width: 400, marginLeft: 150}}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-4"
              aria-label="Search"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <Button 
              variant="outline-success"
              style={{width: 100}}
              onClick={() => { 
                handleClick(searchText);     
              }}>
              Search
            </Button>
            <Button 
              variant="outline-danger"
              style={{width : 100}}
              onClick={() => { 
                clearScreen();     
              }}>
              Clear
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <SearchContainer results={searchResults} display={showResults}/>
      <Routes />
    </div>
  );
}

export default App;