import React from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export function RoleRoute({ children, role }) {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const userRole = localStorage.getItem("role");

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (userRole !== role) return <Navigate to="/login" />;

  return children;
}
