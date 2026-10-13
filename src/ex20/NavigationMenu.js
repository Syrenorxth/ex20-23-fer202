import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/users" end>Users</NavLink>
      <NavLink to="/users/1">User 1</NavLink>
      <NavLink to="/users/2">User 2</NavLink>
    </nav>
  );
};

export default NavigationMenu;
