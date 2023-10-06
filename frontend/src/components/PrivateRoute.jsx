// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;

}

export default PrivateRoute;
