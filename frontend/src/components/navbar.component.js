import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar =()=> {

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
         
          <li className="navbar-item">
          <Link to="/createincome" className="nav-link">Create income</Link>
          </li>
          <li className="navbar-item">
          <Link to="/income" className="nav-link">Incomes</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }


export default Navbar;