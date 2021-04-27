import React from "react";
import api from "./api";

export const postSession = async (email: string, password: string) => {
  const response = await api.post("/sessions", {
    email,
    password,
  });

  return response;
};
