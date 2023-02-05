import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navBar">
    <h1 className="navBar-title">Math Magicians</h1>
    <ul className="navBar-ul">
      <li className="navBar-item">
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li className="navBar-item">
        <NavLink to="/Calculator">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/Quote">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
