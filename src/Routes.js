import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import MyBlogs from "./containers/MyBlogs";
import BlogsByAuthor  from "./components/BlogsByAuthor";
import PostBlog from "./components/PostBlog";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/MyBlogs" component={BlogsByAuthor}>
        <BlogsByAuthor authorId={"u001"}/>
      </Route>
      <Route path="/PostBlogs" component={PostBlog}>
        <PostBlog/>
      </Route>
    </Switch>
  );
}