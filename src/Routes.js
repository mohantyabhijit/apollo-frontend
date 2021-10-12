import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import MyBlogs from "./containers/MyBlogs";
import BlogsByAuthor  from "./components/BlogsByAuthor";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/MyBlogs" component={BlogsByAuthor}>
        <BlogsByAuthor/>
      </Route>
    </Switch>
  );
}