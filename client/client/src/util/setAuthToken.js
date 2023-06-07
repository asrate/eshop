import axios from "axios";

// The function "setAuthToken" takes a token as parameter. If the token exists, it sets it in the header of the axios request with the key "x-auth-token". If the token does not exist, it removes the "x-auth-token" from the header of the axios request.This function is often used in combination with authentication systems to ensure that the client is authorized to make the requested requests.

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
export default setAuthToken;
