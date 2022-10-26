import React from "react";
import { Navigate } from "react-router-dom";
// auth
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
