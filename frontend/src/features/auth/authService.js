import axios from "axios";

const base_url = "http://localhost:3001/api/user";

export const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}/register-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}/userlogin`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${base_url}/find-all-users`);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
