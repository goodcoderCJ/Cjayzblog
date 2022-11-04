import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry </h2>
      <p>That page can not found</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
}
