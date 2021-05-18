import React from "react";
import { useParams } from "react-router-dom";

// first way without using useParams hook
// const User = ({ match }) => {
  

//   return <h2>User Component {match.params.fname}</h2>;
// };
 const User = () => {
  const {fname} = useParams();

   return <h2>User Component {fname}</h2>;
 };
export default User;
