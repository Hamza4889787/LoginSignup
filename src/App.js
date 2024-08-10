import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
