import axios from "axios";

const API_URL = "http://localhost:8080/api/";

export const register = (
  firstname: string,
  lastname: string,
  username: string,
  password: string
) => {
  return axios.post(API_URL + "v1/createuser", {
    firstname,
    lastname,
    username,
    password,
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "v1/session", {
      username,
      password,
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      if (response.data.Token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
