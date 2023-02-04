import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navBar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
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
