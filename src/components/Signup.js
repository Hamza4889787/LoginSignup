import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Signup = () => {
  const { dispatch } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const newUser = { username, password };
    dispatch({ type: "SIGNUP", payload: newUser });
    navigate("/login");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
