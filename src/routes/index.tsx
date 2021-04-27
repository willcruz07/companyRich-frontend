import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { MainRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
