import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Upload Excel</Link></li>
        <li className="navbar-item"><Link to="/dynamicForm" className="navbar-link">Form</Link></li>
        <li className="navbar-item"><Link to="/list" className="navbar-link">List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
