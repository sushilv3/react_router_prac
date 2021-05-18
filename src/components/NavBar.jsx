import React from "react";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <NavLink exact activeClassName="active_class" to="/">About us</NavLink>
    <NavLink exact activeClassName="active_class" to="/contact">Contact us</NavLink>
    <br />
      <a href="/">About Us</a>

      <a href="/contact">contact Us</a>
    </>
  );
};

export default NavBar;
