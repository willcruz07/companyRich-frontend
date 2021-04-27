import api from "./api";
import { ICreateCompany } from "../model/Company";

export const get = async (page = 1) => {
  try {
    const storageToken = localStorage.getItem("@brbatel:token");
    const response = await api.get(`/company?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: storageToken,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const post = async (company: ICreateCompany) => {
  try {
    const storageToken = localStorage.getItem("@brbatel:token");
    const response = await api.post("/company", company, {
      headers: {
        "Content-Type": "application/json",
        Authorization: storageToken,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getCompany = async (company: string) => {
  try {
    const storageToken = localStorage.getItem("@brbatel:token");
    const response = await api.get(`/company/${company}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: storageToken,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
