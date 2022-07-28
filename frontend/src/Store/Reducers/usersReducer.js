import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT,
} from "../Constants/userConstants";

export const userReducer = (
  state = { users: [], login: {} },
  { type, payload }
) => {
  switch (type) {
    // signup
    case SIGNUP_REQUEST:
      return {
        isLoading: true,
      };
    case SIGNUP_REQUEST_SUCCESS:
      return {
        isLoading: false,
        signup: true,
      };
    case SIGNUP_REQUEST_FAIL:
      return {
        isLoading: false,
        error: payload,
      };

    // Login
    case LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        isLoading: false,
        login: payload,
      };
    case LOGIN_REQUEST_FAIL:
      return {
        isLoading: false,
        error: payload,
      };

    // logout
    case LOGOUT:
      return {};

    default:
      return state;
  }
};
