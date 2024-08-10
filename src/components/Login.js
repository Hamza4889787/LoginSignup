import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/welcome");
    } else {
      alert("Invalid username or password");
    }
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  );
};

export default Login;
