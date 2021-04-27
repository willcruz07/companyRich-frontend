import api from "./api";

export const get = async () => {
  try {
    const storageToken = localStorage.getItem("@brbatel:token");
    const response = await api.get("/billing-annual", {
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
