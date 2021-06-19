import http from "../http-commom/Http-commom";

const register = (data) => {
  return http.post("user/create", data);
};

const login = (data) => {
  return http.post("/rest-api/auth", data)
    .then((response) => {
      if (response.data.token) {
        // console.log("true");
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch(err => {
      console.log(err.response.status);
      throw err;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};