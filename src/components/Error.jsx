import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>oops!!404 Page not found</h2>
      <p>Sorry, this page doesn't exist</p>
      <NavLink to='/'>Go back</NavLink>
    </>
  );
};
export default Error;