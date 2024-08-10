import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Welcome = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div>
      {state.currentUser && <p>Welcome, {state.currentUser.username}!</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
