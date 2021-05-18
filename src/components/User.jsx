import React from "react";
import { useParams, useLocation } from "react-router-dom";

// first way without using useParams hook
// const User = ({ match }) => {

//   return <h2>User Component {match.params.fname}</h2>;
// };
const User = () => {
  const { fname } = useParams();

  const location = useLocation();

  console.log(location);
  return (
    <>
      <h2>User Component {fname}</h2>
      <p>My cuurent location {location.pathname}</p>
        {location.pathname === `/user/sushil` ? (<button onClick={()=>alert('u r awesome')}>click me</button>):null}

    </>
  );
};
export default User;
