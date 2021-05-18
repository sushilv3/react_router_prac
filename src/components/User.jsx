import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

// first way without using useParams hook
// const User = ({ match }) => {

//   return <h2>User Component {match.params.fname}</h2>;
// };
const User = () => {
  const { fname } = useParams();

  const location = useLocation();
  console.log(location);

  const history = useHistory();
  console.log(history);

  return (
    <>
      <h2>User Component {fname}</h2>
      <p>My cuurent location {location.pathname}</p>
      {location.pathname === `/user/sushil` ? (
        <button onClick={() => history.goBack()}> Back</button>
      ) : null}
    </>
  );
};
export default User;
