import axios from "axios";

const base_url = "http://localhost:3001/api/user/";

export const registerUser = async (userData) => {
  const responce = await axios.post(`${base_url}/register-user`, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
