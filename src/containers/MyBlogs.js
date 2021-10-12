import React from "react";
import "./Home.css";
import BlogsByAuthor from "../components/BlogsByAuthor";
export default function MyBlogs() {
  return (
    <div className="Home">
      <BlogsByAuthor/>
    </div>
  );
}