import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {

  return (
  
  
    <div className="container">
    <div className="admin">Admin Dashboard</div>
    <div className="content">
      <Link to="/adusers" style={{ color: "inherit", textDecoration: "none" }}>
      <span  className="heading">Users</span>
      </Link>
      <Link to="/adtickets" style={{ color: "inherit", textDecoration: "none" }}>
      <span  className="heading">Tickets</span>
      </Link>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <span  className="heading">Home</span>
      </Link>
    </div>
  </div>
    
  );
};

export default Admin;
