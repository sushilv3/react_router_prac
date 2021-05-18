import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
          Service
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/manish">
          User
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact us
        </NavLink>

      </div>
      <br />
      <a href="/">About Us</a>

      <a href="/contact">contact Us</a>
    </>
  );
};

export default NavBar;
