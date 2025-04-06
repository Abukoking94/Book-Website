// utils/RequireAuth.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "./auth";

const RequireAuth = ({ children }) => {
  const user = getUser();

  return user ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
