import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/collections" exact>Library</NavLink>
    </div>
  );
};

export default NavBar;