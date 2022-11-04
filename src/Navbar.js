import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">The Cjay Blog</h1>
      <div className="links-items">
        <Link to="/" id="nav-link1">
          Home
        </Link>
        <Link to="/create" id="nav-link2">
          New Blog
        </Link>
      </div>
    </nav>
  );
}
