import React from "react";

import { Link } from "react-router-dom";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <h1>
        Welcome to the School Management System (Made with React, Typescript and
        Firebase)
      </h1>
      <p>Select the page you would like to visit: </p>

      <div className="actions">
        <Link className="link" to="/students">
          See Students
        </Link>
        <Link className="link" to="/students/create">
          Create Student
        </Link>
        <Link className="link" to="/students/update">
          Update Student
        </Link>
        <Link className="link" to="/students/delete">
          Delete Student
        </Link>
      </div>

      <div className="icons">
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-firebase-plain colored"></i>
      </div>
    </div>
  );
}

export default Home;
