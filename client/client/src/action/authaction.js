import {
  SET_CURRENT_USER,
  SUCCESFULL_REGISTER,
  FAILER_REGISTER,
  ERRORS,
  AUTH_ERROR,
} from "./type";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import { getServer } from "../util/index";

// The function setCurrentUser is a JavaScript code block that takes in a user object and returns a dispatch function. The code block first checks if there is a token stored in the local storage. If there is, it sets the authentication token using the setAuthToken function. The code block then sends a GET request to a server using the axios library. If the request is successful, it dispatches an action to set the current user using the SET_CURRENT_USER type and the data received from the server. If the request is unsuccessful, it dispatches an action of type AUTH_ERROR.Finally, the function returns an object with the type SET_CURRENT_USER and the user object as its payload. This function can be used to set the current user in a Redux store.

export const setCurrentUser = (user) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${getServer()}/api/auth`);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }

  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// It looks like a code snippet of a function to register user in a web application. The function takes in the user data as a parameter and dispatches an action to add the user to the database if the registration is successful. If there is an error during the registration process, the function dispatches an error action with a relevant payload. Axios is being used to make the HTTP request to the server. A configuration object is created to specify the content type of the request payload as JSON. The server's endpoint for the registration process is being obtained from the getServer variable. Overall, this function would be part of a Redux action creator to handle the user registration process.

export const register = (userData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`${getServer()}/api/users`, userData, config);

    dispatch({
      type: SUCCESFULL_REGISTER,
      payload: res.data,
    });
  } catch (err) {
    // console.log("err", err);

    const error = err.response.data.errors;
    if (error) {
      dispatch({
        type: ERRORS,
        payload: error,
      });
    } else {
      dispatch({
        type: FAILER_REGISTER,
      });
    }
  }
};
