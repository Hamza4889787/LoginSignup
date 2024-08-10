import React, { createContext, useReducer, useEffect } from "react";

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      // Add new user to the list and update localStorage
      const users = Array.isArray(state.users) ? state.users : [];
      // Add new user to the list and update localStorage
      const updatedUsers = [...users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };
    case "LOGIN":
      // Set the current user and store in localStorage
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      localStorage.removeItem("currentUser");
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: JSON.parse(localStorage.getItem("user")) || [],
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
