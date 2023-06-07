import {
  SET_CURRENT_USER,
  SUCCESFULL_REGISTER,
  FAILER_REGISTER,
  AUTH_ERROR,
  ERRORS,
} from "../action/type";
// import {isEmpty} from ("lodash")

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: {},
  errors: [],
};
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case SUCCESFULL_REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case FAILER_REGISTER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    case ERRORS:
      return {
        ...state,

        errors: payload,
      };

    default:
      return state;
  }
}
