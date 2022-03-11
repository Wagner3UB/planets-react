import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

function NotFound404() {
  return (
    <>
      <img className="img-404" src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="page not found"/>
      <Link to="/planets-react/">Back</Link>
    </>
  );
}

export default NotFound404;
