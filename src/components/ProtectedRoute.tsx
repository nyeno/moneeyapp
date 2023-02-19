import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


type ProtectedRouteType = {
  children: React.ReactElement;
};


export default function ProtectedRoute({ children }:ProtectedRouteType) {
  const { isLoggedIn } = useAuth();

  console.log("Check user in Private: ", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
