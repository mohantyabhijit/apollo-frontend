import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Routes from './Routes';
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Apollo
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/AllQuestions">
              <Nav.Link>Questions & Answers</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MyBlogs">
              <Nav.Link>Your Blogs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/PostBlogs">
              <Nav.Link>Post Blogs</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/AllBlogsContainer">
              <Nav.Link>All Blogs</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;