import React from "react";
import "./Home.css";
import AllBlogs from "../components/AllBlogs";
export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Apollo</h1>
        <p className="text-muted">Community learning made easy.</p>
      </div>
      {/* <AllBlogs/> */}
    </div>
  );
}