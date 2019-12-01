import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGGED_IN,
  AUTH_ERROR,
  LOG_OUT,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { user: payload, isAuthenticated: true };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
      return { user: null, isAuthenticated: false };
    case LOGGED_IN:
      return { user: payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default auth;
